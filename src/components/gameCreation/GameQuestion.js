import React from 'react'
import './GameQuestion.scss'

const GameQuestion = ({ setStep, setQuestion, onSubmit }) => {
    return (
      <div className="game-question">
        <h2>Create a new question</h2>
        <div className="game-question__UI">
        <input placeholder="i.e. What is my favorite food?"></input>
        <p>Create a new question or submit</p>
        <div className="button-flex">
        <button onClick={()=> setStep("question")}>Next</button>
        <button className="pink-button" onClick={onSubmit}>Submit</button>
        </div>
        </div>
      </div>
    );
  };

export default GameQuestion
