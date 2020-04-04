import React from "react";
import "./GameUser.scss";


const GameUser = ({ setStep, setUser, user }) => {


  return (
    <div className="game-user">
      <h2>What is your name?</h2>
      <div className="game-user__UI">
      <input value={user} onChange={e => {e.preventDefault(); setUser(e.target.value)}} placeholder="Enter your name"></input>
      <button onClick={()=> setStep("name")}>Next</button>
      </div>
    </div>
  );
};

export default GameUser;
