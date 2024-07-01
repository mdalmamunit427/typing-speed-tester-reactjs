// src/components/TypingArea.js
import React, { useState, useEffect } from 'react';

const TypingArea = ({ onType, isDisabled }) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    if (isDisabled) {
      setInput('');
    }
  }, [isDisabled]);

  const handleChange = (e) => {
    if (!isDisabled) {
      setInput(e.target.value);
      onType(e.target.value);
    }
  };

  return (
    <textarea
      value={input}
      onChange={handleChange}
      className="typing-area"
      disabled={isDisabled}
      rows="10"
      cols="50"
      placeholder="Start typing here..."
    />
  );
};

export default TypingArea;
