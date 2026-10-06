import { useState, useMemo, useRef, useEffect } from "react";

// ─── DESIGN TOKENS — keep in sync with Dashboard.jsx ────────────────────────
const BASALT = "#0c1512";
const MOSS = "#121f1a";
const RIDGE = "#243830";
const RIDGE_BRIGHT = "#33493d";
const TIDEPOOL = "#2fd6ac";   // active mechanism / attention
const DAWN = "#ff8f5e";       // memory, state, problem banner, stars
const BONE = "#f2f0e6";
const LICHEN = "#9fb3a6";
const STONE = "#5b6d62";
const ALERT = "#ff6b5e";
const GOOD = "#5fd98a";

const DISPLAY = "'Space Grotesk', sans-serif";
const BODY = "'Manrope', sans-serif";
const MONO = "'Space Mono', monospace";

// Exposed to `custom` steps so bespoke puzzles match the rest of the game.
export const TOKENS = {
  BASALT, MOSS, RIDGE, RIDGE_BRIGHT, TIDEPOOL, DAWN,
  BONE, LICHEN, STONE, ALERT, GOOD, DISPLAY, BODY, MONO,
};

// ─── helpers ────────────────────────────────────────────────────────────────
const shuffle = (arr) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const reduced = () => {
  try {
    return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  } catch (e) { return false; }
};

const loadSave = (lectureId) => {
  try {
    const raw = localStorage.getItem(`dl-game-${lectureId}`);
    if (raw) {
      const s = JSON.parse(raw);
      if (s && typeof s === "object" && s.done && typeof s.done === "object") {
        return { done: s.done, current: typeof s.current === "number" ? s.current : 0 };
      }
    }
  } catch (e) { /* no saved state is fine */ }
  return { done: {}, current: 0 };
};

const writeSave = (lectureId, save) => {
  try { localStorage.setItem(`dl-game-${lectureId}`, JSON.stringify(save)); } catch (e) { /* ignore */ }
};

const starStr = (n) => "★".repeat(n) + "☆".repeat(3 - n);

// ─── primitives ─────────────────────────────────────────────────────────────

// Content strings may carry light HTML (<b>, <i>, <span class="mono">, <sub>).
function Rich({ html, style, as: As = "div" }) {
  return <As style={style} dangerouslySetInnerHTML={{ __html: html }} />;
}

const btnBase = {
  font: "inherit", fontFamily: BODY, fontSize: "13.5px", color: BONE,
  background: BASALT, border: `1.5px solid ${RIDGE_BRIGHT}`, borderRadius: "10px",
  padding: "10px 14px", textAlign: "left", cursor: "pointer", lineHeight: 1.5,
};

function Primary({ children, onClick, disabled, innerRef, style }) {
  return (
    <button ref={innerRef} type="button" onClick={onClick} disabled={disabled}
      style={{
        ...btnBase, textAlign: "center", fontWeight: 700, color: BASALT,
        background: disabled ? RIDGE : `linear-gradient(135deg, ${TIDEPOOL}, ${DAWN})`,
        border: "none", opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "default" : "pointer", ...style,
      }}>{children}</button>
  );
}

function Ghost({ children, onClick, style }) {
  return (
    <button type="button" onClick={onClick}
      style={{ ...btnBase, textAlign: "center", background: "transparent", color: LICHEN, ...style }}>
      {children}
    </button>
  );
}

function Row({ children, style }) {
  return <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center", marginTop: "14px", ...style }}>{children}</div>;
}

function Question({ html }) {
  return <Rich as="p" html={html} style={{ fontFamily: BODY, fontWeight: 700, fontSize: "15px", color: BONE, margin: "0 0 12px", maxWidth: "65ch", lineHeight: 1.6 }} />;
}

function Context({ html, tint }) {
  return (
    <Rich html={html} style={{
      background: tint ? DAWN + "18" : BASALT, borderRadius: "10px", padding: "12px 14px",
      marginBottom: "12px", fontFamily: BODY, fontSize: "13.5px", color: LICHEN, lineHeight: 1.65,
      border: `1px solid ${tint ? DAWN + "40" : RIDGE}`,
    }} />
  );
}

function Feedback({ good, html }) {
  return (
    <Rich html={html} style={{
      marginTop: "12px", padding: "11px 14px", borderRadius: "10px", maxWidth: "68ch",
      background: good ? GOOD + "18" : ALERT + "18",
      borderLeft: `4px solid ${good ? GOOD : ALERT}`,
      fontFamily: BODY, fontSize: "13.5px", color: LICHEN, lineHeight: 1.7,
    }} />
  );
}

// Every step ends the same way: feedback, then Continue (which takes focus).
function Continue({ onClick, label = "Continue" }) {
  const ref = useRef(null);
  useEffect(() => { try { ref.current && ref.current.focus({ preventScroll: true }); } catch (e) {} }, []);
  return <Row><Primary innerRef={ref} onClick={onClick}>{label} →</Primary></Row>;
}

function Bars({ bars }) {
  const anim = reduced() ? "none" : "width .25s ease";
  return (
    <div style={{ display: "grid", gap: "8px", margin: "12px 0" }}>
      {bars.map((b, i) => {
        const max = b.max == null ? 1 : b.max;
        const pct = Math.max(0, Math.min(100, (b.value / max) * 100));
        const color = b.kind === "attn" ? TIDEPOOL : b.kind === "bad" ? ALERT : DAWN;
        return (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "minmax(70px, 96px) 1fr 50px", gap: "10px", alignItems: "center" }}>
            <span style={{ fontFamily: MONO, fontSize: "11.5px", color: LICHEN, overflowWrap: "anywhere" }}>{b.label}</span>
            <div style={{ height: "16px", background: BASALT, borderRadius: "8px", overflow: "hidden", border: `1px solid ${RIDGE}` }}>
              <div style={{ height: "100%", width: pct + "%", background: color, transition: anim }} />
            </div>
            <span style={{ fontFamily: MONO, fontSize: "11.5px", color: BONE, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>
              {b.display == null ? b.value.toFixed(2) : b.display}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// Vertical bar series: log-scaled heights, dashed 1x reference, out-of-range in ALERT.
function Chart({ values, range }) {
  const lo = range ? range[0] : 0.1;
  const hi = range ? range[1] : 10;
  const H = 134;
  const map = (v) => Math.max(2, Math.min(H, ((Math.log10(Math.max(v, 1e-12)) + 4) / 8) * H));
  return (
    <div aria-hidden="true" style={{
      position: "relative", display: "flex", alignItems: "flex-end", gap: "3px",
      height: "150px", padding: "8px", background: BASALT, borderRadius: "10px", border: `1px solid ${RIDGE}`,
    }}>
      <div style={{ position: "absolute", left: 8, right: 8, bottom: 8 + map(1) + "px", borderTop: `1px dashed ${STONE}` }} />
      {values.map((v, i) => (
        <div key={i} style={{
          flex: 1, minWidth: 0, minHeight: "2px", height: map(v) + "px",
          borderRadius: "3px 3px 0 0", background: (v < lo || v > hi) ? ALERT : TIDEPOOL,
          transition: reduced() ? "none" : "height .2s ease",
        }} />
      ))}
    </div>
  );
}

function SliderRow({ p, value, onChange, disabled }) {
  const id = `dlg-${p.id}`;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,150px) 1fr 56px", gap: "10px", alignItems: "center", margin: "8px 0" }}>
      <label htmlFor={id} style={{ fontFamily: MONO, fontSize: "12px", color: LICHEN, fontWeight: 700 }}>{p.label}</label>
      <input id={id} type="range" min={p.min} max={p.max} step={p.step} value={value} disabled={disabled}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        style={{ width: "100%", accentColor: TIDEPOOL, cursor: disabled ? "default" : "pointer" }} />
      <output htmlFor={id} style={{ fontFamily: MONO, fontSize: "13px", color: BONE, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>
        {p.format ? p.format(value) : value}
      </output>
    </div>
  );
}

function ViewPanel({ view }) {
  if (!view) return null;
  return (
    <>
      {view.chart && <Chart values={view.chart} range={view.chartRange} />}
      {view.chartLabels && (
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: MONO, fontSize: "11px", color: STONE, marginTop: "4px" }}>
          {view.chartLabels.map((l, i) => <span key={i}>{l}</span>)}
        </div>
      )}
      {view.bars && <Bars bars={view.bars} />}
      {view.readout && <Rich as="p" html={view.readout} style={{ fontFamily: MONO, fontSize: "12.5px", color: BONE, margin: "10px 0 0", fontVariantNumeric: "tabular-nums" }} />}
      {view.note && <Rich html={view.note} style={{ fontFamily: BODY, fontSize: "12.5px", color: STONE, margin: "8px 0 0", lineHeight: 1.6 }} />}
    </>
  );
}

// ─── step types ─────────────────────────────────────────────────────────────

function MCQStep({ step, onCorrect, onMiss, onAdvance }) {
  const order = useMemo(() => shuffle(step.opts.map((_, i) => i)), [step]);
  const [wrong, setWrong] = useState([]);
  const [solved, setSolved] = useState(false);
  const [fb, setFb] = useState(null);
  const [moved, setMoved] = useState(false);

  const pick = (i) => {
    if (solved) return;
    if (i === step.a) {
      setSolved(true);
      setFb({ good: true, html: `<b>Right.</b> ${step.why}` });
      onCorrect();
    } else {
      setWrong((w) => w.concat(i));
      onMiss();
      const h = (step.hints && step.hints[i]) || step.defaultHint || "Think about which weakness this piece exists to fix.";
      setFb({ good: false, html: `<b>Not quite.</b> ${h}` });
    }
  };

  return (
    <>
      {step.ctx && <Context html={step.ctx} />}
      <Question html={step.q} />
      <div style={{ display: "grid", gap: "8px" }}>
        {order.map((i) => {
          const isWrong = wrong.indexOf(i) !== -1;
          const isRight = solved && i === step.a;
          return (
            <button key={i} type="button" disabled={solved || isWrong} onClick={() => pick(i)}
              style={{
                ...btnBase,
                borderColor: isRight ? GOOD : isWrong ? ALERT : RIDGE_BRIGHT,
                background: isRight ? GOOD + "1e" : isWrong ? ALERT + "1e" : BASALT,
                cursor: solved || isWrong ? "default" : "pointer",
                opacity: isWrong ? 0.8 : 1,
              }}>
              <span dangerouslySetInnerHTML={{ __html: step.opts[i] }} />
            </button>
          );
        })}
      </div>
      {fb && <Feedback good={fb.good} html={fb.html} />}
      {solved && !moved && <Continue onClick={() => { setMoved(true); onAdvance(); }} />}
    </>
  );
}

function MultiStep({ step, onCorrect, onMiss, onAdvance }) {
  const [on, setOn] = useState([]);
  const [solved, setSolved] = useState(false);
  const [fb, setFb] = useState(null);
  const [moved, setMoved] = useState(false);

  const toggle = (i) => {
    if (solved) return;
    setOn((s) => (s.indexOf(i) === -1 ? s.concat(i) : s.filter((x) => x !== i)));
  };

  const submit = () => {
    const want = step.correct.slice().sort().join(",");
    const got = on.slice().sort().join(",");
    if (want === got) {
      setSolved(true);
      setFb({ good: true, html: `<b>Right.</b> ${step.why}` });
      onCorrect();
    } else {
      onMiss();
      const h = step.hintFn ? step.hintFn(on) : step.hint;
      setFb({ good: false, html: `<b>Not quite.</b> ${h}` });
    }
  };

  return (
    <>
      {step.ctx && <Context html={step.ctx} />}
      <Question html={step.q} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {step.opts.map((o, i) => {
          const active = on.indexOf(i) !== -1;
          return (
            <button key={i} type="button" aria-pressed={active} disabled={solved} onClick={() => toggle(i)}
              style={{
                ...btnBase, fontFamily: MONO, fontSize: "13px", fontWeight: 700, textAlign: "center",
                background: active ? TIDEPOOL : BASALT, color: active ? BASALT : BONE,
                borderColor: active ? TIDEPOOL : RIDGE_BRIGHT, cursor: solved ? "default" : "pointer",
              }}>{o}</button>
          );
        })}
      </div>
      {!solved && <Row><Primary onClick={submit}>Submit</Primary></Row>}
      {fb && <Feedback good={fb.good} html={fb.html} />}
      {solved && !moved && <Continue onClick={() => { setMoved(true); onAdvance(); }} />}
    </>
  );
}

function NumericStep({ step, onCorrect, onMiss, onAdvance }) {
  const [val, setVal] = useState("");
  const [solved, setSolved] = useState(false);
  const [fb, setFb] = useState(null);
  const [moved, setMoved] = useState(false);
  const tol = step.tol == null ? 0.01 : step.tol;

  const check = () => {
    if (solved) return;
    const v = parseFloat(val);
    if (!isNaN(v) && Math.abs(v - step.answer) < tol) {
      setSolved(true);
      setFb({ good: true, html: `<b>Right.</b> ${step.why}` });
      onCorrect();
    } else {
      onMiss();
      setFb({ good: false, html: `<b>Not quite.</b> ${step.hint}` });
    }
  };

  return (
    <>
      {step.ctx && <Context html={step.ctx} />}
      <Question html={step.q} />
      <Row style={{ marginTop: 0 }}>
        <input type="text" inputMode="decimal" aria-label="Your answer" value={val} disabled={solved}
          onChange={(e) => setVal(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); check(); } }}
          style={{
            fontFamily: MONO, fontSize: "15px", padding: "10px 12px", borderRadius: "10px",
            border: `1.5px solid ${RIDGE_BRIGHT}`, background: BASALT, color: BONE, width: "130px",
            fontVariantNumeric: "tabular-nums", outline: "none",
          }} />
        {!solved && <Primary onClick={check}>Check</Primary>}
      </Row>
      {fb && <Feedback good={fb.good} html={fb.html} />}
      {solved && !moved && <Continue onClick={() => { setMoved(true); onAdvance(); }} />}
    </>
  );
}

function OrderStep({ step, onCorrect, onMiss, onAdvance }) {
  const [seed, setSeed] = useState(0);
  const pool = useMemo(() => shuffle(step.pieces.slice()), [step, seed]);
  const [seq, setSeq] = useState([]);
  const [solved, setSolved] = useState(false);
  const [fb, setFb] = useState(null);
  const [failed, setFailed] = useState(false);
  const [moved, setMoved] = useState(false);

  const add = (p) => {
    if (solved || failed) return;
    const next = seq.concat(p);
    setSeq(next);
    if (next.length === step.pieces.length) {
      const ok = next.every((s, j) => s === step.pieces[j]);
      if (ok) {
        setSolved(true);
        setFb({ good: true, html: `<b>Right.</b> ${step.why}` });
        onCorrect();
      } else {
        onMiss();
        const first = next.findIndex((s, j) => s !== step.pieces[j]);
        setFailed(true);
        setFb({ good: false, html: `<b>Piece ${first + 1} is off.</b> ${step.posHints[first]}` });
      }
    }
  };

  const retry = () => { setSeq([]); setFailed(false); setFb(null); setSeed((s) => s + 1); };

  return (
    <>
      <Question html={step.q} />
      <div aria-live="polite" style={{
        display: "flex", flexWrap: "wrap", gap: "6px", alignItems: "center", minHeight: "48px",
        padding: "10px", border: `1.5px dashed ${RIDGE_BRIGHT}`, borderRadius: "10px", margin: "10px 0",
      }}>
        {seq.length === 0 && <span style={{ fontFamily: BODY, fontSize: "13px", color: STONE }}>your model…</span>}
        {seq.map((s, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            {i > 0 && <span style={{ color: STONE }}>→</span>}
            <span style={{
              fontFamily: MONO, fontSize: "12px", fontWeight: 700, background: TIDEPOOL + "22",
              border: `1.5px solid ${TIDEPOOL}`, borderRadius: "8px", padding: "6px 10px", color: BONE,
            }}>{s}</span>
          </span>
        ))}
      </div>
      {!solved && !failed && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {pool.filter((p) => seq.indexOf(p) === -1).map((p) => (
            <button key={p} type="button" onClick={() => add(p)}
              style={{ ...btnBase, fontFamily: MONO, fontSize: "12.5px", fontWeight: 700, textAlign: "center" }}>{p}</button>
          ))}
        </div>
      )}
      {fb && <Feedback good={fb.good} html={fb.html} />}
      {failed && <Row><Ghost onClick={retry}>Try again</Ghost></Row>}
      {solved && !moved && <Continue onClick={() => { setMoved(true); onAdvance(); }} />}
    </>
  );
}

function PickStep({ step, onCorrect, onMiss, onAdvance }) {
  const [r, setR] = useState(0);
  const [reveal, setReveal] = useState(false);
  const [fb, setFb] = useState(null);
  const [allDone, setAllDone] = useState(false);
  const [moved, setMoved] = useState(false);
  const round = step.rounds[r];
  const scene = step.layout === "scene";
  const disabled = round.disabled || step.disabled || [];

  const click = (i) => {
    if (reveal || disabled.indexOf(i) !== -1) return;
    if (i === round.answer) {
      setReveal(true);
      setFb({ good: true, html: round.why });
      onCorrect();
    } else {
      onMiss();
      setFb({ good: false, html: `<b>Not that one.</b> ${round.hint || step.hint}` });
    }
  };

  const nextRound = () => {
    if (r < step.rounds.length - 1) { setR(r + 1); setReveal(false); setFb(null); }
    else { setAllDone(true); setMoved(true); onAdvance(); }
  };

  const label = (it) => (typeof it === "string" ? it : it.label);

  return (
    <>
      <Question html={step.q} />
      {round.ctx && <Context html={round.ctx} />}
      <div style={scene
        ? { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))", gap: "8px", margin: "10px 0" }
        : { display: "flex", flexWrap: "wrap", gap: "6px", margin: "10px 0" }}>
        {round.items.map((it, i) => {
          const isDis = disabled.indexOf(i) !== -1;
          const lit = reveal && i === round.answer;
          const art = typeof it === "object" ? it.art : null;
          return (
            <button key={i} type="button" onClick={() => click(i)}
              aria-label={label(it)} aria-disabled={isDis || reveal ? "true" : "false"}
              style={{
                ...btnBase,
                textAlign: "center",
                fontFamily: MONO, fontSize: scene ? "11.5px" : "14px", fontWeight: 600,
                padding: scene ? "14px 8px" : "8px 11px",
                borderRadius: scene ? "12px" : "8px",
                borderColor: lit ? TIDEPOOL : isDis ? TIDEPOOL : RIDGE_BRIGHT,
                background: lit ? TIDEPOOL + "28" : isDis ? TIDEPOOL : BASALT,
                color: isDis ? BASALT : BONE,
                boxShadow: lit ? `0 0 0 3px ${TIDEPOOL}22` : "none",
                cursor: isDis || reveal ? "default" : "pointer",
                minWidth: 0,
              }}>
              {art && <span style={{ display: "block", marginBottom: "6px" }}>{art}</span>}
              {label(it)}
            </button>
          );
        })}
      </div>
      {reveal && round.weights && <Bars bars={round.weights.filter((w) => w.value >= 0.08).map((w) => ({ ...w, kind: "attn", max: 1 }))} />}
      {fb && <Feedback good={fb.good} html={fb.good ? fb.html : fb.html} />}
      {reveal && !allDone && !moved && (
        <Continue onClick={nextRound} label={r < step.rounds.length - 1 ? (step.nextLabel || "Next") : "Continue"} />
      )}
    </>
  );
}

function SliderStep({ step, onCorrect, onMiss, onAdvance }) {
  const init = () => {
    const o = {};
    step.params.forEach((p) => { o[p.id] = p.init; });
    return o;
  };
  const [vals, setVals] = useState(init);
  const [state, setState] = useState(step.state == null ? {} : step.state);
  const [r, setR] = useState(0);
  const [solved, setSolved] = useState(false);
  const [fb, setFb] = useState(null);
  const [moved, setMoved] = useState(false);
  const [locked, setLocked] = useState(false);

  const rounds = step.rounds || null;
  const round = rounds ? rounds[r] : null;
  const checkFn = round && round.check ? round.check : step.check;
  const viewFn = (round && round.view) || step.view;
  const view = viewFn ? viewFn(vals, state) : null;

  const go = () => {
    if (locked) return;
    const res = checkFn(vals, state);
    if (res === true) {
      const nextState = step.update ? step.update(vals, state) : state;
      if (rounds && r < rounds.length - 1) {
        setState(nextState);
        setFb({ good: true, html: `<b>${round.ok}</b>` });
        setR(r + 1);
        setVals(init());
      } else {
        setState(nextState);
        setLocked(true);
        setSolved(true);
        const tail = rounds ? (round.ok + " " + (step.done || "")) : (step.ok || "");
        setFb({ good: true, html: `<b>${tail}</b>` });
        onCorrect();
      }
    } else {
      onMiss();
      setFb({ good: false, html: `<b>Check the readout.</b> ${res}` });
    }
  };

  return (
    <>
      <Question html={step.q} />
      {step.ctx && <Context html={step.ctx} />}
      {round && round.ctx && <Context html={round.ctx} tint />}
      {step.params.map((p) => (
        <SliderRow key={p.id} p={p} value={vals[p.id]} disabled={locked}
          onChange={(v) => setVals((s) => ({ ...s, [p.id]: v }))} />
      ))}
      <ViewPanel view={view} />
      {!locked && <Row><Primary onClick={go}>{step.action || "Lock it in"}</Primary></Row>}
      {fb && <Feedback good={fb.good} html={fb.html} />}
      {solved && !moved && <Continue onClick={() => { setMoved(true); onAdvance(); }} />}
    </>
  );
}

// Optional: `cellLabel(r, c, isOn)` and `cellAria(r, c, isOn)` let a grid show
// per-cell content (e.g. activation values) instead of the default on/off text.
function GridStep({ step, onCorrect, onMiss, onAdvance }) {
  const [on, setOn] = useState({});
  const [errs, setErrs] = useState({});
  const [solved, setSolved] = useState(false);
  const [fb, setFb] = useState(null);
  const [moved, setMoved] = useState(false);

  const key = (r, c) => r + "," + c;
  const toggle = (r, c) => {
    if (solved) return;
    setOn((s) => ({ ...s, [key(r, c)]: !s[key(r, c)] }));
    setErrs((s) => ({ ...s, [key(r, c)]: false }));
  };

  const check = () => {
    const bad = {};
    const cells = [];
    step.rows.forEach((_, r) => step.cols.forEach((__, c) => {
      const should = !!step.target(r, c);
      const is = !!on[key(r, c)];
      if (should !== is) { bad[key(r, c)] = true; cells.push({ r, c, should, is }); }
    }));
    if (cells.length === 0) {
      setErrs({});
      setSolved(true);
      setFb({ good: true, html: `<b>Right.</b> ${step.why}` });
      onCorrect();
    } else {
      setErrs(bad);
      onMiss();
      setFb({ good: false, html: `<b>${cells.length} cell${cells.length > 1 ? "s" : ""} wrong</b> (outlined). ${step.hintFn({ count: cells.length, cells })}` });
    }
  };

  return (
    <>
      <Question html={step.q} />
      <div style={{ overflowX: "auto", paddingBottom: "4px" }}>
        <table style={{ borderCollapse: "separate", borderSpacing: "4px", fontFamily: MONO, fontSize: "11px" }}>
          <tbody>
            <tr>
              <th />
              {step.cols.map((c, i) => (
                <th key={i} style={{ fontWeight: 600, color: STONE, padding: "2px 4px", whiteSpace: "nowrap" }}>{c}</th>
              ))}
            </tr>
            {step.rows.map((rl, r) => (
              <tr key={r}>
                <th style={{ fontWeight: 600, color: STONE, padding: "2px 4px", textAlign: "right", whiteSpace: "nowrap" }}>{rl}</th>
                {step.cols.map((cl, c) => {
                  const isOn = !!on[key(r, c)];
                  return (
                    <td key={c}>
                      <button type="button" onClick={() => toggle(r, c)} disabled={solved}
                        aria-pressed={isOn}
                        aria-label={step.cellAria
                          ? step.cellAria(r, c, isOn)
                          : `${rl} looks at ${cl}: ${isOn ? (step.onLabel || "hidden") : (step.offLabel || "visible")}`}
                        style={{
                          width: "46px", height: "34px", borderRadius: "7px", fontFamily: MONO, fontSize: "11px",
                          border: `1.5px solid ${isOn ? STONE : RIDGE_BRIGHT}`,
                          background: isOn ? STONE : TIDEPOOL + "22",
                          color: isOn ? BASALT : BONE,
                          outline: errs[key(r, c)] ? `3px solid ${ALERT}` : "none", outlineOffset: "1px",
                          cursor: solved ? "default" : "pointer",
                        }}>{step.cellLabel
                          ? step.cellLabel(r, c, isOn)
                          : isOn ? (step.onLabel || "hide") : (step.offLabel || "see")}</button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!solved && <Row><Primary onClick={check}>Check</Primary></Row>}
      {fb && <Feedback good={fb.good} html={fb.html} />}
      {solved && !moved && <Continue onClick={() => { setMoved(true); onAdvance(); }} />}
    </>
  );
}

function ExploreStep({ step, onCorrect, onAdvance }) {
  const [vals, setVals] = useState(() => {
    const o = {};
    (step.params || []).forEach((p) => { o[p.id] = p.init; });
    return o;
  });
  const [moved, setMoved] = useState(false);
  const view = step.view ? step.view(vals) : null;

  return (
    <>
      <Question html={step.q} />
      {step.ctx && <Context html={step.ctx} />}
      {(step.params || []).map((p) => (
        <SliderRow key={p.id} p={p} value={vals[p.id]} onChange={(v) => setVals((s) => ({ ...s, [p.id]: v }))} />
      ))}
      <ViewPanel view={view} />
      {!moved && <Continue onClick={() => { setMoved(true); onCorrect(); onAdvance(); }} label={step.action || "Got it"} />}
    </>
  );
}

function CustomStep({ step, onCorrect, onMiss, onAdvance }) {
  const [solved, setSolved] = useState(false);
  const [moved, setMoved] = useState(false);
  return (
    <>
      {step.render({
        tokens: TOKENS,
        onCorrect: () => { if (!solved) { setSolved(true); onCorrect(); } },
        onMiss,
      })}
      {solved && !moved && <Continue onClick={() => { setMoved(true); onAdvance(); }} />}
    </>
  );
}

const STEP_TYPES = {
  mcq: MCQStep, multi: MultiStep, numeric: NumericStep, order: OrderStep,
  pick: PickStep, slider: SliderStep, grid: GridStep, explore: ExploreStep, custom: CustomStep,
};

function StepBody(props) {
  const Cmp = STEP_TYPES[props.step.type];
  if (!Cmp) return <p style={{ fontFamily: BODY, color: ALERT }}>Unknown step type: {String(props.step.type)}</p>;
  return <Cmp {...props} />;
}

// ─── the game ───────────────────────────────────────────────────────────────
export default function LectureGame({ lectureId, game }) {
  const levels = game.levels;
  const [save, setSave] = useState(() => {
    const s = loadSave(lectureId);
    if (s.current >= levels.length || s.current < 0) s.current = 0;
    return s;
  });
  const [stepIdx, setStepIdx] = useState(0);
  const [misses, setMisses] = useState(0);
  const [stars, setStars] = useState(null);
  const [armed, setArmed] = useState(false);
  const [runId, setRunId] = useState(0);
  const stepRefs = useRef({});

  const i = save.current;
  const level = levels[i];
  const unlocked = (n) => n === 0 || save.done[levels[n - 1].id] != null;

  const persist = (s) => { setSave(s); writeSave(lectureId, s); };

  const goLevel = (n) => {
    if (!unlocked(n)) return;
    persist({ ...save, current: n });
    setStepIdx(0); setMisses(0); setStars(null); setRunId((r) => r + 1);
  };

  const replay = () => { setStepIdx(0); setMisses(0); setStars(null); setRunId((r) => r + 1); };

  const advance = () => {
    if (stepIdx + 1 >= level.steps.length) {
      const earned = misses === 0 ? 3 : misses <= 2 ? 2 : 1;
      const prev = save.done[level.id] || 0;
      persist({ ...save, done: { ...save.done, [level.id]: Math.max(prev, earned) } });
      setStars(earned);
    } else {
      const next = stepIdx + 1;
      setStepIdx(next);
      setTimeout(() => {
        const el = stepRefs.current[next];
        if (el && el.scrollIntoView) {
          try { el.scrollIntoView({ behavior: reduced() ? "auto" : "smooth", block: "start" }); } catch (e) {}
        }
      }, 40);
    }
  };

  const doneCount = Object.keys(save.done).length;
  const starTotal = Object.keys(save.done).reduce((a, k) => a + save.done[k], 0);
  const last = i === levels.length - 1;

  return (
    <div className="dlg" style={{ fontFamily: BODY, color: BONE }}>
      <style>{`
        .dlg .mono { font-family: ${MONO}; font-variant-numeric: tabular-nums; }
        .dlg b { color: ${BONE}; font-weight: 700; }
        .dlg i { font-style: italic; }
        .dlg sub { font-size: 0.75em; }
        .dlg button:focus-visible, .dlg input:focus-visible {
          outline: 3px solid ${TIDEPOOL}; outline-offset: 2px;
        }
        @media (prefers-reduced-motion: reduce) { .dlg * { transition: none !important; } }
      `}</style>

      {/* Title */}
      <div style={{ marginBottom: "6px" }}>
        <div style={{ fontFamily: DISPLAY, fontSize: "22px", fontWeight: 700, color: BONE }}>{game.title}</div>
        <p style={{ fontFamily: BODY, fontSize: "13px", color: LICHEN, margin: "6px 0 0", maxWidth: "62ch", lineHeight: 1.6 }}>{game.tagline}</p>
      </div>

      {/* Level map */}
      <nav aria-label="Levels" style={{ display: "flex", flexWrap: "wrap", gap: "8px 0", alignItems: "center", margin: "20px 0 18px" }}>
        {levels.map((L, n) => {
          const s = save.done[L.id];
          const isCur = n === i;
          const open = unlocked(n);
          return (
            <div key={L.id} style={{ display: "flex", alignItems: "center" }}>
              <button type="button" onClick={() => goLevel(n)} aria-disabled={!open ? "true" : "false"}
                aria-label={`Level ${n + 1}: ${L.name}${s != null ? ", " + s + " of 3 stars" : open ? ", unlocked" : ", locked"}`}
                style={{
                  width: "46px", height: "46px", borderRadius: "50%", display: "grid", placeItems: "center",
                  fontFamily: MONO, fontSize: "12px", fontWeight: 700, lineHeight: 1,
                  border: `2px solid ${isCur ? TIDEPOOL : s != null ? DAWN : RIDGE_BRIGHT}`,
                  background: isCur ? TIDEPOOL : MOSS,
                  color: isCur ? BASALT : s != null ? BONE : STONE,
                  opacity: open ? 1 : 0.45, cursor: open ? "pointer" : "not-allowed",
                }}>
                <span>{(game.nodePrefix || "") + (n + 1)}</span>
                {s != null && (
                  <small style={{ display: "block", fontSize: "8px", letterSpacing: "1px", marginTop: "2px", color: isCur ? BASALT : DAWN }}>
                    {"★".repeat(s)}
                  </small>
                )}
              </button>
              {n < levels.length - 1 && (
                <span aria-hidden="true" style={{ width: "18px", height: "2px", background: RIDGE_BRIGHT, margin: "0 2px", position: "relative", display: "block" }} />
              )}
            </div>
          );
        })}
      </nav>

      {/* Bench */}
      <div style={{ background: MOSS, border: `1px solid ${RIDGE}`, borderRadius: "14px", padding: "clamp(16px, 4vw, 26px)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "10px", alignItems: "baseline" }}>
          <h3 style={{ fontFamily: DISPLAY, fontSize: "20px", fontWeight: 700, color: BONE, margin: 0, lineHeight: 1.2 }}>{level.name}</h3>
          <span style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "1px", color: STONE }}>
            LEVEL {i + 1}/{levels.length} · STEP {Math.min(stepIdx + 1, level.steps.length)} OF {level.steps.length}
          </span>
        </div>

        <div style={{ margin: "14px 0 20px", padding: "12px 14px", borderRadius: "10px", background: DAWN + "18", border: `1px solid ${DAWN}33` }}>
          <b style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "1.5px", textTransform: "uppercase", color: DAWN, display: "block", marginBottom: "4px" }}>
            The problem this level fixes
          </b>
          <span style={{ fontFamily: BODY, fontSize: "13.5px", color: LICHEN, lineHeight: 1.65 }}>{level.problem}</span>
        </div>

        {level.steps.slice(0, stepIdx + 1).map((st, k) => (
          <section key={`${runId}-${k}`} ref={(el) => { stepRefs.current[k] = el; }}
            style={{
              borderTop: k === 0 ? "none" : `1px dashed ${RIDGE}`,
              paddingTop: k === 0 ? 0 : "18px", marginTop: k === 0 ? 0 : "18px",
            }}>
            <StepBody step={st} onCorrect={() => {}} onMiss={() => setMisses((m) => m + 1)} onAdvance={advance} />
          </section>
        ))}

        {stars != null && (
          <section style={{ borderTop: `1px dashed ${RIDGE}`, paddingTop: "18px", marginTop: "18px", textAlign: "center" }}>
            <div aria-label={`${stars} of 3 stars`} style={{ fontSize: "34px", letterSpacing: "4px", color: DAWN }}>{starStr(stars)}</div>
            <h4 style={{ fontFamily: DISPLAY, fontSize: "19px", fontWeight: 700, color: BONE, margin: "8px 0 4px" }}>
              {last ? "Chain complete" : "State passed forward"}
            </h4>
            <p style={{ fontFamily: BODY, fontSize: "13px", color: STONE, margin: 0 }}>
              {misses === 0 ? "No mistakes." : `${misses} mistake${misses > 1 ? "s" : ""}. Replay any level from the chain for 3 stars.`}
            </p>
            {last && (
              <div style={{ margin: "16px auto 0", maxWidth: "58ch", background: TIDEPOOL + "18", border: `1px solid ${TIDEPOOL}33`, borderRadius: "10px", padding: "14px 16px", textAlign: "left" }}>
                <b style={{ fontFamily: DISPLAY, color: BONE }}>The one-sentence mental model:</b>{" "}
                <span style={{ fontFamily: BODY, fontSize: "13.5px", color: LICHEN, lineHeight: 1.7 }}>{game.takeaway}</span>
              </div>
            )}
            <Row style={{ justifyContent: "center" }}>
              <Ghost onClick={replay}>Replay level</Ghost>
              {!last && <Primary onClick={() => goLevel(i + 1)}>Next level →</Primary>}
            </Row>
          </section>
        )}
      </div>

      {/* Footer */}
      <div style={{ marginTop: "18px", display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: MONO, fontSize: "11.5px", color: STONE }}>
          {doneCount}/{levels.length} levels · {starTotal}/{levels.length * 3} stars
        </span>
        <Ghost onClick={() => {
          if (armed) { persist({ done: {}, current: 0 }); setArmed(false); setStepIdx(0); setMisses(0); setStars(null); setRunId((r) => r + 1); }
          else { setArmed(true); setTimeout(() => setArmed(false), 3000); }
        }} style={{ fontSize: "12px", padding: "8px 12px" }}>
          {armed ? "Tap again to erase stars" : "Reset progress"}
        </Ghost>
      </div>
    </div>
  );
}
