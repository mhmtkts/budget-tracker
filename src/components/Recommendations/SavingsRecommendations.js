import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'; // Redux store'dan veri çekmek için
import CategoryTables from './CategoryTable';

const SavingsRecommendations = ({ income, expenses }) => {
  const [incomeCategories, setIncomeCategories] = useState([]);
  const [expenseCategories, setExpenseCategories] = useState([]);
  
  // Redux'tan kategorileri al
  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    // Gelir ve gider kategorilerini oluştur
    const incomeData = income.map((item) => {
      // Kategorinin ikonunu ve rengini bul
      const categoryInfo = categories.find((cat) => cat.name === item.category);
      return {
        category: item.category,
        amount: item.amount,
        icon: categoryInfo?.icon,
        color: categoryInfo?.color,
      };
    });

    const expenseData = expenses.map((item) => {
      // Kategorinin ikonunu ve rengini bul
      const categoryInfo = categories.find((cat) => cat.name === item.category);
      return {
        category: item.category,
        amount: item.amount,
        icon: categoryInfo?.icon,
        color: categoryInfo?.color,
      };
    });

    setIncomeCategories(incomeData);
    setExpenseCategories(expenseData);
  }, [income, expenses, categories]); // categories bağımlılığı ekleyerek yenileme

  return (
    <div className="bg-gray-50 p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Budget Breakdown</h2>
      <CategoryTables
        incomeCategories={incomeCategories}
        expenseCategories={expenseCategories}
      />
    </div>
  );
};

export default SavingsRecommendations;
