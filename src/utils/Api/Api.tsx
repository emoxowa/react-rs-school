import { checkResponse } from '../utils';

export const getCards = () => {
  return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=r`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(checkResponse);
};
