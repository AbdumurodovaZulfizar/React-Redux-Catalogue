import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';

test('creates header navbar', () => {
  render(
    <BrowserRouter><Header /></BrowserRouter>,
  );
  const newHeader = screen.getByTestId(1);
  expect(newHeader).toHaveTextContent('Delicious');
});
