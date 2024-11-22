// src/redux/slices/budgetSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: [],  // Başlangıçta boş bir dizi
  income: [],
  expenses: [],
  budgetLimit: 2000,
};

const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    addTransaction(state, action) {
      state.transactions.push(action.payload);
    },
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

export const { addTransaction, addIncome, addExpense, setBudgetLimit } = budgetSlice.actions;
export default budgetSlice.reducer;
