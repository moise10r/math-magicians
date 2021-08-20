import operate from '../../logics/operate';

describe('Operator functionality', () => {
  it('Should return the summation of two numbers', () => {
    const result = operate(5, 8, '+');
    expect(result).toBe('13');
  });

  it('Should return the difference of two numbers', () => {
    const result = operate(8, 5, '-');
    expect(result).toBe('3');
  });

  it('Should return the product of two numbers', () => {
    const result = operate(2, 5, 'x');
    expect(result).toBe('10');
  });

  it('Should return the quotient of two numbers', () => {
    const result = operate(10, 2, '÷');
    expect(result).toBe('5');
  });

  it('Should return the rest of two numbers', () => {
    const result = operate(8, 2, '%');
    expect(result).toBe('0');
  });
});
