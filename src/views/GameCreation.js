import React from "react";
import "./GameCreation.scss";
import GameWizard from "../components/gameCreation/GameWizard";

const GameCreation = () => {
  return (
    <div className="game-creation">
      <div className="game-creation__content">
        <h1>Game Creation Mode</h1>
        <GameWizard />
      </div>
    </div>
  );
};

export default GameCreation;
