
import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import SurveyQuestion from './components/SurveyQuestion';
import ConfirmationDialog from './components/ConfirmationDialog';
import ThankYouScreen from './components/ThankYouScreen';
import './styles.css';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
       id: 1,
        text: "How satisfied are you with our products?",
         type: "rating",
          range: 5 
        },
    { 
      id: 2,
       text: "How fair are the prices compared to similar retailers?", 
       type: "rating",
        range: 5 
      },
    { 
      id: 3,
       text: "How satisfied are you with the value for money of your purchase?",
        type: "rating",
         range: 5
         },
    { id: 4,
       text: "On a scale of 1-10, how would you recommend us to your friends and family?",
        type: "rating",
         range: 10
         },
    { id: 5,
       text: "What could we do to improve our service?",
        type: "text"
       },
  ];

  const handleAnswer = (questionId, answer) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [questionId]: answer }));
  };

  const handleNext = () => {
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowConfirmation(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    localStorage.setItem('surveyAnswers', JSON.stringify(answers));
    setIsCompleted(true);
  };

  const handleReturnToWelcome = () => {
    setIsCompleted(false);
    setCurrentStep(0);
    setAnswers({});
    setShowConfirmation(false);
  };

  return (
    <div>
      {!isCompleted ? (
        showConfirmation ? (
          <ConfirmationDialog
            onConfirm={handleSubmit}
            onCancel={() => setShowConfirmation(false)}
          />
        ) : (
          currentStep === 0 ? (
            <WelcomeScreen onStart={() => setCurrentStep(1)} />
          ) : (
            <SurveyQuestion
              question={questions[currentStep - 1]}
              currentStep={currentStep}
              totalSteps={questions.length}
              onAnswer={handleAnswer}
              onNext={handleNext}
              onPrev={handlePrev}
            />
          )
        )
      ) : (
        <ThankYouScreen onReturnToWelcome={handleReturnToWelcome} />
      )}
    </div>
  );
}

export default App;
