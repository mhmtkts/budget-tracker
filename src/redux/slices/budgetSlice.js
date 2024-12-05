// src/redux/slices/budgetSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  income: [],
  expenses: [],
  budgetLimit: 0,
};

const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    addIncome(state, action) {
      state.income.push(action.payload);
    },
    addExpense(state, action) {
      state.expenses.push(action.payload);
    },
    setBudgetLimit(state, action) {
      state.budgetLimit = action.payload;
    },
  },
});

export const { addIncome, addExpense, setBudgetLimit } = budgetSlice.actions;
export default budgetSlice.reducer;
