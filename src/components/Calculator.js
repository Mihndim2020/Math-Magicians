import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState('');
  const [next, setNext] = useState('');
  const [operation, setOperation] = useState('');
  const obj = { total, next, operation };

  const onClickHandler = (newValue) => {
    if (newValue.total != null) {
      setTotal(newValue.total);
    }

    setNext(newValue.next);

    if (newValue.operation != null) {
      setOperation(newValue.operation);
    }
  };

  return (
    <div className="calculator-container">
      <div className="display-area">
        <p className="display-results">
          { total }
          { operation }
          { next }
        </p>
      </div>
      <div className="buttons-container">
        <button type="button" className="calculator-button" onClick={() => { onClickHandler(calculate(obj, 'AC')); }}>AC</button>
        <button type="button" className="calculator-button" onClick={() => { onClickHandler(calculate(obj, '+/-')); }}>+/-</button>
        <button type="button" className="calculator-button" onClick={() => { onClickHandler(calculate(obj, '%')); }}>%</button>
        <button type="button" className="operator-button" onClick={() => { onClickHandler(calculate(obj, '÷')); }}>÷</button>
        <button type="button" className="calculator-button" onClick={() => { onClickHandler(calculate(obj, '7')); }}>7</button>
        <button type="button" className="calculator-button" onClick={() => { onClickHandler(calculate(obj, '8')); }}>8</button>
        <button type="button" className="calculator-button" onClick={() => { onClickHandler(calculate(obj, '9')); }}>9</button>
        <button type="button" className="operator-button" onClick={() => { onClickHandler(calculate(obj, 'x')); }}>x</button>
        <button type="button" className="calculator-button" onClick={() => { onClickHandler(calculate(obj, '4')); }}>4</button>
        <button type="button" className="calculator-button" onClick={() => { onClickHandler(calculate(obj, '5')); }}>5</button>
        <button type="button" className="calculator-button" onClick={() => { onClickHandler(calculate(obj, '6')); }}>6</button>
        <button type="button" className="operator-button" onClick={() => { onClickHandler(calculate(obj, '-')); }}>-</button>
        <button type="button" className="calculator-button" onClick={() => { onClickHandler(calculate(obj, '1')); }}>1</button>
        <button type="button" className="calculator-button" onClick={() => { onClickHandler(calculate(obj, '2')); }}>2</button>
        <button type="button" className="calculator-button" onClick={() => { onClickHandler(calculate(obj, '3')); }}>3</button>
        <button type="button" className="operator-button" onClick={() => { onClickHandler(calculate(obj, '+')); }}>+</button>
        <button type="button" className="calculator-button zero" onClick={() => { onClickHandler(calculate(obj, '0')); }}>0</button>
        <button type="button" className="calculator-button" onClick={() => { onClickHandler(calculate(obj, '.')); }}>.</button>
        <button type="button" className="operator-button" onClick={() => { onClickHandler(calculate(obj, '=')); }}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
