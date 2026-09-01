import { useState } from "react";
import Dashboard from "./Dashboard";

// ─── ADD LECTURE IMPORTS HERE ─────────────────────────────────────────────────
import Lecture1_Intro from "./lectures/Lecture1_Intro";
import Lecture2_ClassicalML from "./lectures/Lecture2_ClassicalML";

// ─── LECTURES ARRAY ───────────────────────────────────────────────────────────
// Add new lectures below. Types: "LECTURE", "DISCUSSION", "EXAM PREP", "DIVIDER"
// Divider format: { id: "d1", type: "DIVIDER", title: "UNIT 1", subtitle: "...", color: "#3a9de8", icon: "📚" }
// Lecture format: { id: 1, type: "LECTURE", date: "Jan 15", title: "...", subtitle: "...", color: "#3a9de8", icon: "🧠", component: Lecture1_Intro, ready: true }

// Nature-palette accents, matching Dashboard.jsx / TutorChat.jsx tokens:
const TIDEPOOL = "#2fd6ac";  // surf water — Unit 1
const DAWN = "#ff8f5e";      // sunrise on rock — Unit 2
const GOLD = "#e8c468";      // sunlit ridge — Unit 3
const GLACIER = "#5fb8d9";   // glacier ice — Unit 4
const ALPENGLOW = "#c98bf0"; // dusk on peaks — project milestones
const ALERT = "#ff6b5e";     // midterm

const LECTURES = [
  { id: "d1", type: "DIVIDER", title: "UNIT 1 — FOUNDATIONS", subtitle: "Aug 24 – Sep 21", color: TIDEPOOL, icon: "🏔️" },
  { id: 1, type: "LECTURE", date: "Aug 24", title: "Course Intro & Linear Models", subtitle: "ML/DL framing, agent security and trustworthy AI, linear models", color: TIDEPOOL, icon: "🧭", component: Lecture1_Intro, ready: true },
  { id: 2, type: "LECTURE", date: "Aug 31", title: "Classical ML", subtitle: "Loss & optimization, decision trees, ensembles, metrics, kNN, clustering — recorded lecture", color: TIDEPOOL, icon: "🌲", component: Lecture2_ClassicalML, ready: true },
  { id: 3, type: "LECTURE", date: "Sep 14", title: "Neural Network Basics", subtitle: "Perceptron, gradient descent, forward propagation · Project pre-proposal due", color: TIDEPOOL, icon: "🧠", ready: false },
  { id: 4, type: "LECTURE", date: "Sep 21", title: "Backpropagation", subtitle: "Vanishing gradients, activation functions — NVIDIA guest lecture · Assignment out", color: TIDEPOOL, icon: "⚡", ready: false },

  { id: "d2", type: "DIVIDER", title: "UNIT 2 — CORE ARCHITECTURES", subtitle: "Sep 28 – Oct 12", color: DAWN, icon: "⛰️" },
  { id: 5, type: "LECTURE", date: "Sep 28", title: "Convolutional Neural Networks", subtitle: "CNNs · Quiz 1 in class", color: DAWN, icon: "🖼️", ready: false },
  { id: 6, type: "LECTURE", date: "Oct 5", title: "RNN, LSTM & GNNs", subtitle: "Sequence models, graph neural networks", color: DAWN, icon: "🔁", ready: false },
  { id: 7, type: "LECTURE", date: "Oct 12", title: "Training Dynamics & Transfer Learning", subtitle: "How training actually behaves, transfer learning", color: DAWN, icon: "🌊", ready: false },

  { id: "d3", type: "DIVIDER", title: "UNIT 3 — GENERATIVE & ATTENTION", subtitle: "Oct 19 – Oct 26", color: GOLD, icon: "🌄" },
  { id: 8, type: "LECTURE", date: "Oct 19", title: "Generative AI: GAN & VAE", subtitle: "Assignment due · exam scope posted today", color: GOLD, icon: "🎨", ready: false },
  { id: 9, type: "EXAM PREP", date: "Oct 26", title: "Attention, Decoding & MoE", subtitle: "Attention, decoding, mixture of experts — midterm review session", color: GOLD, icon: "🔍", ready: false },

  { id: "midterm", type: "EXAM", date: "Nov 2", title: "Midterm Exam", subtitle: "Open book, no devices — cumulative through Oct 26 lecture only", color: ALERT, icon: "📝", ready: false },

  { id: "d4", type: "DIVIDER", title: "UNIT 4 — MODERN AI", subtitle: "Nov 9 – Nov 23", color: GLACIER, icon: "🧊" },
  { id: 11, type: "LECTURE", date: "Nov 9", title: "Self-Supervised Learning & LLMs", subtitle: "Self-supervised learning, LLMs, out-of-distribution & anomaly detection · Project midterm report due", color: GLACIER, icon: "💬", ready: false },
  { id: 12, type: "LECTURE", date: "Nov 16", title: "Scaling Laws & Reinforcement Learning", subtitle: "Scaling laws, RL · Quiz 2 in class", color: GLACIER, icon: "📈", ready: false },
  { id: 13, type: "LECTURE", date: "Nov 23", title: "Automated ML & Project Clinic", subtitle: "AutoML — in-class project clinic", color: GLACIER, icon: "🛠️", ready: false },

  { id: "d5", type: "DIVIDER", title: "PROJECT — FINAL STRETCH", subtitle: "Nov 30 – Dec 7 · no final exam", color: ALPENGLOW, icon: "🎒" },
  { id: 14, type: "PROJECT", date: "Nov 30", title: "Project Poster Session", subtitle: "Last class — parallel poster & demo session, ~5 min per group. DEN section does not attend in person.", color: ALPENGLOW, icon: "📊", ready: false },
  { id: "final-report", type: "PROJECT", date: "Dec 7", title: "Final Report Due", subtitle: "No class held — written report only, due 11:59pm. This is the final deliverable of the course.", color: ALPENGLOW, icon: "📄", ready: false },
];

export default function App() {
  const [currentLecture, setCurrentLecture] = useState(null);

  if (currentLecture !== null) {
    const lec = LECTURES.find(l => l.id === currentLecture);
    if (lec && lec.component) {
      const LectureComponent = lec.component;
      return <LectureComponent onBack={() => setCurrentLecture(null)} />;
    }
  }

  return (
    <Dashboard
      lectures={LECTURES}
      onSelectLecture={id => setCurrentLecture(id)}
    />
  );
}