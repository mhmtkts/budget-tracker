import React from 'react';
import { Card, CardContent } from '../ui/card';

const BudgetLimitAlert = ({ remainingBudget }) => {
  if (remainingBudget >= 0) return null;

  return (
    <Card className="mb-6">
      <CardContent className="bg-red-600 text-white rounded">
        <strong>Warning:</strong> You have exceeded your budget limit!
      </CardContent>
    </Card>
  );
};

export default BudgetLimitAlert;