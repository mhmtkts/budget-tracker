import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

const ExpenseChart = ({ expenses }) => {
  const data = expenses.map((expense) => ({
    name: expense.category,
    value: expense.amount,
  }));

  const COLORS = ['#ff6666', '#ffcc99', '#99ccff', '#66cc66'];

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Expense Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  );
};

export default ExpenseChart;
