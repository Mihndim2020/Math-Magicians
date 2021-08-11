import React from 'react';

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
          <button type="button" className="calculator-button">AC</button>
          <button type="button" className="calculator-button">+/-</button>
          <button type="button" className="calculator-button">%</button>
          <button type="button" className="operator-button">÷</button>
          <button type="button" className="calculator-button">7</button>
          <button type="button" className="calculator-button">8</button>
          <button type="button" className="calculator-button">9</button>
          <button type="button" className="operator-button">x</button>
          <button type="button" className="calculator-button">4</button>
          <button type="button" className="calculator-button">5</button>
          <button type="button" className="calculator-button">6</button>
          <button type="button" className="operator-button">-</button>
          <button type="button" className="calculator-button">1</button>
          <button type="button" className="calculator-button">2</button>
          <button type="button" className="calculator-button">3</button>
          <button type="button" className="operator-button">+</button>
          <button type="button" className="calculator-button zero">0</button>
          <button type="button" className="calculator-button">.</button>
          <button type="button" className="operator-button">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
