import { render, screen } from '@testing-library/react';
import { test } from 'vitest';
import SearchBar from './SearchBar';

test('renders the SearchBar component', async () => {
  render(<SearchBar handleSearchSubmit={() => {}} />);

  const searchBarInput = screen.getByPlaceholderText('Search recipe');
  expect(searchBarInput).toBeInTheDocument();
});
