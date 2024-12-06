import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CombinedPieChart = ({ income, expenses, selectedMonthData }) => {
  const [showExpenses, setShowExpenses] = useState(true);

  const COLORS = ['#4F46E5', '#82ca9d', '#ffc658', '#ff7c7c', '#8884d8'];

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
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">
          {showExpenses ? 'Expense' : 'Income'} Breakdown
        </h3>
        <button
          onClick={() => setShowExpenses(!showExpenses)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
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
            fill="#8884d8"
            labelLine={false} // Etiketlerin çizgiyle bağlanmasını engelle
          >
            {(showExpenses ? expenseData : incomeData).map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => `$${value.toLocaleString()}`} // Tooltipteki değer formatı
            labelFormatter={(value) => `${value}`} // Tooltipte etiketin ismini göster
          />
          <Legend
            verticalAlign="top"
            align="center"
            wrapperStyle={{ paddingTop: 20 }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CombinedPieChart;
