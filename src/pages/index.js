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
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main className="container mx-auto p-6 space-y-8">
        <DarkModeToggle />
        
        {/* Bütçe Formu */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <AddIncomeExpenseForm />
        </section>

        {/* Bütçe Özeti */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <BudgetOverview />
        </section>

        {/* Gelir ve Gider Grafikler */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <ExpenseChart expenses={expenses} />
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <IncomeChart income={income} />
          </div>
        </section>

        {/* PDF İndirme ve Tasarruf Önerileri */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <PDFExportButton income={income} expenses={expenses} />
          <SavingsRecommendations income={income} expenses={expenses} />
        </section>

        {/* Sayfa Linkleri */}
        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold">Navigate to Other Pages</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/login">
                <span className="text-blue-400 hover:text-blue-600">Login Page</span>
              </Link>
            </li>
            <li>
              <Link href="/register">
                <span className="text-blue-400 hover:text-blue-600">Register Page</span>
              </Link>
            </li>
            <li>
              <Link href="/settings">
                <span className="text-blue-400 hover:text-blue-600">Settings Page</span>
              </Link>
            </li>
            <li>
              <Link href="/reports">
                <span className="text-blue-400 hover:text-blue-600">Reports Page</span>
              </Link>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
