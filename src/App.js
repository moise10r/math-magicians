/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './assets/styles/main.css';
import Main from './components/main';

class App extends Component {
  render() {
    return (
      <div title="App" className="App flex-center">
        <Main />
      </div>
    );
  }
}

export default App;
