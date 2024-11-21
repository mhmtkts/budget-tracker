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

    // Gelir veya gider tipine göre veriyi Redux store'a ekle
    if (type === 'income') {
      dispatch(addIncome(entry));
    } else {
      dispatch(addExpense(entry));
    }

    // Formu temizle
    setAmount('');
    setCategory('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Income/Expense</h2>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-sm font-medium">Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mt-1 p-2 w-full border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium">Category</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 p-2 w-full border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="type" className="block text-sm font-medium">Type</label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="mt-1 p-2 w-full border rounded"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 p-2 w-full border rounded"
        />
      </div>

      <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">Add</button>
    </form>
  );
};

export default AddIncomeExpenseForm;
