import React, { useState } from "react";
import "./GameQuestion.scss";
import { FaPlus } from "react-icons/fa";

const GameQuestion = ({ setStep, setQuestions, onSubmit, setAnswers }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(true);

  const handleAdd = () => {
    setQuestions((questions) => [...questions, [question, answer]]);
    // setAnswers((answers) => [...answers, answer]);

    setStep("question");

    setQuestion("");
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
            placeholder="i.e. I am a vegan"
          ></input>

          <button className="purple-button" onClick={handleAdd}>
            <FaPlus />
          </button>
        </div>
        <div className="radio-input">
        <div className="radio-input-field">
          <input
            type="radio"
            name="true"
            value="true"
            checked ={answer}
            onChange={() => {
              setAnswer(true)
            }}
          ></input>
          <p>True</p>
        </div>
        <div className="radio-input-field">
          <input
            type="radio"
            name="true"
            checked={!answer}
            onChange={() =>
              setAnswer(false)
            }
          ></input>
          <p>False</p>
        </div>
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
