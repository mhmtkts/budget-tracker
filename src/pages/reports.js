// src/pages/reports.js
import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import IncomeChart from '../components/Charts/IncomeChart';
import ExpenseChart from '../components/Charts/ExpenseChart';
import PDFExportButton from '../components/Reports/PDFExportButton';

const Reports = () => {
  const income = [{ category: 'Salary', amount: 3000 }];
  const expenses = [{ category: 'Food', amount: 500 }, { category: 'Rent', amount: 1000 }];
  
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Reports</h2>
        <IncomeChart income={income} />
        <ExpenseChart expenses={expenses} />
        <PDFExportButton income={income} expenses={expenses} />
      </main>
      <Footer />
    </div>
  );
};

export default Reports;
