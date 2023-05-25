import React, { useState, useEffect } from "react";
import StartingPage from "../src/StartingPage";
import QuizPage from "../src/QuizPage";
import { decode } from "html-entities";

function App() {
  const [quiz, setQuiz] = useState([]);
  const [questions, setQuestions] = useState([]);

  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isPlayedAgain, setIsPlayAgain] = useState(false);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((res) => res.json())
      .then((data) => setQuiz(data.results));
  }, [isQuizStarted, isPlayedAgain]);

  useEffect(() => {
    const extractedQuestions = quiz.map((item) => item.question);
    setQuestions(extractedQuestions);
  }, [quiz]);

  function startQuiz() {
    if (isPlayedAgain === false) {
      setIsQuizStarted(true);
    }
  }

  function playAgain() {
    if (isQuizStarted) {
      setIsPlayAgain((prevIsPlayedAgain) => !prevIsPlayedAgain);
    }
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function createAnswersArray() {
    // make empty array
    // add incorrect_answers to this array
    // add correct_answer to this array
    // shuffle newArray
    const answersArray = quiz.map((item) =>
      shuffleArray([...item.incorrect_answers, item.correct_answer])
    );

    return answersArray;
  }

  // make a function that gets data from quiz
  // make a function that adds correct answers to incorrect answers array and then shuffles this array
  // display those answers on the page
  // this answers should display in radios(u can only select 1 item at a time)

  //  function that gets the quiz questions from the API

  return (
    <div>
      {isQuizStarted === false ? (
        <StartingPage startQuiz={startQuiz} />
      ) : (
        <QuizPage quiz={quiz} />
      )}
      {/* {getQuestions()} */}
      {console.log(quiz)}
      {console.log(createAnswersArray())}
      {/* this fetchData() is only for now to make QuizPage render */}
    </div>
  );
}

export default App;
