import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addIncome, addExpense } from "../../redux/slices/budgetSlice";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

const AddIncomeExpenseForm = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("income");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(""); // Tarih alanı

  const handleSubmit = (e) => {
    e.preventDefault();
    const entry = { 
      amount: parseFloat(amount), 
      category, 
      description, 
      date // Tarihi dahil ettik
    };

    if (type === "income") {
      dispatch(addIncome(entry));
    } else {
      dispatch(addExpense(entry));
    }

    setAmount("");
    setCategory("");
    setDescription("");
    setDate(""); // Tarihi sıfırla
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Add Income/Expense</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="amount" className="block text-gray-700 font-medium">
                Amount
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-1 p-3 text-black w-full border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-gray-700 font-medium">
                Category
              </label>
              <input
                type="text"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 p-3 w-full border rounded-md"
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="date" className="block text-gray-700 font-medium">
              Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 p-3 w-full border rounded-md"
              required
            />
          </div>

          <div className="mt-4">
            <label htmlFor="type" className="block text-gray-700 font-medium">
              Type
            </label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="mt-1 p-3 w-full border rounded-md"
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>

          <div className="mt-4">
            <label htmlFor="description" className="block text-gray-700 font-medium">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 p-3 w-full border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700"
          >
            Add
          </button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddIncomeExpenseForm;
