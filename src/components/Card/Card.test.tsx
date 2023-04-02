import { render, screen } from '@testing-library/react';
import { test } from 'vitest';
import Card from './Card';

test('renders the Card component with given props', async () => {
  const sampleProps = {
    image: 'https://via.placeholder.com/150',
    title: 'Delicious Cake',
    userName: 'John Doe',
    description: 'A delicious cake recipe.',
    date: '2023-04-02',
    category: 'Dessert',
    checkbox: true,
    radio: 'Yes',
    rating: 5,
  };

  render(<Card {...sampleProps} />);

  expect(screen.getByAltText('Featured meal image')).toHaveAttribute('src', sampleProps.image);
  expect(screen.getByText(sampleProps.title)).toBeInTheDocument();
  expect(screen.getByText(`author: ${sampleProps.userName}`)).toBeInTheDocument();
  expect(screen.getByText(sampleProps.description)).toBeInTheDocument();
  expect(screen.getByText(sampleProps.date)).toBeInTheDocument();
  expect(screen.getByText(sampleProps.category)).toBeInTheDocument();
  expect(screen.queryByAltText('gluten-free')).not.toBeInTheDocument();
  expect(screen.getByText(`${sampleProps.rating}`)).toBeInTheDocument();
});
