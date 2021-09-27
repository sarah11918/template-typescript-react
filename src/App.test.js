import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header correctly', () => {
  render(<App />);
  const headerElement = screen.getByText("My Counter");
  expect(headerElement).toBeInTheDocument();
});
