import React from "react";
import {Link} from "react-router-dom"
import "./GameSelection.scss";

const GameSelection = ({ data }) => {
  
  return (
    <div className="game-selection">
      <h3>Please Select a Game</h3>

      <div className="game-selection__content__container">
        {data.map((game, i) => (
            <Link to={`game/${game.id}`}>
          <div
            className="game-selection__content__container__game"
          >
            <h5>GAME: {game.name}</h5>
            <p>Creator: {game.user}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GameSelection;
