import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIncome, addExpense } from "../../redux/slices/budgetSlice";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faHome,
  faShoppingCart,
  faCar,
  faHeartbeat,
  faGraduationCap,
  faShieldAlt,
  faFilm,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const AddIncomeExpenseForm = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const budgetLimits = useSelector((state) => state.budget.categoryLimits);
  const expenses = useSelector((state) => state.budget.expenses);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("income");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const categoryIcons = {
    Food: faUtensils,
    Rent: faHome,
    Shopping: faShoppingCart,
    Transportation: faCar,
    Healthcare: faHeartbeat,
    Education: faGraduationCap,
    Insurance: faShieldAlt,
    Entertainment: faFilm,
    Utilities: faCog,
    Other: faCog,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const entry = {
      amount: parseFloat(amount),
      category,
      description,
      date,
    };

    if (type === "income") {
      dispatch(addIncome(entry));
      toast.success(`Income of ${amount} added successfully.`);
    } else {
      // Budget check when adding expense
      const categoryLimit = budgetLimits[category];

      if (categoryLimit) {
        // Calculate current total expense for selected category
        const categoryExpenses = expenses
          .filter((exp) => exp.category === category)
          .reduce((total, exp) => total + exp.amount, 0);

        // New total with added expense
        const newTotal = categoryExpenses + parseFloat(amount);

        // Budget limit check
        const limitPercentage = (newTotal / categoryLimit) * 100;

        if (limitPercentage >= 80) {
          toast.warn(
            `Warning! You have used ${limitPercentage.toFixed(1)}% of your "${category}" budget!`,
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            }
          );
        }
      }

      dispatch(addExpense(entry));
      toast.info(`Expense of ${amount} added to "${category}" category.`);
    }

    // Reset form
    setAmount("");
    setCategory("");
    setDescription("");
    setDate("");
  };

  return (
    <Card className="mb-6 mt-6 dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="dark:text-white">Add Income/Expense</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="amount" className="block text-gray-700 dark:text-gray-300 font-medium">
                Amount
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-1 p-3 w-full border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="category" className="block text-gray-700 dark:text-gray-300 font-medium">
                Category
              </label>
              <div className="flex items-center mt-1 p-3 w-full border rounded-md dark:bg-gray-700 dark:border-gray-600">
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="appearance-none bg-transparent flex-1 focus:outline-none dark:text-white dark:[&>option]:bg-gray-700 dark:[&>option]:text-white"
                  required
                >
                  <option value="" className="dark:bg-gray-700 dark:text-white">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat.name} value={cat.name} className="dark:bg-gray-700 dark:text-white">
                      {cat.name}
                    </option>
                  ))}
                </select>
                {category && (
                  <FontAwesomeIcon
                    icon={categoryIcons[category] || faCog}
                    className="ml-2 text-gray-600 dark:text-gray-400"
                  />
                )}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="date" className="block text-gray-700 dark:text-gray-300 font-medium">
              Date
            </label>
            <div 
              className="relative"
              onClick={() => document.getElementById('date').showPicker()}
            >
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1 p-3 w-full border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white cursor-pointer"
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="type" className="block text-gray-700 dark:text-gray-300 font-medium">
              Type
            </label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="mt-1 p-3 w-full border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>

          <div className="mt-4">
            <label htmlFor="description" className="block text-gray-700 dark:text-gray-300 font-medium">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 p-3 w-full border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 mt-4 dark:bg-indigo-700 dark:hover:bg-indigo-800"
          >
            Add
          </button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddIncomeExpenseForm;
