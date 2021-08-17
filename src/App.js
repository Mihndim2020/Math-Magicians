/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './App.css';
import './components/componentStyles.css';
import { Route, Switch } from 'react-router-dom';
import CalculatorPage from './pages/CalculatorPage';
import HomePage from './pages/HomePage';
import QuotesPage from './pages/QuotesPage';

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/calculator">
            <CalculatorPage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/quotes">
            <QuotesPage />
          </Route>
        </Switch>

      </>
    );
  }
}

export default App;
