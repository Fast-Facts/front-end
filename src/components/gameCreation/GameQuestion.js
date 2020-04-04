import React, { useState } from "react";
import "./GameQuestion.scss";
import {FaPlus} from "react-icons/fa"

const GameQuestion = ({ setStep, setQuestions, onSubmit, questions }) => {
  const [question, setQuestion] = useState("");

  const handleAdd = () => {
    setQuestions((questions) => [...questions, question]);

    setStep("question");

    setQuestion('')
  };


  return (
    <div className="game-question">
      <h2>Create a new question</h2>
      <div className="game-question__UI">
        <div className="button-flex">
          <input
            value={question}
            onChange={(e) => {
              e.preventDefault();
              setQuestion(e.target.value);
            }}
            placeholder="i.e. What is my favorite food?"
          ></input>
          <button className="purple-button" onClick={handleAdd}><FaPlus /></button>
        </div>
        <p>Create a new question or submit</p>

        <button className="pink-button" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default GameQuestion;
