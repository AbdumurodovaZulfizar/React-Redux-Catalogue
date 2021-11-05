import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../../components/Header';
import { BrowserRouter } from 'react-router-dom';

test('creates header navbar', () => {
  render(
  <BrowserRouter><Header /></BrowserRouter>);
  const newHeader = screen.getByTestId(1);
  expect(newHeader).toHaveTextContent('Delicious');
});