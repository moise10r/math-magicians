/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Calculator from './components/calculator';
import './assets/styles/main.css';

class App extends Component {
  render() {
    return (
      <div className="App flex-center">
        <Calculator />
      </div>
    );
  }
}

export default App;
