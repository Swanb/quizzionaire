export function renameKey(obj, oldKey, newKey) {
  const novo = { ...obj, [newKey]: obj[oldKey] };
  delete novo[oldKey];
  return novo;
}

function modifyQuestionsFromAPI(results) {
  const modifiedQuestions = results.map((q, index) => {
    let newQuestion = { ...q };
    newQuestion.index = index;
    newQuestion.question = decode(newQuestion.question);
    newQuestion["correct_answer"] = decode(newQuestion["correct_answer"]);
    newQuestion["incorrect_answers"] = newQuestion["incorrect_answers"].map(
      (inc) => decode(inc)
    );
    newQuestion = renameKey(newQuestion, "correct_answer", "correctAnswer");
    newQuestion = renameKey(
      newQuestion,
      "incorrect_answers",
      "incorrectAnswers"
    );
    if (newQuestion.type == "boolean") {
      newQuestion["options"] = ["True", "False"];
    } else {
      let tempOptions;
      const randomPosition = Math.floor(
        Math.random() * (newQuestion.incorrectAnswers.length + 1)
      );
      tempOptions = [...newQuestion.incorrectAnswers];
      tempOptions.splice(randomPosition, 0, newQuestion.correctAnswer);
      newQuestion["options"] = tempOptions;
    }
    return newQuestion;
  });
  return modifiedQuestions;
}
