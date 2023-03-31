import { ICard } from '../types';

export function filterCards(cards: ICard[], query: string): ICard[] {
  return cards.filter((card) => card.title.toLowerCase().trim().includes(query) !== false);
}
