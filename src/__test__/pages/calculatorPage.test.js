import React from 'react';
import renderer from 'react-test-renderer';
import CalculatorPage from '../../components/pages/calculatorPage';

describe('Calculator page component', () => {
  it('should match the Calculator page', () => {
    const tree = renderer.create(<CalculatorPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
