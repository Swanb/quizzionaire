import { useEffect, useState } from "react";

import Error from "./Error";

import { fetchQuestions } from "./fetchQuestions.js";
import Loading from "./Loading";
import Questionnaire from "./Questionnaire";
import Completion from "./Completion";

function Quizz({ configuration, setStarted, restartGame }) {
  const [questions, setQuestions] = useState([]);

  const [loading, setLoading] = useState(true);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    fetchQuestions(configuration)
      .then(setQuestions)
      .catch((err) => {
        console.error(err.message);
        setQuestions([]);
      })
      .finally(() => setLoading(false));
  }, []);

  function selectOption(id, option) {
    setQuestions((prev) => {
      return prev.map((question, index) => {
        return id === index
          ? { ...question, selectedOption: option }
          : question;
      });
    });
  }

  if (loading) return <Loading />;
  if (finished)
    return (
      <Completion
        questions={questions}
        setStarted={setStarted}
        restartGame={restartGame}
      />
    );
  if (questions.length === 0)
    return (
      <Error
        message={`It was not possible to grab questions for those options! :( \n Redirecting to Home . . .`}
        redirectFN={() => {
          setStarted(false);
        }}
      />
    );
  return (
    <Questionnaire
      selectOption={selectOption}
      questions={questions}
      setFinished={setFinished}
    />
  );
}

export default Quizz;
