import React, { useState } from "react";
import "./GameWizard.scss";
import GameName from "./GameName";
import GameUser from "./GameUser";
import GameQuestion from "./GameQuestion";
import axios from "axios";

const GameWizard = ({ questions, setQuestions }) => {
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [step, setStep] = useState("user");
  const [answers, setAnswers] = useState('');

  const onSubmit = () => {
    axios
      .post("https://fast-facts.herokuapp.com", { name, user, questions })
      .then((res) => console.log(res.data, "server response"))
      .catch((err) => console.log(err));
    setStep("submit");
    console.log(user, name, questions);
  };

  return (
    <div className="game-wizard">
      {step === "user" ? (
        <GameUser setStep={setStep} user={user} setUser={setUser} />
      ) : step === "name" ? (
        <GameName setStep={setStep} setName={setName} name={name} />
      ) : step === "submit" ? (
        <h1
          style={{
            padding: "20px",
            color: "#33318D",
            backgroundColor: "white",
            lineHeight: "2",
          }}
        >
          Congratulations {user} !!
          <br /> You have created game{" "}
          <span style={{ color: "#E7315D" }}>{name}</span>
        </h1>
      ) : (
        step === "question" && (
          <GameQuestion
            setAnswers={setAnswers}
            setStep={setStep}
            questions={questions}
            setQuestions={setQuestions}
            onSubmit={onSubmit}
          />
        )
      )}
    </div>
  );
};

export default GameWizard;
