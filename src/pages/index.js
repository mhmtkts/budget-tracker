import AddIncomeExpenseForm from "../components/Budget/AddIncomeExpenseForm";
import BudgetOverview from "../components/Budget/BudgetOverview";
import FinancialInsights from "../components/Charts/FinancialInsights";
import useBudgetData from "../hooks/useBudgetData";
import SetCategoryLimit from "../components/Budget/SetCategoryLimit";

export default function Home() {
  const { income, expenses } = useBudgetData();

  return (
    <div>
      <AddIncomeExpenseForm />
      <SetCategoryLimit/>
      <FinancialInsights income={income} expenses={expenses} />
      <BudgetOverview />
    </div>
  );
}
