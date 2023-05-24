import React from "react";
import { decode } from "html-entities";

function QuizPage(props) {
  // Now make legit QuizPage so whole questions and answers will be displayed. Figure out in key={index} how to add unique index to every item. IDK how i got this index property. Then do the 2nd hint from Scrimba

  // this function returns array of questions from API
  const questionList = () => {
    let questionsArray = [];
    for (let i = 0; i < props.quiz.length; i++) {
      questionsArray.push(decode(props.quiz[i].question));
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
          return <li key={index}>{question}</li>;
        })}
      </ul>
    </div>
  );
}

export default QuizPage;
