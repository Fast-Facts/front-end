import React from "react";
import Navbar from './components/layout/Navbar'
import LandingPage from "./views/LandingPage";
import "./styles/global.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
