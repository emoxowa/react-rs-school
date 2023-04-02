import { Path, UseFormRegister, RegisterOptions, FieldValues } from 'react-hook-form';
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

export interface InputProps {
  label: Path<IFormValues>;
  register: (options?: RegisterOptions) => ReturnType<UseFormRegister<IFormValues>>;
  required: boolean;
  error?: string;
}

export interface InputFileProps {
  label: Path<FieldValues>;
  name: string;
  required: boolean;
  error?: string;
}

export interface InputRadioProps {
  label: string;
  name: keyof IFormValues;
  register: UseFormRegister<IFormValues>;
  required?: boolean;
  error?: string;
}

export interface InputCheckboxProps {
  label: string;
  name: keyof IFormValues;
  register: UseFormRegister<IFormValues>;
  error?: string;
}

export interface IFormValues {
  'Your name': string;
  'Recipe title': string;
  'Date of publication': string;
  Description: string;
  Category: RecipeCategory;
  Image: File | undefined;
  'Gluten free': string;
  checkbox: boolean;
}

export enum RecipeCategory {
  Breakfast = 'Breakfast',
  Soups = 'Soups',
  Salads = 'Salads',
  Pasta = 'Pasta',
  Pizza = 'Pizza',
  Seafood = 'Seafood',
  Desserts = 'Desserts',
  Drinks = 'Drinks',
}
