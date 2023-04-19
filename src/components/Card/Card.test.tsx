import { render, screen, fireEvent } from '@testing-library/react';
import { test, vitest } from 'vitest';
import { ICard } from '../../types';
import Card from './Card';

const mockCardData: ICard = {
  idMeal: 1,
  strMeal: 'Test Meal',
  strDrinkAlternate: null,
  strCategory: 'Test Category',
  strArea: 'Test Area',
  strInstructions: 'Test Instructions',
  strMealThumb: 'https://example.com/image.png',
  strTags: 'test, tag',
  strYoutube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  ingredients: [
    {
      strIngredient: 'Test Ingredient',
      strMeasure: '1 cup',
    },
  ],
  strSource: 'https://www.example.com',
  strImageSource: null,
  strCreativeCommonsConfirmed: null,
  dateModified: null,
};

const mockOnCardClick = () => {};

test('renders the Card component with correct data', async () => {
  render(<Card cardData={mockCardData} onCardClick={mockOnCardClick} />);
  const img = screen.getByAltText('Featured meal image');
  const category = screen.getByText(mockCardData.strCategory);
  const meal = screen.getByText(mockCardData.strMeal);
  const area = screen.getByText(`country: ${mockCardData.strArea}`);
  const instructions = screen.getByText(mockCardData.strInstructions);

  expect(img).toBeTruthy();
  expect(img).toHaveAttribute('src', mockCardData.strMealThumb);
  expect(category).toBeTruthy();
  expect(meal).toBeTruthy();
  expect(area).toBeTruthy();
  expect(instructions).toBeTruthy();
});

test('handles card click event correctly', async () => {
  const onCardClick = vitest.fn();
  render(<Card cardData={mockCardData} onCardClick={onCardClick} />);
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(onCardClick).toHaveBeenCalledTimes(1);
  expect(onCardClick).toHaveBeenCalledWith(mockCardData);
});

test('renders the Card component with an unknown area', async () => {
  const unknownAreaCardData = { ...mockCardData, strArea: 'Unknown' };
  render(<Card cardData={unknownAreaCardData} onCardClick={mockOnCardClick} />);

  const area = screen.getByText('country: -');
  expect(area).toBeTruthy();
});

test('renders the Card component with a known area', async () => {
  const knownAreaCardData = { ...mockCardData, strArea: 'Test Area' };
  render(<Card cardData={knownAreaCardData} onCardClick={mockOnCardClick} />);

  const area = screen.getByText(`country: ${knownAreaCardData.strArea}`);
  expect(area).toBeTruthy();
});
