import { render, screen } from '@testing-library/react';
import { test } from 'vitest';
import Home from './Home';

test('renders the Home component', async () => {
  render(<Home />);
  const title = screen.getByRole('heading', { name: /Discover a World of Tasty Recipes/i });
  const subtitle = screen.getByText(/for a Flavorful and Scrumptious Adventure!/i);
  expect(title).toBeTruthy();
  expect(subtitle).toBeTruthy();
});
