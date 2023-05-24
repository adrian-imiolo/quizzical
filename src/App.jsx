import React, { useState, useEffect } from "react";
import StartingPage from "../src/StartingPage";
import QuizPage from "../src/QuizPage";

function App() {
  const [quiz, setQuiz] = useState([]);

  //  function that gets the quiz questions from the API
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((res) => res.json())
      .then((data) => setQuiz(data.results));
  }, []);

  return (
    <div>
      {quiz.length > 0 ? <QuizPage quiz={quiz} /> : <StartingPage />}

      {/* this fetchData() is only for now to make QuizPage render */}
    </div>
  );
}

export default App;
