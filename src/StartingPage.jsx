import "./StartingPage.css";
import React from "react";

function StartingPage(props) {
  return (
    <div className="container">
      <h1>Quizzical</h1>
      <p>Find out if you can answer all the questions!</p>
      <button onClick={props.startQuiz}>Start Quiz</button>
    </div>
  );
}

export default StartingPage;
