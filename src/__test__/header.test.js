import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/header';

const MockHeader = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);
it('should match the snapshot', () => {
  const tree = renderer.create(<MockHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});
