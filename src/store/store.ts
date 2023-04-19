import { Store, configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';
import { cardsApi } from '../utils/Api/Api';

const store: Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
