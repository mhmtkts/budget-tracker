import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CombinedPieChart = ({ income, expenses, selectedMonthData }) => {
  const [showExpenses, setShowExpenses] = useState(true);

  const COLORS = {
    light: ['#4F46E5', '#82ca9d', '#ffc658', '#ff7c7c', '#8884d8'],
    dark: ['#818CF8', '#86efac', '#fcd34d', '#fca5a5', '#a78bfa']
  };

  const formatData = (data, type) => {
    if (!data || !Array.isArray(data)) return [];
    
    const categoryTotals = data.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + item.amount;
      return acc;
    }, {});

    return Object.entries(categoryTotals).map(([category, amount]) => ({
      name: category,
      value: amount
    }));
  };

  const expenseData = formatData(selectedMonthData?.expenses || expenses);
  const incomeData = formatData(selectedMonthData?.income || income);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {showExpenses ? 'Expense' : 'Income'} Breakdown
        </h3>
        <button
          onClick={() => setShowExpenses(!showExpenses)}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded"
        >
          Show {showExpenses ? 'Income' : 'Expense'}
        </button>
      </div>
      
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={showExpenses ? expenseData : incomeData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            labelLine={false}
          >
            {(showExpenses ? expenseData : incomeData).map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={document.documentElement.classList.contains('dark') 
                  ? COLORS.dark[index % COLORS.dark.length]
                  : COLORS.light[index % COLORS.light.length]} 
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => `$${value.toLocaleString()}`}
            labelFormatter={(value) => `${value}`}
            contentStyle={{
              backgroundColor: 'rgb(var(--background))',
              borderColor: 'rgb(var(--border))',
              color: 'rgb(var(--foreground))'
            }}
          />
          <Legend
            verticalAlign="top"
            align="center"
            wrapperStyle={{ paddingTop: 20 }}
            className="dark:text-gray-300"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CombinedPieChart;
