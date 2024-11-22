import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

const IncomeChart = () => {
  const transactions = useSelector((state) => state.budget.transactions);
  const incomes = transactions.filter((t) => t.type === 'income');

  const monthlyData = incomes.reduce((acc, curr) => {
    const month = format(new Date(curr.date), 'MMM yyyy');
    acc[month] = (acc[month] || 0) + curr.amount;
    return acc;
  }, {});

  const data = Object.entries(monthlyData).map(([month, amount]) => ({
    month,
    amount,
  }));

  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#82ca9d" name="Income" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeChart;