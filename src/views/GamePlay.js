import React, { useState, useEffect } from "react";
import "./GamePlay.scss";
import axios from "axios";
import GameSelection from "../components/gamePLay/GameSelection";

const GamePlay = () => {
  const [data, setData] = useState([]);

  

  useEffect(() => {
    axios.get("http://localhost:5000").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="game-play">
      <div className="game-play__content">
        <h1>Game Play Mode</h1>
        <GameSelection data={data}/>
        
      </div>
    </div>
  );
};

export default GamePlay;
