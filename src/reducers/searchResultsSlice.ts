import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isNotFound: false,
  cards: [],
  filteredCards: [],
  filteredCardsInitialized: false,
};

const searchResultsSlice = createSlice({
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
    setFilteredCardsInitialized: (state, action: PayloadAction<boolean>) => {
      state.filteredCardsInitialized = action.payload;
    },
  },
});

export const {
  setIsLoading,
  setIsNotFound,
  setCards,
  setFilteredCards,
  setFilteredCardsInitialized,
} = searchResultsSlice.actions;
export default searchResultsSlice.reducer;
