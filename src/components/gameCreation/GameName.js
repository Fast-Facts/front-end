import React from 'react'
import './GameName.scss'

const GameName = ({ setStep, setName, name }) => {
    return (
      <div className="game-name">
        <h2>What is the name of the game?</h2>
        <div className="game-name__UI">
        <input placeholder="Enter game name" value={name} onChange={e => {e.preventDefault(); setName(e.target.value)}}></input>
        <button onClick={()=> setStep("question")}>Next</button>
        </div>
      </div>
    );
  };

export default GameName
