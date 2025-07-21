import { useState } from "react";
import Question from "./Question";
import "../styles/Questionnaire.scss";

export default function Questionnaire({
  questions,
  selectOption,
  setFinished,
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  return (
    <main>
      <h3 className="question-number">{`Question ${currentQuestion + 1} of ${
        questions.length
      }`}</h3>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="question-container">
        <Question
          question={questions[currentQuestion]}
          selectOption={selectOption}
          key={currentQuestion}
        ></Question>
      </div>
      <div className="buttons-container">
        <button
          className="previous-button"
          disabled={currentQuestion === 0}
          onClick={() => {
            setCurrentQuestion((prev) => prev - 1);
          }}
        >
          Previous Question
        </button>
        {currentQuestion != questions.length - 1 ? (
          <button
            className="next-button"
            onClick={() => {
              setCurrentQuestion((prev) => prev + 1);
            }}
            disabled={
              !questions[currentQuestion].hasOwnProperty("selectedOption")
            }
          >
            Next Question
          </button>
        ) : (
          <button
            className="next-button"
            disabled={
              !questions[currentQuestion].hasOwnProperty("selectedOption")
            }
            onClick={() => setFinished(true)}
          >
            End Quizz
          </button>
        )}
      </div>
    </main>
  );
}
