import { useEffect, useState } from "react";
import "../styles/Question.scss";

export default function Question({ question, selectOption }) {
  const {
    index,
    type,
    difficulty,
    category,
    question: inquiry,
    correctAnswer,
    incorrectAnswers,
    options,
  } = question;

  return (
    <div className="question">
      <p className="inquiry">{inquiry}</p>
      <fieldset>
        {options.map((option, optIndex) => {
          return (
            <div key={`${optIndex}_${option}`}>
              <input
                checked={question.selectedOption === option}
                type="radio"
                id={`${optIndex}_${option}`}
                name={`option`}
                value={option}
                onChange={() => {
                  selectOption(index, option);
                }}
              />
              <label htmlFor={`${optIndex}_${option}`}>{option}</label>
            </div>
          );
        })}
      </fieldset>
    </div>
  );
}
