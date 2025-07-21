export default function Score({ questions }) {
  const correctAnswers = questions.reduce(
    (acc, q) => (q.selectedOption === q.correctAnswer ? acc + 1 : acc),
    0
  );

  const score = Math.round((correctAnswers / questions.length) * 100);

  return (
    <div className="score-box">
      <h3>{`🎉 Your score is ${score}%`}</h3>
      <h5>{`✔️ You answered correctly ${correctAnswers} of ${questions.length} questions!`}</h5>
    </div>
  );
}
