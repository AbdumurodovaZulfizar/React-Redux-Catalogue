import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FoodItem from '../../containers/Food';
import { BrowserRouter } from 'react-router-dom';

test('creates single food item', () => {
  render(
  <BrowserRouter><FoodItem /></BrowserRouter>);
  const newHeader = screen.getByRole('link');
  expect(newHeader).toHaveTextContent('');
});
