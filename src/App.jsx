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
  // ask chatGPT this question and you will receive good answer: ok, i'm doing quiz app, i'm fetching data from TRIVIA DB, i want to render 5 questions which i get from API, all questions have multiple answers i want to add below the question as separate buttons. i already know how to get data form API but i wonder what's the best way to make some function that creates some array of objects tha contains id, question and array of answers. then i will map through this array of objects to display data. do u think it's good idea? can u show me how to do it or do it better?

  // maybe transform this function to make whole object(or array of objects because u need to get 5 elements from API) which contains: array of answers, question, and id

  function createAnswersArray() {
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
        <QuizPage quiz={quiz} answers={createAnswersArray()} />
      )}
      {/* {getQuestions()} */}
      {console.log(questions)}
      {console.log(quiz)}
      {console.log(createAnswersArray())}
      {/* this fetchData() is only for now to make QuizPage render */}
    </div>
  );
}

export default App;
