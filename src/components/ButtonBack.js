import React from 'react';

const ButtonBack = (props) => {
  return(
    <button className='btn' onClick={props.handleClick}>
      Back
    </button>
  );
}

export default ButtonBack;