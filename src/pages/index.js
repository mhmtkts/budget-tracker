// src/pages/index.js
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import DarkModeToggle from '../components/Layout/DarkModeToggle';
import AddIncomeExpenseForm from '../components/Budget/AddIncomeExpenseForm';
import BudgetOverview from '../components/Budget/BudgetOverview';
import ExpenseChart from '../components/Charts/ExpenseChart';
import IncomeChart from '../components/Charts/IncomeChart';
import PDFExportButton from '../components/Reports/PDFExportButton';
import SavingsRecommendations from '../components/Recommendations/SavingsRecommendations';

export default function Home() {
  // Örnek veriler, ancak Redux store'dan çekilecek
  const income = [{ category: 'Salary', amount: 3000 }];
  const expenses = [{ category: 'Food', amount: 500 }, { category: 'Rent', amount: 1000 }];
  const budgetLimit = 2000;

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <DarkModeToggle />
        <AddIncomeExpenseForm />
        <BudgetOverview />
        <ExpenseChart expenses={expenses} />
        <IncomeChart income={income} />
        <PDFExportButton income={income} expenses={expenses} />
        <SavingsRecommendations income={income} expenses={expenses} />
      </main>
      <Footer />
    </div>
  );
}
