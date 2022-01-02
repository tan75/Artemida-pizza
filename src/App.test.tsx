/**
 * @jest-environment jsdom
 */

import React from 'react';

import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

describe('App', () => {
  it('renders', () => {
    render(<App />);
    const name = screen.getByText(/Artemida pizza/i);
    expect(name).toBeInTheDocument();
  });
});
