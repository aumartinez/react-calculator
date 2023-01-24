import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png';
import Buttons from './components/Buttons';
import Screen from './components/Screen';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('')

  const addInput = value => {
    setInput(input + value);
  };

  const calcResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Por favor ingrese un valor');
    }
  };

  return (
    <div className='App d-flex'>
      <div className='frecodecamp-logo-container d-flex'>
        <img 
        src={freeCodeCampLogo}
        className='freecodecamp-logo'
        alt='FreeCodeCamp Logo'
        />
      </div>
      <div className='calc-container'>
        <Screen input={input} />
        <div className='row d-flex'>
          <Buttons handleClick = {addInput}>1</Buttons>
          <Buttons handleClick = {addInput}>2</Buttons>
          <Buttons handleClick = {addInput}>3</Buttons>
          <Buttons handleClick = {addInput}>+</Buttons>
        </div>
        <div className='row d-flex'>
          <Buttons handleClick = {addInput}>4</Buttons>
          <Buttons handleClick = {addInput}>5</Buttons>
          <Buttons handleClick = {addInput}>6</Buttons>
          <Buttons handleClick = {addInput}>-</Buttons>
        </div>
        <div className='row d-flex'>
          <Buttons handleClick = {addInput}>7</Buttons>
          <Buttons handleClick = {addInput}>8</Buttons>
          <Buttons handleClick = {addInput}>9</Buttons>
          <Buttons handleClick = {addInput}>*</Buttons>
        </div>
        <div className='row d-flex'>
          <Buttons handleClick = {calcResult}>=</Buttons>
          <Buttons handleClick = {addInput}>0</Buttons>
          <Buttons handleClick = {addInput}>.</Buttons>
          <Buttons handleClick = {addInput}>/</Buttons>
        </div>
        <div className='row d-flex'>
          <ButtonClear handleClick = {() => setInput('')}>
            Clear
          </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
