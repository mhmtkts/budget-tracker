import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent } from '../ui/card';
import BudgetLimitAlert from './BudgetLimitAlert'; // BudgetLimitAlert bileşenini import et

const BudgetOverview = () => {
  const { income, expenses, categoryLimits } = useSelector((state) => state.budget);

  const totalIncome = income.reduce((acc, item) => acc + item.amount, 0).toFixed(2);
  const totalExpenses = expenses.reduce((acc, item) => acc + item.amount, 0).toFixed(2);
  const remainingBudget = (totalIncome - totalExpenses).toFixed(2);

  // Her kategori için limit kontrolü
  const categoryWarnings = expenses.reduce((acc, expense) => {
    const categoryLimit = categoryLimits[expense.category];
    if (categoryLimit) {
      const totalCategoryExpense = expenses
        .filter((item) => item.category === expense.category)
        .reduce((sum, item) => sum + item.amount, 0);

      const percentageSpent = (totalCategoryExpense / categoryLimit) * 100;

      if (percentageSpent >= 80) {
        acc.push({
          category: expense.category,
          percentageSpent: percentageSpent.toFixed(2),
        });
      }
    }
    return acc;
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Total Balance */}
      <Card className="p-4 shadow rounded-lg">
        <CardContent>
          <h3 className="text-lg font-semibold mb-2">Total Balance</h3>
          <p className="text-2xl font-bold">${remainingBudget}</p>
        </CardContent>
      </Card>

      {/* Total Income */}
      <Card className="p-4 shadow rounded-lg">
        <CardContent>
          <h3 className="text-lg font-semibold mb-2">Income</h3>
          <p className="text-2xl font-bold">${totalIncome}</p>
        </CardContent>
      </Card>

      {/* Total Expenses */}
      <Card className="p-4 shadow rounded-lg">
        <CardContent>
          <h3 className="text-lg font-semibold mb-2">Expense</h3>
          <p className="text-2xl font-bold">${totalExpenses}</p>
        </CardContent>
      </Card>

      {/* Budget Limit Alerts */}
      {categoryWarnings.length > 0 && (
        <div className="col-span-1 md:col-span-3 mt-6">
          <h4 className="font-semibold text-lg mb-2">Budget Limit Alerts:</h4>
          <ul className="list-disc pl-6">
            {categoryWarnings.map((warning, index) => (
              <li key={index}>
                <strong>{warning.category}</strong>: {warning.percentageSpent}% of budget reached.
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Budget Limit Alert */}
      <div className="col-span-1 md:col-span-3">
        <BudgetLimitAlert remainingBudget={remainingBudget} />
      </div>
    </div>
  );
};

export default BudgetOverview;
