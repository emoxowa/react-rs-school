import { ADD_CARD, AddCardAction } from '../actions/formActions';
import { IFormCard } from '../types';

export interface FormState {
  cards: IFormCard[];
}

const initialState: FormState = {
  cards: [],
};

export const formReducer = (state = initialState, action: AddCardAction): FormState => {
  switch (action.type) {
    case ADD_CARD:
      return { ...state, cards: [...state.cards, action.payload] };
    default:
      return state;
  }
};
