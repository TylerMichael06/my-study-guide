import { useState, useRef, useEffect } from "react";

// ─── DESIGN TOKENS — keep in sync with Dashboard.jsx ────────────────────────
const BASALT = "#0c1512";
const MOSS = "#121f1a";
const RIDGE = "#243830";
const RIDGE_BRIGHT = "#33493d";
const TIDEPOOL = "#2fd6ac";
const DAWN = "#ff8f5e";
const BONE = "#f2f0e6";
const LICHEN = "#9fb3a6";
const STONE = "#5b6d62";

const DISPLAY = "'Space Grotesk', sans-serif";
const BODY = "'Manrope', sans-serif";
const MONO = "'Space Mono', monospace";

// ── PASTE YOUR CLOUDFLARE WORKER URL HERE AFTER DEPLOYING (see setup steps) ──
const WORKER_URL = "https://YOUR-WORKER-NAME.YOUR-SUBDOMAIN.workers.dev";

// ── UPDATE THIS SYSTEM PROMPT WITH COURSE KNOWLEDGE AS LECTURES ARE ADDED ────
const TUTOR_SYSTEM_PROMPT = `You are an expert teaching assistant for a Deep Learning course at USC. You help students understand concepts, work through problems, and prepare for exams.

YOUR TUTORING STYLE:
1. BRAIN DUMP MODE: When a student pastes a brain dump, go through it item by item. Label each: ✅ Correct, ⚠️ Partially correct, ❌ Wrong, 🔴 Missing. End with a score and 2-3 things to drill.
2. SOCRATIC MODE: Ask one pointed follow-up question instead of explaining everything. Make them think.
3. EXAM TRAP FLAGGING: Proactively flag common mistakes. "Classic exam trap: ..."
4. DIRECT EXPLANATIONS: Short, precise. Use concrete examples and analogies.

BREVITY RULES — strictly follow these:
- Default response: 3-5 sentences max. If it needs more, use tight bullet points.
- Never restate the question back. Jump straight to the answer.
- No preamble ("Great question!", "Sure!", "Absolutely!"). Start with the substance.
- One concept per message. Don't volunteer extra information unless asked.
- If the student asks for a quick answer, give ONE sentence.
- Brain dumps are the exception — they can be longer because you're grading many items.

COURSE CONTEXT — CSCI 566, USC, Fall 2026 (Prof. Yue Zhao):
- Grading: quizzes 10 (5+5), assignment 10, midterm 35, project 45. Total 100.
- No final exam. The Nov 30 poster session + Dec 7 written final report are the final summative experience.
- Midterm: Monday Nov 2, in class. Open book, no electronic devices. Mostly multiple choice plus some single-number computation questions. Cumulative through the Oct 26 lecture only — nothing taught after that is in scope. Detailed scope posted by Oct 19.
- Schedule by topic: Aug 24 intro/linear models · Aug 31 classical ML (recorded) · Sep 14 NN basics/perceptron/gradient descent · Sep 21 backprop/vanishing gradients/activations (assignment out) · Sep 28 CNNs (Quiz 1) · Oct 5 RNN/LSTM/GNN (pre-proposal due) · Oct 12 training dynamics/transfer learning · Oct 19 GAN/VAE (assignment due) · Oct 26 attention/decoding/MoE (midterm review) · Nov 2 MIDTERM · Nov 9 self-supervised learning/LLMs/OOD (midterm report due) · Nov 16 scaling laws/RL (Quiz 2) · Nov 23 AutoML/project clinic · Nov 30 poster session · Dec 7 final report due.
- Course project: groups of 4-6, open topic, worth 45 points (pre-proposal 5, midterm report 10, final report 15-25, poster defense 10 in-person only, peer eval 5).
- If asked about logistics you're unsure of (specific deadlines beyond what's listed here, TA office hours, Piazza/Gradescope links), tell the student to check the course website or Piazza rather than guessing.

COVERED SO FAR (lectures the student has study pages for):
- Lecture 1 (Aug 24): three pillars (algorithms/data/compute), ML as function approximation, Universal Approximation Theorem, linear classifier y=Xw+b, supervised/unsupervised/self-supervised, next-token prediction, LLM→assistant→agent→agentic system, ReAct, agent skills & minimum privilege, agent failure modes (shortcut learning, execution loops, overprivilege), six trustworthiness dimensions.
- Lecture 2 (Aug 31, recorded): loss functions (hinge, L1, L2, cross-entropy), empirical risk minimization, overfitting/underfitting & Occam's razor, regularization (L1/lasso, L2/ridge, elastic net), optimization (random search, analytical solution, gradient descent), linear separability & need for non-linearity, decision trees (greedy splitting, stopping conditions, NP-hardness), model vs. data complexity, ensembles (bagging, random forests, boosting, XGBoost/LightGBM/CatBoost), model metrics (accuracy, precision, recall, F1, AUC-ROC, PR-AUC, rare-positive problem), kNN (k's effect on complexity, distance metrics, kNN-LM, semantic caching), hyperparameter selection (train/val/test, cross-validation), clustering & k-means (four steps, failure modes, LLM-guided clustering).
- Note: Chain of Thought / Tree of Thoughts material from Lecture 2 is explicitly NOT on the midterm — the professor said so directly. Flag this if the student is spending study time there.`;

export default function TutorChat({ onClose, lectureTitle, lectureTranscript }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `Hey! I'm your Deep Learning tutor${lectureTitle ? ` — you're on **${lectureTitle}**` : ""}.\n\nBest ways to use me:\n• **Brain dump** — paste everything you remember and I'll grade it\n• **Ask anything** — concepts, math, intuitions, exam traps\n• **Get quizzed** — ask me to test you on any topic`
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("chat");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (overrideText) => {
    const text = overrideText || input.trim();
    if (!text || loading) return;
    setInput("");

    const userMsg = { role: "user", content: mode === "braindump" ? `[BRAIN DUMP]\n${text}` : text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setLoading(true);

    const systemPrompt = TUTOR_SYSTEM_PROMPT +
      (lectureTitle ? `\n\nThe student is currently studying: ${lectureTitle}` : "") +
      (lectureTranscript ? `\n\n=== RAW LECTURE TRANSCRIPT ===\n${lectureTranscript}` : "");

    try {
      // No API key here — the Worker holds it server-side. See worker.js setup steps.
      const response = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-5",
          max_tokens: 600,
          system: systemPrompt,
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await response.json();
      const reply = data.content?.[0]?.text || "Sorry, something went wrong.";
      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: "assistant", content: "Connection error. Check that WORKER_URL in TutorChat.jsx is set correctly and your Worker is deployed." }]);
    }
    setLoading(false);
    setMode("chat");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  const formatMessage = (text) => {
    return text.split("\n").map((line, i) => {
      const formatted = line
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/`(.*?)`/g, `<code style="background:${RIDGE};padding:1px 5px;border-radius:3px;font-size:11px;color:${TIDEPOOL};font-family:'Space Mono',monospace">$1</code>`);
      return (
        <div key={i} style={{ marginBottom: "2px", lineHeight: 1.7 }}
          dangerouslySetInnerHTML={{ __html: formatted || "&nbsp;" }} />
      );
    });
  };

  return (
    <div style={{
      position: "fixed", bottom: "80px", right: "24px",
      width: "420px", height: "560px",
      background: MOSS, border: `1px solid ${RIDGE_BRIGHT}`,
      borderRadius: "14px", boxShadow: "0 24px 60px rgba(0,0,0,0.7)",
      display: "flex", flexDirection: "column", overflow: "hidden",
      zIndex: 1000, fontFamily: BODY, animation: "dlPanelIn .22s ease",
    }}>
      <style>{`
        @keyframes dlPanelIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes dlTutorPulse { 0%,100%{opacity:0.3;transform:scale(0.8)} 50%{opacity:1;transform:scale(1)} }
        @media (prefers-reduced-motion: reduce) {
          [data-dl-panel] { animation: none !important; }
          .dl-tutor-dot { animation: none !important; }
        }
      `}</style>

      {/* Header */}
      <div style={{ padding: "14px 16px", background: BASALT, borderBottom: `1px solid ${RIDGE}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "32px", height: "32px", background: `linear-gradient(135deg, ${TIDEPOOL}, ${DAWN})`, borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>🧭</div>
          <div>
            <div style={{ fontFamily: DISPLAY, fontSize: "13px", fontWeight: 700, color: BONE }}>Deep Learning Tutor</div>
            <div style={{ fontFamily: MONO, fontSize: "10px", color: TIDEPOOL, letterSpacing: "1px" }}>{lectureTitle ? lectureTitle.toUpperCase() : "ALL LECTURES"}</div>
          </div>
        </div>
        <button onClick={onClose} style={{ background: "transparent", border: "none", color: STONE, fontSize: "18px", cursor: "pointer", padding: "4px 8px" }}>×</button>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflow: "auto", padding: "14px 16px", display: "flex", flexDirection: "column", gap: "12px" }}>
        {messages.map((m, i) => (
          <div key={i} style={{ display: "flex", flexDirection: m.role === "user" ? "row-reverse" : "row", gap: "8px", alignItems: "flex-start" }}>
            <div style={{ minWidth: "26px", height: "26px", background: m.role === "user" ? RIDGE : `linear-gradient(135deg, ${TIDEPOOL}, ${DAWN})`, borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", flexShrink: 0 }}>
              {m.role === "user" ? "👤" : "🧭"}
            </div>
            <div style={{ maxWidth: "85%", background: m.role === "user" ? RIDGE : BASALT, border: `1px solid ${m.role === "user" ? RIDGE_BRIGHT : RIDGE}`, borderRadius: m.role === "user" ? "12px 4px 12px 12px" : "4px 12px 12px 12px", padding: "10px 12px", fontFamily: BODY, fontSize: "12.5px", color: LICHEN, lineHeight: 1.7 }}>
              {formatMessage(m.content)}
            </div>
          </div>
        ))}
        {loading && (
          <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
            <div style={{ width: "26px", height: "26px", background: `linear-gradient(135deg, ${TIDEPOOL}, ${DAWN})`, borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px" }}>🧭</div>
            <div style={{ background: BASALT, border: `1px solid ${RIDGE}`, borderRadius: "4px 12px 12px 12px", padding: "10px 14px", display: "flex", gap: "4px", alignItems: "center" }}>
              {[0, 1, 2].map(i => <div key={i} className="dl-tutor-dot" style={{ width: "6px", height: "6px", borderRadius: "50%", background: TIDEPOOL, animation: "dlTutorPulse 1.2s ease-in-out infinite", animationDelay: `${i * 0.2}s` }} />)}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Mode toggle */}
      <div style={{ padding: "0 12px 6px", display: "flex", gap: "6px", alignItems: "center" }}>
        <button onClick={() => setMode("chat")} style={{ padding: "4px 10px", borderRadius: "4px", fontFamily: MONO, fontSize: "10px", border: `1px solid ${mode === "chat" ? TIDEPOOL : RIDGE_BRIGHT}`, background: mode === "chat" ? TIDEPOOL + "18" : "transparent", color: mode === "chat" ? TIDEPOOL : STONE, cursor: "pointer", letterSpacing: "1px" }}>CHAT</button>
        <button onClick={() => setMode("braindump")} style={{ padding: "4px 10px", borderRadius: "4px", fontFamily: MONO, fontSize: "10px", border: `1px solid ${mode === "braindump" ? DAWN : RIDGE_BRIGHT}`, background: mode === "braindump" ? DAWN + "18" : "transparent", color: mode === "braindump" ? DAWN : STONE, cursor: "pointer", letterSpacing: "1px" }}>🧠 BRAIN DUMP</button>
        {mode === "braindump" && <span style={{ fontFamily: BODY, fontSize: "10px", color: DAWN }}>paste everything you remember →</span>}
      </div>

      {/* Input */}
      <div style={{ padding: "10px 12px", background: BASALT, borderTop: `1px solid ${RIDGE}`, display: "flex", gap: "8px", alignItems: "flex-end" }}>
        <textarea
          value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKeyDown}
          placeholder={mode === "braindump" ? "Paste everything you remember..." : "Ask anything... (Enter to send)"}
          rows={mode === "braindump" ? 3 : 1}
          style={{ flex: 1, background: MOSS, border: `1px solid ${mode === "braindump" ? DAWN + "50" : RIDGE_BRIGHT}`, borderRadius: "8px", padding: "8px 10px", color: LICHEN, fontFamily: BODY, fontSize: "12.5px", resize: "none", outline: "none", lineHeight: 1.5 }}
        />
        <button onClick={() => sendMessage()} disabled={loading || !input.trim()}
          style={{ padding: "8px 14px", borderRadius: "8px", background: loading || !input.trim() ? RIDGE : `linear-gradient(135deg, ${TIDEPOOL}, ${DAWN})`, border: "none", color: loading || !input.trim() ? STONE : BASALT, fontSize: "13px", fontWeight: 700, cursor: loading || !input.trim() ? "not-allowed" : "pointer", alignSelf: "flex-end" }}>↑</button>
      </div>
    </div>
  );
}
