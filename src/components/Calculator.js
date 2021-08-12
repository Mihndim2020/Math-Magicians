import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator-container">
        <div className="display-area">
          <p className="display-results">0</p>
        </div>
        <div className="buttons-container">
          <button type="button" className="calculator-button" onClick={() => { this.onClickHandler(calculate(this.state, 'AC')); }}>AC</button>
          <button type="button" className="calculator-button" onClick={() => { this.onClickHandler(calculate(this.state, '+/-')); }}>+/-</button>
          <button type="button" className="calculator-button" onClick={() => { this.onClickHandler(calculate(this.state, '%')); }}>%</button>
          <button type="button" className="operator-button" onClick={() => { this.onClickHandler(calculate(this.state, '÷')); }}>÷</button>
          <button type="button" className="calculator-button" onClick={() => { this.onClickHandler(calculate(this.state, '7')); }}>7</button>
          <button type="button" className="calculator-button" onClick={() => { this.onClickHandler(calculate(this.state, '8')); }}>8</button>
          <button type="button" className="calculator-button" onClick={() => { this.onClickHandler(calculate(this.state, '9')); }}>9</button>
          <button type="button" className="operator-button" onClick={() => { this.onClickHandler(calculate(this.state, 'x')); }}>x</button>
          <button type="button" className="calculator-button" onClick={() => { this.onClickHandler(calculate(this.state, '4')); }}>4</button>
          <button type="button" className="calculator-button" onClick={() => { this.onClickHandler(calculate(this.state, '5')); }}>5</button>
          <button type="button" className="calculator-button" onClick={() => { this.onClickHandler(calculate(this.state, '6')); }}>6</button>
          <button type="button" className="operator-button" onClick={() => { this.onClickHandler(calculate(this.state, '-')); }}>-</button>
          <button type="button" className="calculator-button" onClick={() => { this.onClickHandler(calculate(this.state, '1')); }}>1</button>
          <button type="button" className="calculator-button" onClick={() => { this.onClickHandler(calculate(this.state, '2')); }}>2</button>
          <button type="button" className="calculator-button" onClick={() => { this.onClickHandler(calculate(this.state, '3')); }}>3</button>
          <button type="button" className="operator-button" onClick={() => { this.onClickHandler(calculate(this.state, '+')); }}>+</button>
          <button type="button" className="calculator-button zero" onClick={() => { this.onClickHandler(calculate(this.state, '0')); }}>0</button>
          <button type="button" className="calculator-button" onClick={() => { this.onClickHandler(calculate(this.state, '.')); }}>.</button>
          <button type="button" className="operator-button" onClick={() => { this.onClickHandler(calculate(this.state, '=')); }}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
