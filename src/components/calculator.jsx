import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="calculator-main-container">
        <div className="row flex-center result">
          <input type="text" />
        </div>
        <div className="row flex-center ">
          <button className="btn" type="button">AC</button>
          <button className="btn" type="button">-/+</button>
          <button className="btn" type="button">&#x25;</button>
          <button className="btn" type="button">&#xf7;</button>
        </div>
        <div className="row flex-center ">
          <button className="btn" type="button">7</button>
          <button className="btn" type="button">8</button>
          <button className="btn" type="button">9</button>
          <button className="btn" type="button">x</button>
        </div>
        <div className="row flex-center ">
          <button className="btn" type="button">4</button>
          <button className="btn" type="button">5</button>
          <button className="btn" type="button">6</button>
          <button className="btn" type="button">-</button>
        </div>
        <div className="row flex-center ">
          <button className="btn" type="button">1</button>
          <button className="btn" type="button">2</button>
          <button className="btn" type="button">3</button>
          <button className="btn" type="button">+</button>
        </div>
        <div className="row flex-center ">
          <button className="btn" type="button">0</button>
          <button className="btn" type="button">.</button>
          <button className="btn" type="button">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
