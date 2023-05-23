import React, { useState } from "react";
import StartingPage from "../src/StartingPage";
import QuizPage from "../src/QuizPage";

function App() {
  const [quizArray, setQuizArray] = useState([]);

  // make a function that fetches the quiz questions from the API
  function fetchData() {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((res) => res.json())
      .then((data) => setQuizArray(data.results));
  }

  return (
    <div>
      {quizArray.length > 0 ? <QuizPage /> : <StartingPage />}
      {/* this fetchData() is only for now to make  */}
      {fetchData()}
    </div>
  );
}

export default App;
