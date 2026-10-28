import { useState } from "react";
import Dashboard from "./Dashboard";

// ─── ADD LECTURE IMPORTS HERE ─────────────────────────────────────────────────
import Lecture1_Intro from "./lectures/Lecture1_Intro";
import Lecture2_ClassicalML from "./lectures/Lecture2_ClassicalML";
import Lecture3_NeuralNetworks from "./lectures/Lecture3_NeuralNetworks";
import Lecture4_CNNs from "./lectures/Lecture4_CNNs";
import Lecture5_SequentialModels from "./lectures/Lecture5_SequentialModels";
import Lecture6_GraphNeuralNetworks from "./lectures/Lecture6_GraphNeuralNetworks";
import Lecture7_RegularizationTransfer from "./lectures/Lecture7_RegularizationTransfer";
import Lecture8_GenerativeModels from "./lectures/Lecture8_GenerativeModels";
import Lecture9_MidtermReview2 from "./lectures/Lecture9_MidtermReview2";

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
  { id: 3, type: "LECTURE", date: "Sep 14", title: "Neural Networks & Backpropagation", subtitle: "Forward pass, activation functions, backprop, vanishing/exploding gradients, intro to CNNs · Pre-proposal due", color: TIDEPOOL, icon: "🧠", component: Lecture3_NeuralNetworks, ready: true },
  { id: 4, type: "LECTURE", date: "Sep 21", title: "Convolutional Neural Networks", subtitle: "Stride, padding, output size, pooling, batch norm, ResNet, CLIP · NVIDIA guest lecture on physical AI", color: TIDEPOOL, icon: "🖼️", component: Lecture4_CNNs, ready: true },

  { id: "d2", type: "DIVIDER", title: "UNIT 2 — CORE ARCHITECTURES", subtitle: "Sep 28 – Oct 12", color: DAWN, icon: "⛰️" },
  { id: 5, type: "LECTURE", date: "Sep 28", title: "RNNs, LSTM & Transformers", subtitle: "Sequential data, BPTT, LSTM gates, attention, positional encoding, transformer blocks, intro to graph neural networks", color: DAWN, icon: "🔁", component: Lecture5_SequentialModels, ready: true },
  { id: 6, type: "LECTURE", date: "Oct 5", title: "Graph Neural Networks & Training Dynamics", subtitle: "Invariance & equivariance, neighbour aggregation, the GCN update rule, over-smoothing, GraphRAG — then normalisation, initialisation and momentum · Assignment 1 released", color: DAWN, icon: "🕸️", component: Lecture6_GraphNeuralNetworks, ready: true },
  { id: 7, type: "LECTURE", date: "Oct 12", title: "Optimization, Regularization & Transfer Learning", subtitle: "Momentum & Adam, learning-rate schedules, early stopping, dropout, data augmentation, hyperparameters, transfer learning, adapters & LoRA", color: DAWN, icon: "🌊", component: Lecture7_RegularizationTransfer, ready: true },

  { id: "d3", type: "DIVIDER", title: "UNIT 3 — GENERATIVE & ATTENTION", subtitle: "Oct 19 – Oct 26", color: GOLD, icon: "🌄" },
  { id: 8, type: "LECTURE", date: "Oct 19", title: "Midterm Review & Generative Models", subtitle: "Half midterm review (classical ML, shapes, conv, pooling) · then GANs, autoencoders, VAEs, AutoML — generative half is NOT on the exam", color: GOLD, icon: "🎨", component: Lecture8_GenerativeModels, ready: true },
  { id: 9, type: "EXAM PREP", date: "Oct 26", title: "Midterm Review Part 2", subtitle: "Every worked example done live — SGD, init, batch norm, dropout, L2, attention, graphs · then the exam brief: scope is blocks 1–7, the sample paper is last year's REAL exam · self-supervised learning and the guest lecture are not examinable", color: GOLD, icon: "🔍", component: Lecture9_MidtermReview2, ready: true },

  { id: "midterm", type: "EXAM", date: "Nov 2", title: "Midterm Exam", subtitle: "50 questions, 2 hours, 11 pages, one answer sheet — write your USC ID · any paper materials, BASIC CALCULATOR permitted, no smart glasses · blocks 1–7 only, research topics excluded · they will curve", color: ALERT, icon: "📝", ready: false },

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