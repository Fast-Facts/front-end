import React, {useState} from 'react'
import './GameWizard.scss'
import GameName from './GameName';
import GameUser from './GameUser';
import GameQuestion from './GameQuestion';

const GameWizard = () => {

    const [gameObject, setGameObject] = useState({
        user: '',
        name: '',
        questions: []
    });
    const [step, setStep] = useState("user")

    const onSubmit = () => {console.log(gameObject)}

    return (
        <div className="game-wizard">
            {step === "user" ? <GameUser setStep={setStep} setUser={setGameObject.user} /> : step === "name" ? <GameName setStep={setStep} setName={setGameObject.name}/> : step === "question" && <GameQuestion setStep={setStep} setQuestions={setGameObject.questions} onSubmit={onSubmit}/> }
            {console.log(gameObject)}
        </div>
    )
}

export default GameWizard
