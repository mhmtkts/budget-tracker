// src/components/Budget/BudgetOverview.js
import React from 'react';
import { useSelector } from 'react-redux';

const BudgetOverview = () => {
  const { income, expenses, budgetLimit } = useSelector((state) => state.budget);

  const totalIncome = income.reduce((acc, item) => acc + item.amount, 0);
  const totalExpenses = expenses.reduce((acc, item) => acc + item.amount, 0);
  const remainingBudget = budgetLimit - totalExpenses;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Budget Overview</h2>
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700">Total Income: ${totalIncome}</p>
        <p className="text-sm font-medium text-gray-700">Total Expenses: ${totalExpenses}</p>
        <p className="text-sm font-medium text-gray-700">Remaining Budget: ${remainingBudget}</p>
      </div>

      {remainingBudget < 0 && (
        <div className="text-red-600 text-sm">
          <strong>Warning: You have exceeded your budget!</strong>
        </div>
      )}
    </div>
  );
};

export default BudgetOverview;
