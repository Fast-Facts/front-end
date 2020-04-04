import React from 'react'
import './GameName.scss'

const GameName = ({ setStep, setName }) => {
    return (
      <div className="game-name">
        <h2>What is the name of the game?</h2>
        <div className="game-name__UI">
        <input placeholder="Enter game name"></input>
        <button onClick={()=> setStep("question")}>Next</button>
        </div>
      </div>
    );
  };

export default GameName
