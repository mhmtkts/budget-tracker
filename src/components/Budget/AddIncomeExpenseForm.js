// src/components/Budget/AddIncomeExpenseForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addIncome, addExpense } from '../../redux/slices/budgetSlice';

const AddIncomeExpenseForm = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('income');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const entry = { amount: parseFloat(amount), category, description };

    if (type === 'income') {
      dispatch(addIncome(entry));
    } else {
      dispatch(addExpense(entry));
    }

    setAmount('');
    setCategory('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96 mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Add Income/Expense</h2>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mt-1 p-3 text-black w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 p-3 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="mt-1 p-3 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 p-3 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
      </div>

      <button type="submit" className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600">Add</button>
    </form>
  );
};

export default AddIncomeExpenseForm;
