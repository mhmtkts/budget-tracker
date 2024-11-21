// src/utils/pdfUtils.js
import { Document, Page, Text, View } from '@react-pdf/renderer';

export const generatePDFDocument = (income, expenses) => {
  return (
    <Document>
      <Page size="A4">
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>Personal Budget Report</Text>
          <Text style={{ fontSize: 16, marginBottom: 10 }}>Income:</Text>
          {income.map((item, index) => (
            <Text key={index}>
              {item.category}: ${item.amount}
            </Text>
          ))}
          <Text style={{ fontSize: 16, marginBottom: 10 }}>Expenses:</Text>
          {expenses.map((item, index) => (
            <Text key={index}>
              {item.category}: ${item.amount}
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  );
};
