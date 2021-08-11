import React, { useState } from 'react';
import calculator from '../logics/Calculator';
import Row from './common/row';
import Result from './common/result';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleKeyPress = (key) => {
    const response = calculator(state, key);
    setState({ ...state, ...response });
  };
  const handleChange = ({ currentTarget: input }) => {
    setState({
      ...state,
      next: input.value,
    });
  };

  const displayResult = ({ total, next, operation }) => {
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
  };
  return (
    <div className="calculator-main-container">
      <Result value={displayResult(state)} onChange={handleChange} />
      <Row onClick={handleKeyPress} />
    </div>
  );
};

export default Calculator;
