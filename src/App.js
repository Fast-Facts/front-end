import React from "react";
import Navbar from "./components/layout/Navbar";
import LandingPage from "./views/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/global.scss";
import GameCreation from "./views/GameCreation";
import GamePlay from "./views/GamePlay";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/game-creation">
            <GameCreation />
          </Route>
          <Route path="/game-play">
            <GamePlay />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
