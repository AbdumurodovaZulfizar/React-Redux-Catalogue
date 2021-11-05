import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Food from '../../containers/Food'

test('should render filterpage page correctly', () => {
  const component = renderer.create(
  <BrowserRouter>
  <Food />
  </BrowserRouter>
    );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('it renders correctly only one food', () => {
  const food = {
    strName: 'FoodName',
    strId: '111',
  };

  const component = renderer.create(
    <BrowserRouter>
    <Food item={food} />
    </BrowserRouter>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
