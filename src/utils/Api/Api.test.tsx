import { test, vitest } from 'vitest';
import { getCards } from './Api';

const mockResponse = {
  meals: [
    {
      idMeal: '1',
      strMeal: 'Test Meal 1',
      strInstructions: 'Test instructions 1',
    },
    {
      idMeal: '2',
      strMeal: 'Test Meal 2',
      strInstructions: 'Test instructions 2',
    },
  ],
};

global.fetch = vitest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockResponse),
  } as Response)
);

test('getCards returns the correct API response', async () => {
  const response = await getCards();
  expect(response.meals).toHaveLength(2);
  expect(response.meals[0].idMeal).toBe('1');
  expect(response.meals[0].strMeal).toBe('Test Meal 1');
  expect(response.meals[0].strInstructions).toBe('Test instructions 1');
  expect(response.meals[1].idMeal).toBe('2');
  expect(response.meals[1].strMeal).toBe('Test Meal 2');
  expect(response.meals[1].strInstructions).toBe('Test instructions 2');
});
