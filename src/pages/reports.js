// src/pages/reports.js
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

// Dinamik olarak yüklenen PDFExportButton bileşeni
const PDFExportButton = dynamic(() => import('../components/Reports/PDFExportButton'), { ssr: false });

const Reports = () => {
  const income = [{ category: 'Salary', amount: 3000 }];
  const expenses = [{ category: 'Food', amount: 500 }, { category: 'Rent', amount: 1000 }];

  return (
    <div>
      
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Reports</h2>

        {/* Suspense ile PDFExportButton'u sarmalıyoruz */}
        <Suspense fallback={<div>Loading PDF Export...</div>}>
          <PDFExportButton income={income} expenses={expenses} />
        </Suspense>
      </main>
     
    </div>
  );
};

export default Reports;
