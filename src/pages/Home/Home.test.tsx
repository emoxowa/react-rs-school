import { render, screen } from '@testing-library/react';
import { test } from 'vitest';
import Home from './Home';

test('renders the Home component', async () => {
  render(<Home />);
  expect(screen.getByText(/world of healthy recipes/i)).toBeInTheDocument();
  expect(screen.getByText(/we believe that healthy eating/i)).toBeInTheDocument();
});
