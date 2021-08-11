import React, { Component } from 'react';
import calculator from '../logics/Calculator';
import Row from './common/row';
import Result from './common/result';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  handleKeyPress = (key) => {
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
      return '0';
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
    return '0';
  }

  render() {
    return (
      <div className="calculator-main-container">
        <Result value={this.displayResult(this.state)} onChange={this.handleChange} />
        <Row onClick={this.handleKeyPress} />
      </div>
    );
  }
}

export default Calculator;
