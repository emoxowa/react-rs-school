import { render, screen } from '@testing-library/react';
import { ICard } from '../../types';
import Popup from './Popup';

const mockCard: ICard = {
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

const mockOnClose = () => {};

describe('Popup Component', () => {
  beforeEach(() => {
    render(<Popup card={mockCard} onClose={mockOnClose} />);
  });

  test('renders the Popup component with correct data', () => {
    expect(screen.getByText('✖')).toBeInTheDocument();
    expect(screen.getByText(mockCard.strMeal)).toBeInTheDocument();
    expect(screen.getByText(mockCard.strCategory)).toBeInTheDocument();
    expect(screen.getByText(`Country: ${mockCard.strArea}`)).toBeInTheDocument();
  });
});
