// src/services/pdfService.js
import { generatePDFDocument } from '../utils/pdfUtils';
import { PDFDownloadLink } from '@react-pdf/renderer';

// PDF raporunu oluşturmak ve kullanıcıya sunmak için bir buton render eder
export const generatePDFReport = (income, expenses) => {
  return (
    <PDFDownloadLink document={generatePDFDocument(income, expenses)} fileName="budget_report.pdf">
      {({ loading }) => (loading ? 'Generating PDF...' : 'Download PDF')}
    </PDFDownloadLink>
  );
};
