export interface CardInfo {
  userName?: string;
  recipeTitle?: string;
  date?: string;
  description?: string;
}

export interface FormState {
  submitMessage: string;
}

export interface CardProps {
  src?: string;
  title?: string;
  userName?: string;
  description?: string;
  rating?: number;
  date?: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FormProps {
  setCardsInfo: (cardInfo: CardInfo) => void;
}
