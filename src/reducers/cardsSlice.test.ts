// tests/cardsSlice.spec.js
import { IFormCard } from '../types';
import cardsSlice, { addCard } from './cardsSlice';

describe('cardsSlice', () => {
  const initialState = {
    cards: [],
  };

  test('should handle addCard', () => {
    const newCard: IFormCard = { recipeTitle: 'Test card', description: 'Test description' };
    const action = { type: addCard.type, payload: newCard };
    expect(cardsSlice(initialState, action)).toEqual({ cards: [newCard] });
  });
});
