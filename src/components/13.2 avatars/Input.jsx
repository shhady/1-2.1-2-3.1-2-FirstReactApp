import React from 'react';

function Input({ userInput, onInputChange }) {
  return <input onChange={onInputChange} value={userInput} />;
}

export default Input;
