import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  income: [],
  expenses: [],
  budgetLimit: 0,
  categoryLimits: {}, // Her kategori için limitler
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
    setCategoryLimit(state, action) {
      const { category, limit } = action.payload;
      state.categoryLimits[category] = limit; // Kategoriye özel limit
    },
  },
});

export const { addIncome, addExpense, setBudgetLimit, setCategoryLimit } = budgetSlice.actions;
export default budgetSlice.reducer;
