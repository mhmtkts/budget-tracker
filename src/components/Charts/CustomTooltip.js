import React from "react";

const CustomTooltip = ({ active, payload, label, monthlyData }) => {
  if (active && payload && payload.length) {
    const currentMonthData = monthlyData.find(data => data.month === label);
    const currentMonthIndex = currentMonthData.monthIndex;
    const previousMonthData = monthlyData.find(data => data.monthIndex === (currentMonthIndex - 1 + 12) % 12);

    // Gelir değişim yüzdesi hesapla
    const incomeChange = previousMonthData.income !== 0
      ? ((currentMonthData.income - previousMonthData.income) / previousMonthData.income * 100).toFixed(1)
      : 0;

    // Gider değişim yüzdesi hesapla
    const expenseChange = previousMonthData.expense !== 0
      ? ((currentMonthData.expense - previousMonthData.expense) / previousMonthData.expense * 100).toFixed(1)
      : 0;

    return (
      <div className="bg-white p-4 shadow-md rounded border">
        <p className="font-bold">{label}</p>
        <div className="mt-2">
          <p className="text-lg font-semibold">
            ₺{payload[0].value.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}
          </p>
          <p className={`text-sm ${Number(incomeChange) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {Number(incomeChange) >= 0 ? '↑' : '↓'} %{Math.abs(incomeChange)} geçen aya göre
          </p>
        </div>
        <div className="mt-2">
          <p className="text-lg font-semibold">
            ₺{payload[1].value.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}
          </p>
          <p className={`text-sm ${Number(expenseChange) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {Number(expenseChange) >= 0 ? '↑' : '↓'} %{Math.abs(expenseChange)} geçen aya göre
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;