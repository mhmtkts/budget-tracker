// src/hooks/useBudgetData.js
import { useSelector } from 'react-redux';

const useBudgetData = () => {
  const { income, expenses, budgetLimit } = useSelector((state) => state.budget);

  return {
    income,
    expenses,
    budgetLimit,
  };
};

export default useBudgetData;
