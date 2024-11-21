// src/hooks/useCategoryAlerts.js
import { useSelector } from 'react-redux';

const useCategoryAlerts = () => {
  const { expenses, budgetLimit } = useSelector((state) => state.budget);
  const alerts = [];

  expenses.forEach((expense) => {
    if (expense.amount > budgetLimit) {
      alerts.push(`${expense.category} has exceeded the budget limit!`);
    }
  });

  return alerts;
};

export default useCategoryAlerts;
