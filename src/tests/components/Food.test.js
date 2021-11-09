import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import FoodItem from '../../containers/Food';

test('creates single food item', () => {
  render(
    <BrowserRouter><FoodItem /></BrowserRouter>,
  );
  const newHeader = screen.getByRole('link');
  expect(newHeader).toHaveTextContent('');
});
