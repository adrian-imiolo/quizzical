import React from "react";
import { encode } from "html-entities";

function QuizPage(props) {
  // this function returns array of questions from API
  const questionList = () => {
    let questionsArray = [];
    for (let i = 0; i < props.quiz.length; i++) {
      questionsArray.push(props.quiz[i].question);
    }
    return questionsArray;
  };

  return (
    <div>
      <h2>Questions:</h2>
      {console.log(props.quiz)}
      {console.log(questionList())}
      <ul>
        {questionList().map((question, index) => {
          return <li key={index}>{encode(question)}</li>;
        })}
      </ul>
      {/* {props.quiz.map((question, index) => {
        <p key={index}>{question.question}</p>;
      })} */}
    </div>
  );
}

export default QuizPage;
