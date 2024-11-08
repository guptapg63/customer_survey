
import React from 'react';
import '../styles.css';

function ConfirmationDialog({ onConfirm, onCancel }) {
  return (
    <div className="container center">
      <h3>Are you sure you want to submit the survey?</h3>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onCancel}>No</button>
    </div>
  );
}

export default ConfirmationDialog;
