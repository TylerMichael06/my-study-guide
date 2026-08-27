import { useState } from "react";
import TutorChat from "./TutorChat";

// ─── DESIGN TOKENS ─────────────────────────────────────────────────────────
// Basalt & tidepool: dark volcanic rock, surf-water teal, alpine sunrise coral.
const BASALT = "#0c1512";       // page background
const MOSS = "#121f1a";         // card / panel surface
const RIDGE = "#243830";        // hairline borders
const RIDGE_BRIGHT = "#33493d"; // tick marks, brighter borders
const TIDEPOOL = "#2fd6ac";     // primary accent — surf water
const DAWN = "#ff8f5e";         // secondary accent — sunrise on rock
const BONE = "#f2f0e6";         // primary text
const LICHEN = "#9fb3a6";       // body text
const STONE = "#5b6d62";        // muted / labels
const ALERT = "#ff6b5e";        // urgent countdown

const DISPLAY = "'Space Grotesk', sans-serif";
const BODY = "'Manrope', sans-serif";
const MONO = "'Space Mono', monospace";

const RADIUS = 54;
const CIRC = 2 * Math.PI * RADIUS;
const TICKS = Array.from({ length: 12 }, (_, i) => i * 30);

function CountdownRing({ daysLeft, label }) {
  const urgent = daysLeft <= 7 ? ALERT : daysLeft <= 14 ? DAWN : TIDEPOOL;
  const fill = Math.max(0.06, Math.min(1, daysLeft / 120));

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
      <div style={{ position: "relative", width: "140px", height: "140px" }}>
        <svg width="140" height="140" viewBox="0 0 140 140" style={{ position: "absolute", inset: 0 }}>
          <circle cx="70" cy="70" r={RADIUS} fill="none" stroke={RIDGE} strokeWidth="1" />
          {TICKS.map(deg => {
            const rad = ((deg - 90) * Math.PI) / 180;
            const x1 = 70 + (RADIUS - 5) * Math.cos(rad), y1 = 70 + (RADIUS - 5) * Math.sin(rad);
            const x2 = 70 + (RADIUS + 1) * Math.cos(rad), y2 = 70 + (RADIUS + 1) * Math.sin(rad);
            return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke={RIDGE_BRIGHT} strokeWidth="1.2" />;
          })}
          <circle
            cx="70" cy="70" r={RADIUS} fill="none" stroke={urgent} strokeWidth="2.5"
            strokeDasharray={CIRC} strokeDashoffset={CIRC * (1 - fill)} strokeLinecap="round"
            transform="rotate(-90 70 70)"
            style={{ filter: `drop-shadow(0 0 7px ${urgent}90)`, transition: "stroke-dashoffset 1s ease" }}
          />
          <circle cx="70" cy="70" r={RADIUS + 9} fill="none" stroke={urgent} strokeWidth="0.75"
            strokeDasharray="1 8" opacity="0.5" className="dl-ring-scan" />
        </svg>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{ fontFamily: MONO, fontWeight: 700, fontSize: daysLeft > 0 ? "30px" : "16px", color: urgent, lineHeight: 1 }}>
            {daysLeft > 0 ? daysLeft : "DAY"}
          </div>
          {daysLeft > 0 && <div style={{ fontFamily: MONO, fontSize: "9px", letterSpacing: "2px", color: STONE, marginTop: "5px" }}>DAYS</div>}
        </div>
      </div>
      <div style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "2px", color: STONE, textAlign: "center" }}>{label}</div>
    </div>
  );
}

// ── KEY DATES — from the CSCI 566 Fall 2026 syllabus. There is no final exam;
// the poster session + final report serve as the summative experience. ──────
const KEY_DATES = [
  { date: "2026-09-28", label: "Quiz 1", detail: "In-class, completion-graded" },
  { date: "2026-10-05", label: "Pre-Proposal Due", detail: "1-page project pre-proposal" },
  { date: "2026-10-19", label: "Assignment Due", detail: "Coding assignment · exam scope posted" },
  { date: "2026-11-02", label: "Midterm", detail: "Open book, no devices — cumulative through Oct 26" },
  { date: "2026-11-09", label: "Midterm Report Due", detail: "Project progress report" },
  { date: "2026-11-16", label: "Quiz 2", detail: "In-class, completion-graded" },
  { date: "2026-11-30", label: "Poster Session", detail: "Last class — project poster & demo" },
  { date: "2026-12-07", label: "Final Report Due", detail: "No class — final deliverable of the course" },
];

function fmtDate(iso) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default function Dashboard({ lectures, onSelectLecture }) {
  const [chatOpen, setChatOpen] = useState(false);

  const today = new Date();
  const upcomingIdx = KEY_DATES.findIndex(k => new Date(k.date + "T23:59:59") >= today);
  const onLastDate = upcomingIdx === -1;
  const current = onLastDate ? KEY_DATES[KEY_DATES.length - 1] : KEY_DATES[upcomingIdx];
  const daysLeft = Math.ceil((new Date(current.date + "T23:59:59") - today) / (1000 * 60 * 60 * 24));
  const examLabel = onLastDate ? "SEMESTER COMPLETE" : current.label.toUpperCase();
  const waypoints = onLastDate ? [] : KEY_DATES.slice(upcomingIdx, upcomingIdx + 4);

  return (
    <div style={{ minHeight: "100vh", background: BASALT, fontFamily: BODY, color: BONE }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Manrope:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

        @keyframes dlRingScan { to { transform: rotate(360deg); } }
        .dl-ring-scan { transform-origin: 70px 70px; animation: dlRingScan 6s linear infinite; }

        @keyframes dlRise { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .dl-card { animation: dlRise .5s ease backwards; animation-delay: calc(var(--i) * 45ms);
          transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease; }
        .dl-card--ready:hover { transform: translateY(-4px); border-color: var(--accent); }
        .dl-card--ready:hover .dl-corner { opacity: 1; }

        .dl-corner { position: absolute; width: 14px; height: 14px; border-color: var(--accent); opacity: 0; transition: opacity .22s ease; }
        .dl-corner-tl { top: 7px; left: 7px; border-top: 2px solid; border-left: 2px solid; border-radius: 3px 0 0 0; }
        .dl-corner-tr { top: 7px; right: 7px; border-top: 2px solid; border-right: 2px solid; border-radius: 0 3px 0 0; }
        .dl-corner-bl { bottom: 7px; left: 7px; border-bottom: 2px solid; border-left: 2px solid; border-radius: 0 0 0 3px; }
        .dl-corner-br { bottom: 7px; right: 7px; border-bottom: 2px solid; border-right: 2px solid; border-radius: 0 0 3px 0; }

        @keyframes dlFabGlow { 0%, 100% { box-shadow: 0 8px 24px rgba(0,0,0,0.5), 0 0 0 0 ${TIDEPOOL}55; } 50% { box-shadow: 0 8px 24px rgba(0,0,0,0.5), 0 0 0 8px ${TIDEPOOL}00; } }
        .dl-fab { animation: dlFabGlow 2.6s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .dl-card, .dl-ring-scan, .dl-fab { animation: none !important; }
          .dl-card--ready:hover { transform: none; }
        }
      `}</style>

      {/* Hero */}
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderBottom: `1px solid ${RIDGE}`,
        background: `radial-gradient(ellipse 700px 260px at 90% -15%, ${TIDEPOOL}1c, transparent 60%),
                     radial-gradient(ellipse 600px 260px at 5% 115%, ${DAWN}16, transparent 55%),
                     ${BASALT}`,
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.7,
          backgroundImage: `
            repeating-radial-gradient(circle at 88% 6%, transparent 0px, transparent 26px, ${TIDEPOOL}10 27px, ${TIDEPOOL}10 28px),
            repeating-radial-gradient(circle at 4% 105%, transparent 0px, transparent 34px, ${DAWN}0d 35px, ${DAWN}0d 36px)`,
        }} />
        <div style={{
          position: "relative", padding: "48px 40px 40px", display: "flex",
          alignItems: "center", justifyContent: "space-between", gap: "28px", flexWrap: "wrap",
        }}>
          <div>
            <div style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "4px", color: TIDEPOOL, marginBottom: "12px" }}>
              USC · SPRING 2026 · FIELD NOTES
            </div>
            <div style={{ fontFamily: DISPLAY, fontSize: "44px", fontWeight: 700, letterSpacing: "-0.5px", lineHeight: 1.05, color: BONE }}>
              Deep Learning
            </div>
            <div style={{ fontFamily: BODY, fontSize: "14px", color: LICHEN, marginTop: "12px", maxWidth: "440px", lineHeight: 1.65 }}>
              One semester, one summit. Chart the terrain lecture by lecture, and show up to the final already having done the climb.
            </div>
          </div>
          <CountdownRing daysLeft={daysLeft} label={daysLeft > 0 ? examLabel : "EXAM DAY"} />
        </div>
      </div>

      {/* Waypoints — next few key dates from the syllabus */}
      {waypoints.length > 0 && (
        <div style={{ margin: "20px 40px 0", display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {waypoints.map((k, i) => (
            <div key={k.date} style={{
              flex: "1 1 200px", padding: "12px 14px", background: MOSS,
              border: `1px solid ${i === 0 ? TIDEPOOL + "50" : RIDGE}`, borderRadius: "8px",
            }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "4px" }}>
                <div style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "1.5px", color: i === 0 ? TIDEPOOL : STONE }}>{fmtDate(k.date)}</div>
                {i === 0 && <div style={{ fontFamily: MONO, fontSize: "9px", color: TIDEPOOL }}>NEXT</div>}
              </div>
              <div style={{ fontFamily: DISPLAY, fontSize: "13px", fontWeight: 700, color: BONE, marginBottom: "2px" }}>{k.label}</div>
              <div style={{ fontFamily: BODY, fontSize: "11px", color: LICHEN, lineHeight: 1.4 }}>{k.detail}</div>
            </div>
          ))}
        </div>
      )}

      {/* Field method banner */}
      <div style={{
        margin: "28px 40px 0", padding: "18px 24px", background: MOSS,
        border: `1px solid ${RIDGE}`, borderLeft: `3px solid ${TIDEPOOL}`, borderRadius: "10px",
        display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap",
      }}>
        <div style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "2px", color: TIDEPOOL, whiteSpace: "nowrap" }}>FIELD METHOD</div>
        {[
          "① Scout — skim headers first, get the lay of the land",
          "② Explain — teach it out loud, Feynman-style",
          "③ Brain dump — close the notes, write everything down",
        ].map((s, i) => (
          <div key={i} style={{ fontFamily: BODY, fontSize: "12.5px", color: LICHEN }}>{s}</div>
        ))}
      </div>

      {/* Empty state */}
      {lectures.filter(l => l.type !== "DIVIDER").length === 0 && (
        <div style={{ padding: "90px 40px", textAlign: "center" }}>
          <div style={{ fontSize: "44px", marginBottom: "18px" }}>🧭</div>
          <div style={{ fontFamily: DISPLAY, fontSize: "19px", color: LICHEN, marginBottom: "8px" }}>Nothing charted yet</div>
          <div style={{ fontFamily: BODY, fontSize: "13px", color: STONE }}>Upload a transcript and we'll map the first lecture.</div>
        </div>
      )}

      {/* Lecture grid */}
      <div style={{ padding: "28px 40px 80px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "16px" }}>
        {lectures.map((lec, idx) => {

          // ── Divider ───────────────────────────────────────────────────────
          if (lec.type === "DIVIDER") {
            return (
              <div key={lec.id} style={{ gridColumn: "1 / -1", margin: "14px 0 4px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ flex: 1, height: "1px", background: RIDGE }} />
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "16px" }}>{lec.icon}</span>
                    <div>
                      <div style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "3px", color: lec.color, fontWeight: 700 }}>{lec.title}</div>
                      {lec.subtitle && <div style={{ fontFamily: BODY, fontSize: "11px", color: STONE, marginTop: "2px" }}>{lec.subtitle}</div>}
                    </div>
                  </div>
                  <div style={{ flex: 1, height: "1px", background: RIDGE }} />
                </div>
              </div>
            );
          }

          // ── Lecture card ──────────────────────────────────────────────────
          const typeBadge = lec.type === "DISCUSSION" ? "TA DISCUSSION"
            : lec.type === "EXAM PREP" ? "EXAM PREP"
            : lec.type === "EXAM" ? "EXAM"
            : lec.type === "PROJECT" ? "PROJECT"
            : "LECTURE";
          const showBadgeBg = lec.type !== "LECTURE";

          return (
            <div
              key={lec.id}
              onClick={() => lec.ready ? onSelectLecture(lec.id) : null}
              className={`dl-card ${lec.ready ? "dl-card--ready" : ""}`}
              style={{
                "--accent": lec.color,
                "--i": idx,
                background: MOSS,
                border: `1px solid ${lec.ready ? RIDGE_BRIGHT : RIDGE}`,
                borderRadius: "10px",
                padding: "24px",
                cursor: lec.ready ? "pointer" : "default",
                opacity: lec.ready ? 1 : 0.5,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div className="dl-corner dl-corner-tl" />
              <div className="dl-corner dl-corner-tr" />
              <div className="dl-corner dl-corner-bl" />
              <div className="dl-corner dl-corner-br" />
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: lec.ready ? lec.color : RIDGE, borderRadius: "10px 10px 0 0" }} />

              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "22px" }}>{lec.icon}</span>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "5px" }}>
                      <div style={{
                        fontFamily: MONO, fontSize: "9px", letterSpacing: "1.5px", fontWeight: 700,
                        padding: "2px 7px", borderRadius: "4px",
                        background: showBadgeBg ? (lec.ready ? lec.color + "25" : RIDGE) : "transparent",
                        color: lec.ready ? lec.color : STONE,
                        border: showBadgeBg ? `1px solid ${lec.ready ? lec.color + "50" : RIDGE_BRIGHT}` : "none",
                      }}>
                        {typeBadge}
                      </div>
                      <div style={{ fontFamily: MONO, fontSize: "9px", color: lec.ready ? STONE : "#3a453f", letterSpacing: "1px" }}>{lec.date}</div>
                    </div>
                    <div style={{ fontFamily: DISPLAY, fontSize: "15.5px", fontWeight: 700, color: lec.ready ? BONE : STONE }}>{lec.title}</div>
                  </div>
                </div>
                {lec.ready ? (
                  <div style={{ fontFamily: MONO, fontSize: "10px", padding: "3px 8px", borderRadius: "20px", background: lec.color + "20", color: lec.color, border: `1px solid ${lec.color}40` }}>READY</div>
                ) : (
                  <div style={{ fontFamily: MONO, fontSize: "10px", padding: "3px 8px", borderRadius: "20px", background: RIDGE, color: STONE, border: `1px solid ${RIDGE_BRIGHT}` }}>COMING SOON</div>
                )}
              </div>

              <div style={{ fontFamily: BODY, fontSize: "12.5px", color: LICHEN, lineHeight: 1.6 }}>{lec.subtitle}</div>

              {lec.ready && (
                <div style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "6px", color: lec.color, fontFamily: MONO, fontSize: "11px", letterSpacing: "1px" }}>
                  <span>OPEN</span><span>→</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Floating tutor button */}
      <button
        className="dl-fab"
        onClick={() => setChatOpen(o => !o)}
        style={{
          position: "fixed", bottom: "24px", right: "24px",
          width: "56px", height: "56px", borderRadius: "50%",
          background: chatOpen ? MOSS : `linear-gradient(135deg, ${TIDEPOOL}, ${DAWN})`,
          border: chatOpen ? `1px solid ${TIDEPOOL}` : "none",
          cursor: "pointer", fontSize: "22px",
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 1001, transition: "background .2s, border-color .2s",
        }}
      >
        {chatOpen ? "✕" : "🧭"}
      </button>

      {chatOpen && <TutorChat onClose={() => setChatOpen(false)} />}
    </div>
  );
}
