import { render, screen } from '@testing-library/react';
import { test } from 'vitest';
import '@testing-library/jest-dom';
import FormCard from './FormCard';
import { IFormCard } from '../../types';

const sampleProps: IFormCard = {
  image: null,
  recipeTitle: 'Test Recipe',
  userName: 'John Doe',
  description: 'A delicious test recipe',
  date: '2023-04-01',
  category: 'Dessert',
  checkbox: true,
  radio: 'Yes',
};

test('renders the FormCard component with the given data', async () => {
  render(<FormCard {...sampleProps} />);

  expect(screen.getByText('Test Recipe')).toBeInTheDocument();
  expect(screen.getByText('Dessert')).toBeInTheDocument();
  expect(screen.getByText('author: John Doe')).toBeInTheDocument();
  expect(screen.getByText('A delicious test recipe')).toBeInTheDocument();
  expect(screen.getByText('2023-04-01')).toBeInTheDocument();
  expect(screen.queryByAltText('gluten-free')).not.toBeInTheDocument();
});

test('renders the gluten-free image when radio is set to "No"', async () => {
  const modifiedProps = {
    ...sampleProps,
    radio: 'No',
  };

  render(<FormCard {...modifiedProps} />);

  expect(screen.getByAltText('gluten-free')).toBeInTheDocument();
});

test('renders the anonymous author when checkbox is not selected', async () => {
  const modifiedProps = {
    ...sampleProps,
    checkbox: false,
  };

  render(<FormCard {...modifiedProps} />);

  expect(screen.getByText('author: ---')).toBeInTheDocument();
});
