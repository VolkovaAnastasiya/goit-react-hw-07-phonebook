import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './contactSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});
// console.log('contactApi; ', contactApi);

setupListeners(store.dispatch);
