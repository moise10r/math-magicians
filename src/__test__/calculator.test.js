import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator page component', () => {
  beforeEach(() => {
    render(<Calculator />);
  });
  it('should match the Calculator page', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return the sum of two number form UI', () => {
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('='));
    const result = screen.getByRole('textbox');
    expect(result).toHaveValue('2');
  });
  it('should return the difference of two number form UI', () => {
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('='));
    const result = screen.getByRole('textbox');
    expect(result).toHaveValue('0');
  });
  it('should return the quotient of two number form UI', () => {
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('÷'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('='));
    const result = screen.getByRole('textbox');
    expect(result).toHaveValue('1');
  });
  it('should return the product of two number form UI', () => {
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('='));
    const result = screen.getByRole('textbox');
    expect(result).toHaveValue('1');
  });
  it('should return the rest of two number form UI', () => {
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('%'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    const result = screen.getByRole('textbox');
    expect(result).toHaveValue('0');
  });
  it('should return the rest of two number form UI', () => {
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    const result = screen.getByRole('textbox');
    expect(result).toHaveValue('2.4');
  });
  it('should rest the values', () => {
    fireEvent.click(screen.getByText('AC'));
    const result = screen.getByRole('textbox');
    expect(result).toHaveValue('0');
  });
});
