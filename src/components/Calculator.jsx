import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.rows = {
      row1: ['AC', '+/-', '%', '÷'],
      row2: ['7', '8', '9', 'x'],
      row3: ['4', '5', '6', '-'],
      row4: ['1', '2', '3', '+'],
      row5: ['0', '.', '='],
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  render() {
    const { total, next, operation } = this.state;
    console.log(total, next, operation);
    return (
      <div className="calculator-main-container">
        <div className="row flex-center result">
          <input type="text" />
        </div>
        <div className="row flex-center ">
          {this.rows.row1.map((key) => <button onClick={() => this.handleKeyPress(key)} key={key} className="btn" type="button">{key}</button>)}
        </div>
        <div className="row flex-center ">
          {this.rows.row2.map((key) => <button onClick={() => this.handleKeyPress(key)} key={key} className="btn" type="button">{key}</button>)}
        </div>
        <div className="row flex-center ">
          {this.rows.row3.map((key) => <button onClick={() => this.handleKeyPress(key)} key={key} className="btn" type="button">{key}</button>)}
        </div>
        <div className="row flex-center ">
          {this.rows.row4.map((key) => <button onClick={() => this.handleKeyPress(key)} key={key} className="btn" type="button">{key}</button>)}
        </div>
        <div className="row flex-center ">
          {this.rows.row5.map((key) => <button onClick={() => this.handleKeyPress(key)} key={key} className="btn" type="button">{key}</button>)}
        </div>
      </div>
    );
  }
}

export default Calculator;
