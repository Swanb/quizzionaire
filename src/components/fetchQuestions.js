import { decode } from "he";
import { renameKey } from "./Utils";

export const BASE_URL = "https://opentdb.com/api.php?";
export const NUM_QUESTIONS = 10;

export async function fetchQuestions(configuration) {
  const urlParameters = {
    amount: NUM_QUESTIONS,
    category: configuration.category,
    difficulty: configuration.difficulty,
    type: configuration.type,
  };
  const queryString = new URLSearchParams(urlParameters).toString();
  const fullUrl = `${BASE_URL}${queryString}`;

  const response = await fetch(fullUrl);
  const data = await response.json();

  return modifyQuestionsFromAPI(data.results);
}

function modifyQuestionsFromAPI(results) {
  return results.map((q, index) => {
    let question = { ...q, index };
    question.question = decode(question.question);
    question.correct_answer = decode(question.correct_answer);
    question.incorrect_answers = question.incorrect_answers.map(decode);

    question = renameKey(question, "correct_answer", "correctAnswer");
    question = renameKey(question, "incorrect_answers", "incorrectAnswers");

    question.options =
      question.type === "boolean"
        ? ["True", "False"]
        : shuffleOptions(question.correctAnswer, question.incorrectAnswers);

    return question;
  });
}

function shuffleOptions(correctAnswer, incorrectAnswers) {
  const options = [...incorrectAnswers];
  const randomIndex = Math.floor(Math.random() * (options.length + 1));
  options.splice(randomIndex, 0, correctAnswer);
  return options;
}
