// src/components/TextDisplay.js
import React from 'react';

const TextDisplay = ({ text, currentIndex }) => {
  return (
    <div className="text-display">
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={index < currentIndex ? 'correct' : ''}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default TextDisplay;
