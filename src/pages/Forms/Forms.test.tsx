import { render, screen } from '@testing-library/react';
import Forms from './Forms';

test('renders Forms component', () => {
  render(<Forms />);
  const formsTitle = screen.getByText(
    'Add your healthy recipe and become an author in our recipe book!'
  );
  expect(formsTitle).toBeInTheDocument();
});
