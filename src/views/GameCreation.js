import React, { useState } from "react";
import "./GameCreation.scss";
import GameWizard from "../components/gameCreation/GameWizard";

const GameCreation = () => {
  const [questions, setQuestions] = useState([]);

  return (
    <div className="game-creation">
      <div className="game-creation__content">
        <h1>Game Creation Mode</h1>
        <GameWizard setQuestions={setQuestions} questions={questions} />
        {questions.map((question, i) => (
          <div className="question-list">
              <h3>Question {i + 1}:</h3>
            <p>{question}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameCreation;
