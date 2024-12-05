import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import useBudgetData from "../hooks/useBudgetData"; // Gelir ve gider verileri için hook

// Dinamik olarak yüklenen PDFExportButton bileşeni
const PDFExportButton = dynamic(
  () => import("../components/Reports/PDFExportButton"),
  { ssr: false }
);

const Reports = () => {
  const { income, expenses } = useBudgetData();

  return (
    <div>
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6">Reports</h2>

        {/* PDF Export Butonu */}
        <div className="flex justify-end mb-6">
          <Suspense
            fallback={
              <button className="bg-gray-500 text-white px-4 py-2 rounded shadow">
                Loading...
              </button>
            }
          >
            <PDFExportButton income={income} expenses={expenses} />
          </Suspense>
        </div>

        {/* Rapor Özeti */}
        <div className="bg-white shadow-md rounded p-6">
          <h3 className="text-lg font-semibold mb-4">Overview</h3>
          <p className="text-gray-700">Income: ${income.reduce((acc, cur) => acc + cur.amount, 0)}</p>
          <p className="text-gray-700">Expenses: ${expenses.reduce((acc, cur) => acc + cur.amount, 0)}</p>
        </div>
      </main>
    </div>
  );
};

export default Reports;
