import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Game.css";
import Confetti from "react-confetti";

const Game = () => {
  const [answers, setAnswers] = useState(["", "", "", "", "", ""]);
  const [confetti, setConfetti] = useState(false);

  const navigate = useNavigate();

  const riddleLines = [
    "I start the ticking of clocks and mark the beginning of time.",
    "You cannot write ghost without me, yet I remain quiet in the hour.",
    "I open the agenda and appear first in action.",
    "I appear at the heart of innovation and also in the calm of the night.",
    "I lead both knowledge and kindness.",
    "I stand 21st in the alphabet and often symbolize unity in a team.",
  ];

  useEffect(() => {
    const currentWord = answers.join("");
    if (currentWord.toUpperCase() === "THANKU") {
      setConfetti(true);
      const timer = setTimeout(() => {
        navigate("/message");
      }, 3000);

      return () => clearTimeout(timer);
    }
  },[answers,navigate]);

  const handleChange = (index, value) => {
    const updated = [...answers];
    updated[index] = value.toUpperCase();
    setAnswers(updated);
  };

  return (
    <div className="game-container">
      <h2>Solve the riddle to unlock what hides beneath</h2>
      {confetti && <Confetti />}
      <div className="riddle-lines">
        {riddleLines.map((line, index) => (
          <div key={index} className="riddle-line">
            <strong>{index + 1}.</strong> {line}
          </div>
        ))}
      </div>

      <div className="inputs-container">
        {answers.map((ans, index) => (
          <div key={index} className="input-wrapper">
            <input
              type="text"
              maxLength={1}
              value={ans}
              onChange={(e) => handleChange(index, e.target.value)}
              className="letter-input"
            />
            <div className="input-label">{index + 1}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Game;
