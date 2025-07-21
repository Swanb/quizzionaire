import { useState } from "react";
import "../styles/Home.scss";
import OptionsColumn from "./OptionsColumn";
import {
  questionTopics,
  questionTypes,
  difficultyLevels,
} from "../config/quizzOptions";

function Home({ setStarted, setConfiguration }) {
  const [selectedOptions, setSelectedOptions] = useState({
    difficulty: null,
    category: null,
    type: null,
  });

  const canStart = Object.values(selectedOptions).every(
    (value) => value !== null
  );

  function handleStart() {
    setStarted(true);
    setConfiguration(selectedOptions);
  }
  function toggleSelection(value, key) {
    setSelectedOptions((prev) => ({
      ...prev,
      [key]: prev[key] === value ? null : value,
    }));
  }

  return (
    <main>
      <h2 className="main-title">Welcome to the Grand Quizz Extravaganza</h2>
      <p className="sub-title">🎯 Pick your challenge to begin the show!</p>

      <div className="options-container">
        <OptionsColumn
          options={difficultyLevels}
          title={"Difficulty"}
          toggleSelection={toggleSelection}
          currentOption={selectedOptions.difficulty}
          keyName={"difficulty"}
        />
        <OptionsColumn
          options={questionTopics}
          title={"Topics"}
          toggleSelection={toggleSelection}
          currentOption={selectedOptions.category}
          formatLabelFunction={(label) =>
            label.replace(/([A-Z])/g, " $1").trim()
          }
          keyName={"category"}
        />
        <OptionsColumn
          options={questionTypes}
          title={"Questions"}
          toggleSelection={toggleSelection}
          currentOption={selectedOptions.type}
          formatLabelFunction={(label) =>
            label
              .replace("TrueFalse", "True /False")
              .replace("MultipleChoice", "Multiple Choice")
          }
          keyName={"type"}
        />

        <div className="column start">
          <button
            className="start-btn"
            disabled={!canStart}
            onClick={handleStart}
          >
            Start Quizz &rarr;
          </button>
        </div>
      </div>
    </main>
  );
}

export default Home;
