import { useState } from "react";
import "./styles/App.scss";
import Home from "./components/Home.jsx";
import Quizz from "./components/Quizz.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [started, setStarted] = useState(false);
  const [configuration, setConfiguration] = useState(null);
  const [quizzKey, setQuizzKey] = useState(0);

  function restartGame() {
    setQuizzKey((prev) => prev + 1);
  }
  return (
    <>
      <Header />
      {started ? (
        <Quizz
          configuration={configuration}
          key={quizzKey}
          setStarted={setStarted}
          restartGame={restartGame}
        />
      ) : (
        <Home setStarted={setStarted} setConfiguration={setConfiguration} />
      )}
      <Footer></Footer>
    </>
  );
}

export default App;
