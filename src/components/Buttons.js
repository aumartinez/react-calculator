import React from 'react';
import '../css/buttons.css'

function Buttons (props) {
  const isOperator = (value) => {
    return isNaN(value) && (value !== '.') && (value !== '=')
  };
  return (
    <button className={`btn ${isOperator(props.children) ? 'btn-operator' : ''}`.trimEnd()}
    onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </button>
  );
}

export default Buttons;