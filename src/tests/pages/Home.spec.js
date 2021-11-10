import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../components/Home';

test('should render home page correctly', () => {
  const component = renderer.create(<Home />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
