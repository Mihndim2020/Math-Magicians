/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './App.css';
import './components/componentStyles.css';
// import Calculator from './components/Calculator';
import CalculatorPage from './pages/CalculatorPage';
import HomePage from './pages/HomePage';
import QuotesPage from './pages/QuotesPage';

class App extends React.Component {
  render() {
    return (
      <>
        <div>
          <CalculatorPage />
        </div>
        <div>
          <HomePage />
        </div>
        <div>
          <QuotesPage />
        </div>
      </>
    );
  }
}

export default App;
