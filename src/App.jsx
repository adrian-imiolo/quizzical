import React, { useState } from "react";
import StartingPage from "./StartingPage";
import QuizPage from "./QuizPage";

function App() {
  const [isStarted, setIsStarted] = useState(false);

  return <div>{isStarted ? <StartingPage /> : <QuizPage />}</div>;
}

export default App;
