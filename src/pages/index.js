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
import Link from 'next/link';  // Link'i doğru import ettik
import useBudgetData from '../hooks/useBudgetData';  

export default function Home() {
  const { income, expenses, budgetLimit } = useBudgetData();

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
        
        {/* Sayfalara geçiş yapmak için Link bileşenlerini ekliyoruz */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Navigate to Other Pages</h3>
          <ul>
            <li>
              <Link href="/login">
                <span className="text-blue-500">Login Page</span>
              </Link>
            </li>
            <li>
              <Link href="/register">
                <span className="text-blue-500">Register Page</span>
              </Link>
            </li>
            <li>
              <Link href="/settings">
                <span className="text-blue-500">Settings Page</span>
              </Link>
            </li>
            <li>
              <Link href="/reports">
                <span className="text-blue-500">Reports Page</span>
              </Link>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
