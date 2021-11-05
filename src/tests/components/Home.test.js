import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../components/Home';

test('creates home page', () => {
  render(<Home />);
  const newHome = screen.getByRole('heading');
  expect(newHome).toHaveTextContent('Cooking with love provides food for the soul');
});
