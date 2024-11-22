import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { format } from 'date-fns';

export const generatePDF = (transactions, chartRefs) => {
  const doc = new jsPDF();
  
  // Add title
  doc.setFontSize(20);
  doc.text('Financial Report', 15, 15);
  
  // Add date
  doc.setFontSize(12);
  doc.text(`Generated on: ${format(new Date(), 'PPP')}`, 15, 25);
  
  // Add transactions table
  const tableData = transactions.map(t => [
    format(new Date(t.date), 'PP'),
    t.type,
    t.category,
    t.description,
    `$${t.amount.toFixed(2)}`
  ]);
  
  doc.autoTable({
    startY: 35,
    head: [['Date', 'Type', 'Category', 'Description', 'Amount']],
    body: tableData,
  });
  
  // Add summary
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
    
  const totalExpense = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);
    
  doc.text(`Total Income: $${totalIncome.toFixed(2)}`, 15, doc.lastAutoTable.finalY + 15);
  doc.text(`Total Expenses: $${totalExpense.toFixed(2)}`, 15, doc.lastAutoTable.finalY + 25);
  doc.text(`Net Balance: $${(totalIncome - totalExpense).toFixed(2)}`, 15, doc.lastAutoTable.finalY + 35);
  
  return doc;
};