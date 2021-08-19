import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../components/pages/home';

it('should match the snapshot of Home', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
