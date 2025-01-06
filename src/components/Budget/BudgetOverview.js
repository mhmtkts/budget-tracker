import React from "react";
import { useSelector } from "react-redux";
import { Card, CardContent } from "../ui/card";
import BudgetLimitAlert from "./BudgetLimitAlert"; // BudgetLimitAlert bileşenini import et

const BudgetOverview = () => {
  const { income, expenses, categoryLimits } = useSelector(
    (state) => state.budget
  );

  const totalIncome = income
    .reduce((acc, item) => acc + item.amount, 0)
    .toFixed(2);
  const totalExpenses = expenses
    .reduce((acc, item) => acc + item.amount, 0)
    .toFixed(2);
  const remainingBudget = (totalIncome - totalExpenses).toFixed(2);

  // Her kategori için limit kontrolü
  const categoryWarnings = Object.entries(categoryLimits).reduce(
    (acc, [category, limit]) => {
      const totalCategoryExpense = expenses
        .filter((item) => item.category === category)
        .reduce((sum, item) => sum + item.amount, 0);

      const percentageSpent = (totalCategoryExpense / limit) * 100;

      if (percentageSpent >= 80) {
        acc.push({
          category,
          percentageSpent: percentageSpent.toFixed(2),
        });
      }
      return acc;
    },
    []
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {/* Total Balance */}
      <Card className="p-4 shadow rounded-lg bg-white dark:bg-gray-800">
        <CardContent>
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
            Total Balance
          </h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            ${remainingBudget}
          </p>
        </CardContent>
      </Card>

      {/* Total Income */}
      <Card className="p-4 shadow rounded-lg bg-white dark:bg-gray-800">
        <CardContent>
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
            Income
          </h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            ${totalIncome}
          </p>
        </CardContent>
      </Card>

      {/* Total Expenses */}
      <Card className="p-4 shadow rounded-lg bg-white dark:bg-gray-800">
        <CardContent>
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
            Expense
          </h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            ${totalExpenses}
          </p>
        </CardContent>
      </Card>

      {/* Budget Limit Alerts */}
      {categoryWarnings.length > 0 && (
        <div className="col-span-1 md:col-span-3 mt-6">
          <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
            Budget Limit Alerts:
          </h4>
          <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200">
            {categoryWarnings.map((warning, index) => (
              <li key={index}>
                <strong>{warning.category}</strong>: {warning.percentageSpent}%
                of budget used
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
