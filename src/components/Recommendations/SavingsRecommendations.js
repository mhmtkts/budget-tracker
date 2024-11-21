// src/components/Recommendations/SavingsRecommendations.js
import React, { useEffect, useState } from 'react';

const SavingsRecommendations = ({ income, expenses }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const totalIncome = income.reduce((acc, item) => acc + item.amount, 0);
    const totalExpenses = expenses.reduce((acc, item) => acc + item.amount, 0);

    const savingsPercentage = (totalIncome - totalExpenses) / totalIncome * 100;

    const recs = savingsPercentage > 20
      ? ['Good job! Keep saving.']
      : savingsPercentage > 10
      ? ['Consider cutting back on some expenses.']
      : ['Try to reduce your spending for better savings.'];

    setRecommendations(recs);
  }, [income, expenses]);

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h3 className="text-xl font-bold mb-4">Savings Recommendations</h3>
      <ul>
        {recommendations.map((rec, index) => (
          <li key={index} className="text-sm">{rec}</li>
        ))}
      </ul>
    </div>
  );
};

export default SavingsRecommendations;
