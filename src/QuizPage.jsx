import React from "react";

function QuizPage(props) {
  const quizElements = props.quizArray.map((item) => {
    return;
    <h1>{item}</h1>;
  });
  return <div>{quizElements}</div>;
}

export default QuizPage;
