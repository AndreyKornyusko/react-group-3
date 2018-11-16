import React from 'react';

const StepChanger = ({ currentStep, onUpdateStep }) => (
  <div>
    <b>Current step: {currentStep}</b>
    <button onClick={onUpdateStep}>Update step!</button>
  </div>
);

export default StepChanger;
