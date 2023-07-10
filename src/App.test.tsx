import React from 'react';
import { render, screen } from '@testing-library/react';
import AnimationsCycle from './App';

test('renders learn react link', () => {
  render(<AnimationsCycle />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
