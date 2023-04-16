import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFormCard } from '../types';

interface CardsState {
  cards: IFormCard[];
}

const initialState: CardsState = {
  cards: [],
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<IFormCard>) => {
      state.cards.push(action.payload);
    },
  },
});

export const { addCard } = cardsSlice.actions;

export default cardsSlice.reducer;
