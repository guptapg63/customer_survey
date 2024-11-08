import React, { useState, useEffect } from 'react';
import '../styles.css';

function SurveyQuestion({ question, currentStep, totalSteps, onAnswer, onNext, onPrev }) {
  const [selectedRating, setSelectedRating] = useState(null);

  
  useEffect(() => {
    setSelectedRating(null); 
  }, [currentStep]);

  const handleAnswer = (value) => {
    setSelectedRating(value);
    onAnswer(question.id, value);
  };

  return (
    <div className="container">
      <h2>Customer Survey {currentStep}/{totalSteps}</h2>
      <p>{question.text}</p>
      {question.type === "rating" && (
        <div className="center">
          {[...Array(question.range)].map((_, index) => (
            <button
              key={index}
              className={`rating-button ${selectedRating === index + 1 ? 'selected' : ''}`}
              onClick={() => handleAnswer(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
      {question.type === "text" && (
        <textarea onBlur={(e) => handleAnswer(e.target.value)} />
      )}
      <div className="center">
        <button onClick={onPrev} disabled={currentStep === 1}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
}

export default SurveyQuestion;
