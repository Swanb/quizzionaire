import "../styles/Modal.scss";

export default function Modal({ questions, setModalOpen }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>🎬 Quiz Details</h2>
        <ul>
          {questions.map((q, index) => (
            <li key={index}>
              <p className="question-text">{q.question}</p>
              <p>
                ✅ <strong>Correct:</strong>{" "}
                <span className="correct">{q.correctAnswer}</span>
              </p>
              <p>
                🎯 <strong>Your Answer:</strong>{" "}
                <span
                  className={
                    q.selectedOption === q.correctAnswer
                      ? "correct"
                      : "incorrect"
                  }
                >
                  {q.selectedOption || "None"}
                </span>
              </p>
              <hr />
            </li>
          ))}
        </ul>
        <button className="close-btn" onClick={() => setModalOpen(false)}>
          Close ✖
        </button>
      </div>
    </div>
  );
}
