import { IFormValues, IFormCard } from '../types';

export const ADD_CARD = 'ADD_CARD';

export interface AddCardAction {
  type: typeof ADD_CARD;
  payload: IFormCard;
}

export const addCard = (data: IFormValues): AddCardAction => {
  const newCard = {
    userName: data['Your name'],
    recipeTitle: data['Recipe title'],
    date: data['Date of publication'],
    description: data.Description,
    category: data.Category,
    image: data.Image,
    checkbox: data.checkbox,
    radio: data['Contain gluten'],
  };

  return {
    type: ADD_CARD,
    payload: newCard,
  };
};
