import { render, screen } from '@testing-library/react';
import { test } from 'vitest';
import SearchError from './SearchError';

test('renders the SearchError component with the given text', async () => {
  const textError = 'Sample error message';
  render(<SearchError textError={textError} />);
  expect(screen.getByText(textError)).toBeInTheDocument();
});
