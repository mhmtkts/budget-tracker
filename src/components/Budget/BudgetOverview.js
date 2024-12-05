import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent } from '../ui/card';
import BudgetLimitAlert from './BudgetLimitAlert'; // BudgetLimitAlert bileşenini import et

const BudgetOverview = () => {
  const { income, expenses } = useSelector((state) => state.budget);

  const totalIncome = income.reduce((acc, item) => acc + item.amount, 0).toFixed(2);
  const totalExpenses = expenses.reduce((acc, item) => acc + item.amount, 0).toFixed(2);
  const remainingBudget = (totalIncome - totalExpenses).toFixed(2);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Total Balance */}
      <Card className="p-4 shadow rounded-lg">
        <CardContent>
          <h3 className="text-lg font-semibold mb-2">Total Balance</h3>
          <p className="text-2xl font-bold">${remainingBudget}</p>
          <p className={`text-sm ${remainingBudget < 0 ? 'text-red-500' : 'text-green-500'} mt-1`}>
            {remainingBudget < 0 ? '▼' : '▲'} {remainingBudget < 0 ? 'Over budget' : '+5%'} {/* Örnek oran */}
          </p>
        </CardContent>
      </Card>

      {/* Total Income */}
      <Card className="p-4 shadow rounded-lg">
        <CardContent>
          <h3 className="text-lg font-semibold mb-2">Income</h3>
          <p className="text-2xl font-bold">${totalIncome}</p>
          <p className="text-sm text-red-500 mt-1">▼ -3%</p> {/* Dinamik oran eklenebilir */}
        </CardContent>
      </Card>

      {/* Total Expenses */}
      <Card className="p-4 shadow rounded-lg">
        <CardContent>
          <h3 className="text-lg font-semibold mb-2">Expense</h3>
          <p className="text-2xl font-bold">${totalExpenses}</p>
          <p className="text-sm text-green-500 mt-1">▲ +2%</p> {/* Dinamik oran eklenebilir */}
        </CardContent>
      </Card>

      {/* Budget Limit Alert */}
      <div className="col-span-1 md:col-span-3">
        <BudgetLimitAlert remainingBudget={remainingBudget} />
      </div>
    </div>
  );
};

export default BudgetOverview;
