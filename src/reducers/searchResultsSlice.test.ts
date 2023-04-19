// tests/searchResultsSlice.spec.js
import { createSlice } from '@reduxjs/toolkit';
import searchResultsSlice, {
  setCards,
  setFilteredCards,
  setFilteredCardsInitialized,
  setIsLoading,
  setIsNotFound,
} from './searchResultsSlice';

describe('searchResultsSlice', () => {
  const initialState = {
    isLoading: false,
    isNotFound: false,
    cards: [],
    filteredCards: [],
    filteredCardsInitialized: false,
  };

  test('should return the initial state', () => {
    const slice = createSlice({
      name: 'searchResults',
      initialState,
      reducers: {
        setIsLoading: (state, action) => {
          state.isLoading = action.payload;
        },
        setIsNotFound: (state, action) => {
          state.isNotFound = action.payload;
        },
        setCards: (state, action) => {
          state.cards = action.payload;
        },
        setFilteredCards: (state, action) => {
          state.filteredCards = action.payload;
        },
        setFilteredCardsInitialized: (state, action) => {
          state.filteredCardsInitialized = action.payload;
        },
      },
    });

    expect(
      searchResultsSlice(undefined, {
        type: undefined,
      })
    ).toEqual(
      slice.reducer(undefined, {
        type: undefined,
      })
    );
  });

  test('should handle setIsLoading', () => {
    const isLoading = true;
    const action = { type: setIsLoading.type, payload: isLoading };
    expect(searchResultsSlice(initialState, action)).toEqual({ ...initialState, isLoading });
  });

  test('should handle setIsNotFound', () => {
    const isNotFound = true;
    const action = { type: setIsNotFound.type, payload: isNotFound };
    expect(searchResultsSlice(initialState, action)).toEqual({ ...initialState, isNotFound });
  });

  test('should handle setCards', () => {
    const cards = [{ id: 1 }, { id: 2 }];
    const action = { type: setCards.type, payload: cards };
    expect(searchResultsSlice(initialState, action)).toEqual({ ...initialState, cards });
  });

  test('should handle setFilteredCards', () => {
    const filteredCards = [{ id: 1 }];
    const action = { type: setFilteredCards.type, payload: filteredCards };
    expect(searchResultsSlice(initialState, action)).toEqual({ ...initialState, filteredCards });
  });

  test('should handle setFilteredCardsInitialized', () => {
    const filteredCardsInitialized = true;
    const action = { type: setFilteredCardsInitialized.type, payload: filteredCardsInitialized };
    expect(searchResultsSlice(initialState, action)).toEqual({
      ...initialState,
      filteredCardsInitialized,
    });
  });
});
