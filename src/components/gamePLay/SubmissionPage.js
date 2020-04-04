import React from "react";
import Navbar from "../layout/Navbar";
import './SubmissionPage.scss'

const SubmissionPage = ({ answerArray, data }) => {
  return (
    <div className="submission-page">
      <h1>Thank you for playing!!</h1>
      {data.map((question, i) => (
        <div className="submission-page-answer">
          <h3>Question {i + 1}</h3>
          <p>{question.question}</p>
          <p>Your answer was: {answerArray[i]}</p>
        </div>
      ))}
    </div>
  );
};

export default SubmissionPage;
