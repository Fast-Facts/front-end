import React, { useState, useEffect } from "react";
import "./GamePlayWizard.scss";
import axios from "axios";
import SubmissionPage from './SubmissionPage'

const GamePlayWizard = (props) => {
  const [data, setData] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [answerArray, setAnswerArray] = useState([]);
  const [submit, setSubmit] = useState(false);

  console.log(props.match.params.id);
  const url = `https://fast-facts.herokuapp.com/games/${props.match.params.id}`;

  console.log(url);

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data);
      setData(res.data);
      res.data.map((x) =>
        setAnswerArray((answerArray) => [...answerArray, true])
      );
    });
  }, [props.match.params.id]);

  const onSubmit = () => {
    data.map((question, i) => {
      question.answer === 1 && answerArray[i] === true
        ? setAnswerArray((answerArray) => [
            ...answerArray.slice(0, i),
            "correct",
            ...answerArray.slice(i + 1),
          ])
        : setAnswerArray((answerArray) => [
            ...answerArray.slice(0, i),
            "wrong",
            ...answerArray.slice(i + 1),
          ]);
    });
    setSubmit(true);
  };

  console.log(answerArray);

  return (
    <>
      {!submit ? (
        <div className="game-play-wizard">
          <h1>Game Play Mode</h1>
          <h2>Please Choose True or False</h2>

          {data.map((question, i) => (
            <div className="game-play-wizard__content">
              <h1>Question {i + 1}</h1>
              <p>{question.question}</p>
              <div className="radio-input-wizard">
                <div className="radio-input-field-wizard">
                  <input
                    type="radio"
                    value="true"
                    checked={answerArray[i]}
                    onChange={() => {
                      setAnswerArray((answerArray) => [
                        ...answerArray.slice(0, i),
                        true,
                        ...answerArray.slice(i + 1),
                      ]);
                    }}
                  ></input>
                  <p>True</p>
                </div>
                <div className="radio-input-field-wizard">
                  <input
                    type="radio"
                    value="false"
                    checked={!answerArray[i]}
                    onChange={() =>
                      setAnswerArray((answerArray) => [
                        ...answerArray.slice(0, i),
                        false,
                        ...answerArray.slice(i + 1),
                      ])
                    }
                  ></input>
                  <p>False</p>
                </div>
              </div>
            </div>
          ))}
          <div className="wizard-submit">
            <button onClick={onSubmit}>Submit</button>
          </div>
        </div>
      ) : (
        <SubmissionPage answerArray={answerArray} data={data}/>
      )}{" "}
    </>
  );
};

export default GamePlayWizard;
