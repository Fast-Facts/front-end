import React from "react";
import Navbar from "./components/layout/Navbar";
import LandingPage from "./views/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/global.scss";
import GameCreation from "./views/GameCreation";
import GamePlay from "./views/GamePlay";
import GamePlayWizard from "./components/gamePLay/GamePlayWizard";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/create-game">
            <GameCreation />
          </Route>
          <Route path="/play-game">
            <GamePlay />
          </Route>
          <Route path="/game/:id" render={(props) => <GamePlayWizard {...props}/>}>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
