import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IApiResponse } from '../../types';

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.themealdb.com/api/json/v1/1/' }),
  endpoints: (builder) => ({
    getCards: builder.query<IApiResponse, void>({
      query: () => 'search.php?f=r',
    }),
  }),
});

export const { useGetCardsQuery } = cardsApi;
