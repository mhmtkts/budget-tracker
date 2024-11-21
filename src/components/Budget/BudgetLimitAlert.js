// src/components/Budget/BudgetLimitAlert.js
import React from 'react';

const BudgetLimitAlert = ({ remainingBudget }) => {
  if (remainingBudget >= 0) return null;

  return (
    <div className="bg-red-600 text-white p-4 rounded">
      <strong>Warning:</strong> You have exceeded your budget limit!
    </div>
  );
};

export default BudgetLimitAlert;
