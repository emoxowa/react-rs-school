import { combineReducers } from '@reduxjs/toolkit';
import searchTextReducer from './reducers/searchTextSlice';
import searchResultsReducer from './reducers/searchResultsSlice';
import { cardsApi } from './utils/Api/Api';

const rootReducer = combineReducers({
  searchText: searchTextReducer,
  searchResults: searchResultsReducer,
  [cardsApi.reducerPath]: cardsApi.reducer,
});

export default rootReducer;
