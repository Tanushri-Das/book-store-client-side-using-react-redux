import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productsApi } from '../features/api/apiSlice';

// Create and configure the store
export const store = configureStore({
  reducer: {
    // Add the productsApi reducer to the store
    [productsApi.reducerPath]: productsApi.reducer,
  },
  // Add the productsApi middleware to the store
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
// Optional: Setup listeners for refetching data on focus or reconnect
setupListeners(store.dispatch);
