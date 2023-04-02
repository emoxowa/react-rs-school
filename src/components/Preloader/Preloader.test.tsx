import { render, screen } from '@testing-library/react';
import { test } from 'vitest';
import Preloader from './Preloader';

test('renders the Preloader component', async () => {
  render(<Preloader />);

  const preloaderElement = screen.getByTestId('preloader');
  expect(preloaderElement).toBeInTheDocument();
});
