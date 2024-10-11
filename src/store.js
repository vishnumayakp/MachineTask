
import { configureStore } from '@reduxjs/toolkit';
import inputReducer from './FetchReducer';

export const store = configureStore({
  reducer: {
    input: inputReducer,
  },
});
