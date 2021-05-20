import React from 'react';

const buttonStyle = {
  fontSize: '2rem',
  padding: '1rem 3rem',
  backgroundColor: '#7dcd40',
  color: 'white',
  borderRadius: '1rem',
  cursor: 'pointer',
};

const Button = ({ handleClick, text, condition }) => {
  return (
    <button
      type={condition ? 'submit' : 'button'}
      onClick={handleClick}
      // eslint-disable-next-line react/jsx-closing-bracket-location
      style={buttonStyle}>
      {text}
    </button>
  );
};

export default Button;
