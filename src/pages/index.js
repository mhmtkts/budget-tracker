// src/pages/index.js
import Layout from '../components/Layout/Layout';
import AddIncomeExpenseForm from '../components/Budget/AddIncomeExpenseForm';
import BudgetOverview from '../components/Budget/BudgetOverview';
import ExpenseChart from '../components/Charts/ExpenseChart';
import IncomeChart from '../components/Charts/IncomeChart';
import SavingsRecommendations from '../components/Recommendations/SavingsRecommendations';
import FinancialInsights from '../components/Charts/FinancialInsights';
import useBudgetData from '../hooks/useBudgetData';

export default function Home() {
  const { income, expenses } = useBudgetData();

  return (
    <Layout>
      <AddIncomeExpenseForm />
      <FinancialInsights income={income} expenses={expenses} />
      <BudgetOverview />
      <SavingsRecommendations income={income} expenses={expenses} />
    </Layout>
  );
}