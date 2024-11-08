
import React, { useEffect } from 'react';
import '../styles.css';

function ThankYouScreen({ onReturnToWelcome }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onReturnToWelcome();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onReturnToWelcome]);

  return (
    <div className="container center">
      <h1>Thank you for your feedback!</h1>
    </div>
  );
}

export default ThankYouScreen;
