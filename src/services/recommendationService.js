// src/services/recommendationService.js

// Kullanıcıya tasarruf önerileri sunmak için gelir ve gider verilerini analiz et
export const generateSavingsRecommendations = (income, expenses) => {
    const totalIncome = income.reduce((acc, item) => acc + item.amount, 0);
    const totalExpenses = expenses.reduce((acc, item) => acc + item.amount, 0);
  
    const savingsPercentage = (totalIncome - totalExpenses) / totalIncome * 100;
  
    const recommendations = [];
  
    if (savingsPercentage > 20) {
      recommendations.push('Good job! Keep saving.');
    } else if (savingsPercentage > 10) {
      recommendations.push('Consider cutting back on some expenses.');
    } else {
      recommendations.push('Try to reduce your spending for better savings.');
    }
  
    return recommendations;
  };
  