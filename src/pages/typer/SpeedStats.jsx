// src/components/SpeedStats.js
import React from 'react';

const SpeedStats = ({ wpm, accuracy }) => {
  return (
    <div className="speed-stats">
      <p>Words per minute: {wpm}</p>
      <p>Accuracy: {accuracy}%</p>
    </div>
  );
};

export default SpeedStats;
