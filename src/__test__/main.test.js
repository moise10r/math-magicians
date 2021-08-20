import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Main from '../components/main';

const MockMain = () => (
  <BrowserRouter>
    <Main />
  </BrowserRouter>
);
it('should match the main snapshot', () => {
  const tree = renderer.create(<MockMain />).toJSON();
  expect(tree).toMatchSnapshot();
});