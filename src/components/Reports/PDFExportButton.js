import React from 'react';
import dynamic from 'next/dynamic';

// Dinamik import kullanarak PDFDownloadLink'i yalnızca client-side render etmek için
const PDFDownloadLink = dynamic(() => import('@react-pdf/renderer').then(mod => mod.PDFDownloadLink), { ssr: false });
import { generatePDFDocument } from '../../utils/pdfUtils';

const PDFExportButton = ({ income, expenses }) => {
  return (
    <PDFDownloadLink document={generatePDFDocument(income, expenses)} fileName="budget_report.pdf">
      {({ loading }) => (loading ? 'Generating PDF...' : 'Download PDF')}
    </PDFDownloadLink>
  );
};

export default PDFExportButton;
