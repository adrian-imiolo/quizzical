import React from "react";
import { decode } from "html-entities";
import { v4 as uuidv4 } from "uuid";

function QuizPage(props) {
  // Now make legit QuizPage so whole questions and answers will be displayed. Figure out in key={index} how to add unique index to every item. IDK how i got this index property. Then do the 2nd hint from Scrimba

  function setQuestionsAndAnswers() {}

  return (
    <div>
      {/* How to render questions and answers?
      // remember that u need to use key
      // maybe create an array of objects [{question: question, answers: [answers]}], i think i can do it by just destructuring quiz array
      // then probably i should do for loop over this array ?
      
      // comments below are questionable
      // map over question array to get the questions
      // map over answers array to get the answers (it should be in radio form
      hr at the end) */}
      {}

      {/* {console.log(props.quiz)} */}
      {/* {console.log(questionList())} */}
      {/* <ul>
        {questionList().map((question, index) => {
          return (
            <div>
              <li key={index}>{question}</li>
              <hr />
            </div>
          );
        })}
      </ul> */}
    </div>
  );
}

export default QuizPage;
