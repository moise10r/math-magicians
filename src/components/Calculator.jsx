import React, { Component } from 'react';
import calculator from '../logics/calculator';
import Row from './common/row';

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
  }

  handleKeyPress = (key) => {
    console.log(key);
    const state = calculator(this.state, key);
    this.setState(state);
  }

  handleChange = ({ currentTarget: input }) => {
    this.setState({ next: input.value });
  }

  displayResult = ({ total, next, operation }) => {
    if (total && operation && next) {
      return `${total} ${operation} ${next}`;
    }
    if (!total && !operation && !next) {
      return 0;
    }
    if (next) {
      return `${next}`;
    }
    if (total && operation) {
      return `${total}${operation}`;
    }
    if (!next && !operation) {
      return `${total}`;
    }
    return 0;
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator-main-container">
        <div className="row flex-center result">
          <input type="text" value={this.displayResult({ total, next, operation })} onChange={this.handleChange} disabled />
        </div>
        <Row onClick={this.handleKeyPress} />
      </div>
    );
  }
}

export default Calculator;
