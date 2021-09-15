import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('it runs', () => {
  render(<App />);
  const linkElement = screen.getByText(/Artemida pizza/i);
  expect(linkElement).toBeInTheDocument();
});
