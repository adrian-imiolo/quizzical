import React from "react";

function QuizPage(props) {
  const quizElements = props.quizArray.map((item) => {
    // do something to render quiz with 5 questions  on quizPage
    <h1>{item}</h1>;
  });
  return <div>{quizElements}</div>;
}

export default QuizPage;
