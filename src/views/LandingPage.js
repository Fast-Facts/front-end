import React from 'react'
import './LandingPage.scss'
import { Link } from "react-router-dom"

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="landing-page__content">
            <h1>Welcome to Fun Facts Adventure Games</h1>
            <h2>Create or play an exciting new game<br/> brought to you by our content creators</h2>
            <div className="cta-buttons">
                <Link to="/create-game">
                <button>Create</button>
                </Link>
                <Link to="/play-game">
                <button className="pink-button">Play</button>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default LandingPage
