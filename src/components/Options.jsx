// Options.js
import React from 'react';
import '../styles/Options.css';

const Options = ({ text, topHeight }) => {
  const optionStyle = {
    top: topHeight || 0, // Set default top height to 0 if not provided
  };

  return (
    <div className='options' style={optionStyle}>
      {text}
    </div>
  );
};

export default Options;
