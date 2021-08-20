import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './header';
import CalculatorPage from './pages/calculatorPage';
import Home from './pages/home';
import Quote from './pages/quote';

const Main = () => (
  <div className="main-home-container">
    <Header />
    <Switch>
      <Route path="/quote" component={Quote} />
      <Route path="/calculator" component={CalculatorPage} />
      <Route path="/" exact component={Home} />
    </Switch>
  </div>
);

export default Main;
