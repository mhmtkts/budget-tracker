import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const FinancialInsights = ({ income, expenses }) => {
  const data = [
    { month: "January", income: 5000, expense: 3000 },
    { month: "February", income: 7000, expense: 4000 },
    { month: "March", income: 6000, expense: 2000 },
    // Gerçek verilere göre doldurulacak
  ];

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h3 className="text-xl font-bold mb-4">Financial Insights</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="income" fill="#82ca9d" />
          <Bar dataKey="expense" fill="#ff6f61" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinancialInsights;
