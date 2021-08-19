import Calculator from '../../logics/Calculator';

describe('Calculator functionality ', () => {
  let data = {};
  it('should return the sum of two numbers', () => {
    data = { total: 4, next: 2, operation: '+' };
    const { total } = Calculator(data, '=');
    expect(total).toBe('6');
  });
  it('should return the sum of two numbers', () => {
    data = { total: 4.3, next: 2, operation: '+' };
    const { total } = Calculator(data, '=');
    expect(total).toBe('6.3');
  });
  it('should return the difference of two numbers', () => {
    data = { total: 4, next: 2, operation: '-' };
    const { total } = Calculator(data, '=');
    expect(total).toBe('2');
  });
  it('should return the product of two numbers', () => {
    data = { total: 4, next: 2, operation: 'x' };
    const { total } = Calculator(data, '=');
    expect(total).toBe('8');
  });
  it('should return the quotient of two numbers', () => {
    data = { total: 4, next: 2, operation: '÷' };
    const { total } = Calculator(data, '=');
    expect(total).toBe('2');
  });
  it('should return the rest of two numbers', () => {
    data = { total: 4, next: 2, operation: '%' };
    const { total } = Calculator(data, '=');
    expect(total).toBe('0');
  });
  it('should return the value to 0', () => {
    data = { total: 4, next: 2, operation: '%' };
    const result = Calculator(data, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });
});
