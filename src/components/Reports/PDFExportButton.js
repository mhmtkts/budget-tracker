import React from 'react';
import dynamic from 'next/dynamic';

// Dinamik import kullanarak PDFDownloadLink'i yalnızca client-side render etmek için
const PDFDownloadLink = dynamic(() => import('@react-pdf/renderer').then(mod => mod.PDFDownloadLink), { ssr: false });
import { generatePDFDocument } from '../../utils/pdfUtils';

const PDFExportButton = ({ income, expenses }) => {
  return (
    <PDFDownloadLink document={generatePDFDocument(income, expenses)} fileName="budget_report.pdf">
      {({ loading }) => (
        <button
          className={`${
            loading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'
          } text-white font-semibold px-6 py-3 rounded shadow transition`}
        >
          {loading ? 'Generating PDF...' : 'Download PDF'}
        </button>
      )}
    </PDFDownloadLink>
  );
};

export default PDFExportButton;
