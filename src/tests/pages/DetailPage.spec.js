import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import DetailFood from '../../containers/DetailFood'

test('should render filterpage page correctly', () => {
  const component = renderer.create(
  <DetailFood />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
