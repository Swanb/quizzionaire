import "../styles/Completion.scss";
import { useState } from "react";
import Score from "./Score";
import Modal from "./Modal";

export default function Completion({ questions, setStarted, restartGame }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="completion-container">
      {modalOpen && <Modal setModalOpen={setModalOpen} questions={questions} />}
      <Score questions={questions} />
      <div className="score-btns-container">
        <button className="btn-primary" onClick={() => setStarted(false)}>
          🎭 Done!
        </button>
        <button className="btn-secondary" onClick={restartGame}>
          🎪 Let's do another run!
        </button>
        <button className="btn-outline" onClick={() => setModalOpen(true)}>
          🎬 See Details
        </button>
      </div>
    </main>
  );
}
