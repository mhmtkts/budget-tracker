import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { groupDataByMonth } from "../../utils/groupDataByMonth ";
import CustomTooltip from "./CustomTooltip";
import YearFilter from "./YearFilter";
import CombinedPieChart from "./CombinedPieChart";
import SavingsRecommendations from "../Recommendations/SavingsRecommendations"; // SavingsRecommendations'ı dahil ediyoruz

const FinancialInsights = () => {
  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear().toString()
  );
  const [selectedMonthData, setSelectedMonthData] = useState(null);
  const income = useSelector((state) => state.budget.income);
  const expenses = useSelector((state) => state.budget.expenses);

  // Seçilen yıla göre verileri filtrele
  const filteredIncome = income.filter(
    (item) => new Date(item.date).getFullYear().toString() === selectedYear
  );
  const filteredExpenses = expenses.filter(
    (item) => new Date(item.date).getFullYear().toString() === selectedYear
  );

  // Filtrelenmiş verileri aylara göre grupla
  const monthlyData = groupDataByMonth(filteredIncome, filteredExpenses);

  // Yıl değiştiğinde selectedMonthData'yı sıfırlama
  useEffect(() => {
    setSelectedMonthData(null); // Yıl değiştiğinde veriyi sıfırla
  }, [selectedYear]);

  const handleBarClick = (data) => {
    if (data && data.activePayload) {
      const clickedMonth = data.activePayload[0].payload;
      setSelectedMonthData({
        month: clickedMonth.month,
        income: filteredIncome.filter(
          (item) =>
            new Date(item.date).getMonth() ===
            monthlyData.findIndex((m) => m.month === clickedMonth.month)
        ),
        expenses: filteredExpenses.filter(
          (item) =>
            new Date(item.date).getMonth() ===
            monthlyData.findIndex((m) => m.month === clickedMonth.month)
        ),
      });
    }
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setSelectedMonthData(null); // Yıl değiştiğinde selectedMonthData'yı sıfırla
  };

  return (
    <div className="space-y-8">
      {/* Ana Grafik ve Pasta Grafik Bölümü */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Sol taraftaki geniş grafik */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 md:mb-0">
              Financial Insights
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center">
                <div className="mr-2 w-4 h-4 bg-[#4F46E5]"></div>
                <span className="mr-4 text-gray-700 dark:text-gray-300">
                  Income
                </span>
                <div className="mr-2 w-4 h-4 bg-[#EF4444]"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  Expense
                </span>
              </div>
              <YearFilter
                selectedYear={selectedYear}
                onYearChange={handleYearChange}
              />
            </div>
          </div>

          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={monthlyData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              onClick={handleBarClick}
            >
              <CartesianGrid strokeDasharray="3 3" strokeWidth={0.8} />
              <XAxis dataKey="month" strokeWidth={0.8} />
              <YAxis strokeWidth={0.8} />
              <Tooltip content={<CustomTooltip monthlyData={monthlyData} />} />
              <Bar
                dataKey="income"
                fill="#4F46E5"
                className="dark:[&>path]:fill-indigo-400"
              />
              <Bar
                dataKey="expense"
                fill="#EF4444"
                className="dark:[&>path]:fill-red-400"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Sağ taraftaki daha küçük pie chart */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <CombinedPieChart
            income={income}
            expenses={expenses}
            selectedMonthData={selectedMonthData} // Yıl değiştiğinde null gelecek
          />
        </div>
      </div>

      {/* SavingsRecommendations Bileşeni */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mt-6">
        <SavingsRecommendations
          income={filteredIncome} // Filtrelenmiş gelir
          expenses={filteredExpenses} // Filtrelenmiş gider
        />
      </div>
    </div>
  );
};

export default FinancialInsights;
