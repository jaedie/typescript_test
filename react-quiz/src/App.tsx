import React, { useState } from "react";
import styled from "styled-components";
import { QuestionState, fetchQuizQuestions, Difficulty } from "./API";
import QuestionCards from "./components/Questioncards";

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <Container>
      <h1>REACT QUIZ</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <StartBtn className="start" onClick={startTrivia}>
          Start
        </StartBtn>
      ) : null}
      {!gameOver ? <p className="score"> Score:</p> : null}
      {loading && <p>Loading Questions...</p>}
      {!loading && !gameOver && (
        <QuestionCards
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answer}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}

      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </Container>
  );
}

export default App;

const Container = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex: center;
  flex-direction: row;
  background: url("/images/background.jpg") center no-repeat;
  background-size: cover;
`;

const StartBtn = styled.button`
  color: red;
`;
