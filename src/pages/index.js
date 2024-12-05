// src/pages/index.js
import AddIncomeExpenseForm from '../components/Budget/AddIncomeExpenseForm';
import BudgetOverview from '../components/Budget/BudgetOverview';
import SavingsRecommendations from '../components/Recommendations/SavingsRecommendations';
import FinancialInsights from '../components/Charts/FinancialInsights';
import useBudgetData from '../hooks/useBudgetData';

export default function Home() {
  const { income, expenses } = useBudgetData();

  return (
    <div>
      <AddIncomeExpenseForm />
      <FinancialInsights income={income} expenses={expenses} />
      <BudgetOverview />
      <SavingsRecommendations income={income} expenses={expenses} />
    </div>
  );
}
