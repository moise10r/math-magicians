import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Headeline from '../components/headline';

const MockHeadeline = () => (
  <BrowserRouter>
    <Headeline />
  </BrowserRouter>
);
it('should match the headline snapshot', () => {
  const tree = renderer.create(<MockHeadeline />).toJSON();
  expect(tree).toMatchSnapshot();
});