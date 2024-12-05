import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

const BudgetOverview = () => {
  const { income, expenses } = useSelector((state) => state.budget);

  const totalIncome = income.reduce((acc, item) => acc + item.amount, 0);
  const totalExpenses = expenses.reduce((acc, item) => acc + item.amount, 0);
  const remainingBudget = totalIncome - totalExpenses;

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Budget Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700">Total Income: ${totalIncome}</p>
          <p className="text-sm font-medium text-gray-700">Total Expenses: ${totalExpenses}</p>
          <p className={`text-sm font-medium ${remainingBudget < 0 ? 'text-red-600' : 'text-gray-700'}`}>
            Remaining Budget: ${remainingBudget}
          </p>
        </div>

        {remainingBudget < 0 && (
          <div className="text-red-600 text-sm">
            <strong>Warning: You have exceeded your budget!</strong>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BudgetOverview;
