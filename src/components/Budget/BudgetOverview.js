// src/components/Budget/BudgetOverview.js
import React from 'react';
import { useSelector } from 'react-redux';

const BudgetOverview = () => {
  // Redux store'dan veri çekiyoruz
  const { income, expenses, budgetLimit } = useSelector((state) => state.budget);

  // Gelir ve giderlerin toplamını hesaplayalım
  const totalIncome = income.reduce((acc, item) => acc + item.amount, 0);
  const totalExpenses = expenses.reduce((acc, item) => acc + item.amount, 0);
  const remainingBudget = budgetLimit - totalExpenses;

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Budget Overview</h2>
      <div className="mb-4">
        <p className="text-sm font-medium">Total Income: ${totalIncome}</p>
        <p className="text-sm font-medium">Total Expenses: ${totalExpenses}</p>
        <p className="text-sm font-medium">Remaining Budget: ${remainingBudget}</p>
      </div>

      {/* Bütçe limiti aşıldıysa uyarı göster */}
      {remainingBudget < 0 && (
        <div className="text-red-600 text-sm">
          <strong>Warning: You have exceeded your budget!</strong>
        </div>
      )}
    </div>
  );
};

export default BudgetOverview;
