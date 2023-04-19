import { test, vitest } from 'vitest';
import { render } from '@testing-library/react';
import CardList from './CardList';
import { ICard, ICardList } from '../../types';

const mockCards: ICard[] = [
  {
    idMeal: 1,
    strMeal: 'Test Meal 1',
    strDrinkAlternate: null,
    strCategory: 'Test Category',
    strArea: 'Test Area',
    strInstructions: 'Test Instructions 1',
    strMealThumb: 'https://example.com/image1.png',
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
  },
  {
    idMeal: 2,
    strMeal: 'Test Meal 2',
    strDrinkAlternate: null,
    strCategory: 'Test Category',
    strArea: 'Test Area',
    strInstructions: 'Test Instructions 2',
    strMealThumb: 'https://example.com/image2.png',
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
  },
];

const mockCardList: ICardList = {
  cards: mockCards,
  isLoading: false,
  isNotFound: false,
  displayMore: vitest.fn(),
  displayedCards: 6,
};

test('renders Preloader component when loading', () => {
  const { container } = render(<CardList {...mockCardList} isLoading />);
  expect(container.querySelector('.preloader')).toBeInTheDocument();
});

test('renders SearchError component when not found', () => {
  const { getByText } = render(<CardList {...mockCardList} isNotFound />);
  expect(getByText(/Oops! We couldn't find a match. Let's try again!/i)).toBeInTheDocument();
});
