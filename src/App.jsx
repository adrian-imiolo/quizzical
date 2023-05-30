import React, { useState, useEffect } from "react";
import StartingPage from "../src/StartingPage";
import QuizPage from "../src/QuizPage";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { decode } from "html-entities";

function App() {
  const [questions, setQuestions] = useState([]);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isPlayedAgain, setIsPlayedAgain] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const [showResults, setShowResults] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const questions = await getQuestions();
      setQuestions(questions);
    }
    fetchData();
  }, []);

  async function fetchTriviaDB() {
    const response = await fetch("https://opentdb.com/api.php?amount=5");
    const data = await response.json();
    return data.results;
  }

  function startQuiz() {
    if (isPlayedAgain === false) {
      setIsQuizStarted(true);
    }
  }

  function playAgain() {
    if (isQuizStarted) {
      setIsPlayedAgain((prevIsPlayedAgain) => !prevIsPlayedAgain);
    }
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  async function getQuestions() {
    const data = await fetchTriviaDB();

    const questions = data.map((question) => {
      const decodedQuestion = decode(question.question);
      const decodedCorrectAnswer = decode(question.correct_answer);
      const decodedIncorrectAnswers = question.incorrect_answers.map(decode);
      const answers = shuffleArray([
        ...decodedIncorrectAnswers,
        decodedCorrectAnswer,
      ]);
      return {
        id: uuidv4(),
        question: decodedQuestion,
        answers: answers,
        correct_answer: decodedCorrectAnswer,
      };
    });
    return questions;
  }

  function handleAnswerChange(questionId, selectedAnswer) {
    if (!showResults && !isDisabled) {
      setSelectedAnswers((prevSelectedAnswers) => ({
        ...prevSelectedAnswers,
        [questionId]: selectedAnswer,
      }));
    }
  }
  function handleCheckAnswers() {
    setShowResults(true);
    setIsDisabled(true);
    console.log(isDisabled);
  }

  return (
    <div>
      {isQuizStarted === false ? (
        <StartingPage startQuiz={startQuiz} />
      ) : (
        <div className="question_container">
          {questions.map((question) => (
            <div className="question" key={question.id}>
              <h2>{question.question}</h2>
              {question.answers.map((answer, index) => (
                <label
                  className={`
                  answer_label 
                  ${selectedAnswers[question.id] === answer ? "selected" : ""} 
                  ${
                    showResults &&
                    selectedAnswers[question.id] !== question.correct_answer &&
                    selectedAnswers[question.id] === answer
                      ? "wrong"
                      : ""
                  }
                `}
                  key={index}
                >
                  <input
                    type="radio"
                    name={question.id}
                    value={answer}
                    checked={selectedAnswers[question.id] === answer}
                    onChange={() => handleAnswerChange(question.id, answer)}
                    disabled={isDisabled}
                  />
                  {answer}
                </label>
              ))}
            </div>
          ))}
          <button
            className="check_button"
            onClick={() => handleCheckAnswers()}
            disabled={isDisabled}
          >
            Check answers
          </button>
        </div>
      )}
      {console.log(questions)}
    </div>
  );
}

export default App;
