import React from 'react';
import '../css/buttonclear.css';

const ButtonClear = (props) => (
  <button onClick={props.handleClick} className='btn-clear'>
    {props.children}
  </button>
);

export default ButtonClear;