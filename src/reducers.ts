import { combineReducers } from '@reduxjs/toolkit';
import searchTextReducer from './reducers/searchTextSlice';
import searchResultsReducer from './reducers/searchResultsSlice';
import cardsReducer from './reducers/cardsSlice';
import { cardsApi } from './utils/Api/Api';

const rootReducer = combineReducers({
  searchText: searchTextReducer,
  searchResults: searchResultsReducer,
  cards: cardsReducer,
  [cardsApi.reducerPath]: cardsApi.reducer,
});

export default rootReducer;
