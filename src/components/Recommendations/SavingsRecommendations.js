import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux"; // Redux store'dan veri çekmek için
import CategoryTables from "./CategoryTable";

const SavingsRecommendations = ({ income, expenses }) => {
  const [incomeCategories, setIncomeCategories] = useState([]);
  const [expenseCategories, setExpenseCategories] = useState([]);

  // Redux'tan kategorileri al
  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    // Gelir ve gider kategorilerini oluştur
    const incomeData = income.map((item) => {
      const categoryInfo = categories.find((cat) => cat.name === item.category);
      return {
        category: item.category,
        amount: item.amount,
        icon: categoryInfo?.icon
      };
    });

    const expenseData = expenses.map((item) => {
      const categoryInfo = categories.find((cat) => cat.name === item.category);
      return {
        category: item.category,
        amount: item.amount,
        icon: categoryInfo?.icon
      };
    });

    setIncomeCategories(incomeData);
    setExpenseCategories(expenseData);
  }, [income, expenses, categories]); // categories bağımlılığı ekleyerek yenileme

  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        Budget Breakdown
      </h2>
      <CategoryTables
        incomeCategories={incomeCategories}
        expenseCategories={expenseCategories}
      />
    </div>
  );
};

export default SavingsRecommendations;
