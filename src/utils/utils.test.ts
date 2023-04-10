import { test } from 'vitest';
import { filterCards, startsWithUppercase, checkResponse, convertYouTubeURLToEmbed } from './utils';
import { ICard } from '../types';

const mockCards: ICard[] = [
  {
    idMeal: 1,
    strMeal: 'Test Meal',
    strDrinkAlternate: null,
    strCategory: 'Test Category',
    strArea: 'Test Area',
    strInstructions: 'Test Instructions',
    strMealThumb: 'https://example.com/image.png',
    strTags: 'test, tag',
    strYoutube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    ingredients: [
      {
        strIngredient: 'Test Ingredient',
        strMeasure: '1 cup',
      },
    ],
    strSource: 'https://www.example.com',
    strImageSource: null,
    strCreativeCommonsConfirmed: null,
    dateModified: null,
  },
  {
    idMeal: 2,
    strMeal: 'Another Test Meal',
    strDrinkAlternate: null,
    strCategory: 'Test Category',
    strArea: 'Test Area',
    strInstructions: 'Another Test Instructions',
    strMealThumb: 'https://example.com/another-image.png',
    strTags: 'test, tag',
    strYoutube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    ingredients: [
      {
        strIngredient: 'Another Test Ingredient',
        strMeasure: '1 cup',
      },
    ],
    strSource: 'https://www.example.com',
    strImageSource: null,
    strCreativeCommonsConfirmed: null,
    dateModified: null,
  },
];

test('filterCards returns filtered array of cards', () => {
  const filteredCards = filterCards(mockCards, 'test');
  expect(filteredCards).toHaveLength(2);
  expect(filteredCards[0].strMeal).toBe('Test Meal');
  expect(filteredCards[1].strMeal).toBe('Another Test Meal');
});

test('startsWithUppercase returns true if the string starts with an uppercase letter', () => {
  expect(startsWithUppercase('Test')).toBe(true);
  expect(startsWithUppercase('test')).toBe(false);
});

test('checkResponse throws an error if the response is not successful', async () => {
  const response = {
    ok: false,
    status: 404,
  } as Response;
  await expect(checkResponse(response)).rejects.toBe('Error: 404');
});

test('convertYouTubeURLToEmbed returns the correct YouTube embed URL', () => {
  const youtubeUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  const embedUrl = convertYouTubeURLToEmbed(youtubeUrl);
  expect(embedUrl).toBe('https://www.youtube.com/embed/dQw4w9WgXcQ');
});
