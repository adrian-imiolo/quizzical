import React, { useState } from "react";
import "./StartingPage.css";
function StartingPage() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  return (
    <div className="container">
      <h1>Quizzical</h1>
      <p>Find out if you can answer all the questions!</p>
      <button onClick={() => setIsQuizStarted(true)}>Start Quiz</button>
    </div>
  );
}

export default StartingPage;
