export interface IFormCard {
  userName?: string;
  recipeTitle?: string;
  date?: string;
  description?: string;
  category?: string;
  image?: File | null;
  checkbox?: boolean;
  radio?: string;
}

export interface FormState {
  submitMessage: string;
}

export interface ICard {
  id?: string;
  image?: string;
  title: string;
  userName?: string;
  description?: string;
  rating?: number;
  date?: string;
  category?: string;
  checkbox?: boolean;
  radio?: string;
}

export interface FormProps {
  setCardsInfo: (cardInfo: IFormCard) => void;
}

export interface ISearchError {
  textError: string;
}
export interface ISearchBar {
  handleSearchSubmit: (query: string) => void;
}
export interface ICardList {
  isLoading: boolean;
  isNotFound: boolean;
  cards: ICard[];
  displayMore: () => void;
  displayedCards: number;
}
