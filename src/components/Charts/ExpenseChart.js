// src/components/Charts/ExpenseChart.js
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const ExpenseChart = ({ expenses }) => {
  const data = expenses.map((expense) => ({
    name: expense.category,
    value: expense.amount,
  }));

  const COLORS = ['#ff6666', '#ffcc99', '#99ccff', '#66cc66'];

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h3 className="text-xl font-bold mb-4">Expense Breakdown</h3>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={150}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ExpenseChart;
