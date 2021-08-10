import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="calculator-main-container">
        <div className="row result">
          <input type="text" />
        </div>
        <div className="row">
          <button className="btn" type="button">AC</button>
          <button className="btn" type="button">AC</button>
          <button className="btn" type="button">AC</button>
          <button className="btn" type="button">AC</button>
        </div>
        <div className="row">
          <button className="btn" type="button">AC</button>
          <button className="btn" type="button">AC</button>
          <button className="btn" type="button">AC</button>
          <button className="btn" type="button">AC</button>
        </div>
        <div className="row">
          <button className="btn" type="button">AC</button>
          <button className="btn" type="button">AC</button>
          <button className="btn" type="button">AC</button>
          <button className="btn" type="button">AC</button>
        </div>
        <div className="row">
          <button className="btn" type="button">AC</button>
          <button className="btn" type="button">AC</button>
          <button className="btn" type="button">AC</button>
          <button className="btn" type="button">AC</button>
        </div>
        <div className="row">
          <button className="btn" type="button">AC</button>
          <button className="btn" type="button">AC</button>
          <button className="btn" type="button">AC</button>
          <button className="btn" type="button">AC</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
