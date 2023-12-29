import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(display);
        setDisplay(result.toString());
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      setDisplay('0');
    } else {
      
      setDisplay(display === '0' ? value : display + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <div className="operators">
          <button className="operator" onClick={() => handleButtonClick('+')}>+</button>
          <button className="operator" onClick={() => handleButtonClick('-')}>-</button>
          <button className="operator" onClick={() => handleButtonClick('*')}>*</button>
          <button className="operator" onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div className="digits">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button className="orange" onClick={() => handleButtonClick('C')}>C</button>
          <button className="orange" onClick={() => handleButtonClick('=')}>=</button>
          
        </div>
      </div>
    </div>
  );
};

export default Calculator;
