import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../../components/pages/quote';

it('should match the snapshot of quote', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
