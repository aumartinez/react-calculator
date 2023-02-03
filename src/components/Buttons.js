import React from 'react';
import '../css/buttons.css';

function Buttons (props) {

  const isOperator = (value) => {
    return  isNaN(value) && (value !== '.') && (value !== '=');
  };

  if (isOperator(props.children)) {
    return (
      <button className='btn btn-operator'
      onClick={() => {props.handleClick(props.children)}}
      >
        {props.children}
      </button>
    );
  } else {
    return (
      <button className='btn'
      onClick={() => props.handleClick(props.children)}
      >
        {props.children}
      </button>
    );
  }
}

export default Buttons;