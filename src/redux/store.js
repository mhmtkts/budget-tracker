// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import budgetReducer from './slices/budgetSlice';
import categoriesReducer from './slices/categoriesSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    budget: budgetReducer,
    categories: categoriesReducer,
    user: userReducer,
  },
});
