import { test } from 'vitest';
import { filterCards, startsWithUppercase } from './utils';
import { ICard } from '../types';

test('filterCards returns only cards with a title containing the query', () => {
  const cards: ICard[] = [
    { title: 'Delicious Cake' },
    { title: 'Tasty Salad' },
    { title: 'Scrumptious Soup' },
  ];

  const query = 'salad';

  const filteredCards = filterCards(cards, query);

  expect(filteredCards.length).toBe(1);
  expect(filteredCards[0].title).toBe('Tasty Salad');
});

test('startsWithUppercase returns true if the string starts with an uppercase letter', () => {
  const value = 'Hello';

  const result = startsWithUppercase(value);

  expect(result).toBe(true);
});

test('startsWithUppercase returns false if the string starts with a lowercase letter', () => {
  const value = 'world';

  const result = startsWithUppercase(value);

  expect(result).toBe(false);
});
