
import React from 'react';
import '../styles.css';

function WelcomeScreen({ onStart }) {
  return (
    <div className="container center">
      <h1>Welcome to the Customer Survey</h1>
      <button onClick={onStart}>Start Survey</button>
    </div>
  );
}

export default WelcomeScreen;
