import React from 'react';
import '../css/logofreecodecamp.css'
import freeCodeCampLogo from '../img/freecodecamp-logo.png';

function LogoComp () {
  return (
    <div className='frecodecamp-logo-container d-flex'>
      <img 
      src={freeCodeCampLogo}
      className='freecodecamp-logo'
      alt='FreeCodeCamp Logo'
      />
    </div>
  );
}

export default LogoComp;