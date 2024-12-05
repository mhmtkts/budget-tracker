import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIncome, addExpense } from "../../redux/slices/budgetSlice";
import { addCategory } from "../../redux/slices/categoriesSlice";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faHome, faShoppingCart, faCar, faHeartbeat, faGraduationCap, faShieldAlt, faFilm, faCog } from '@fortawesome/free-solid-svg-icons';

const AddIncomeExpenseForm = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("income");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [limit, setLimit] = useState("");
  const [isSettingLimit, setIsSettingLimit] = useState(false);

  // İkonları kategorilerle eşleştirme
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

  // Para miktarını formatlayan fonksiyon
  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    if (value) {
      const formattedValue = new Intl.NumberFormat("en-US", {
        style: "decimal",
        maximumFractionDigits: 2,
      }).format(value);
      setAmount(formattedValue);
    } else {
      setAmount("");
    }
  };

  // Kategori limiti ayarlama
  const handleSetCategoryLimit = (e) => {
    e.preventDefault();
    if (category && limit > 0) {
      // Dispatch limit ayarlama işlemi yapılabilir
      dispatch(addCategory({ name: category, limit: parseFloat(limit) }));
      setCategory("");
      setLimit("");
      setIsSettingLimit(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const entry = {
      amount: parseFloat(amount.replace(/[^0-9.-]+/g, "")),
      category,
      description,
      date,
    };

    if (type === "income") {
      dispatch(addIncome(entry));
    } else {
      dispatch(addExpense(entry));
    }

    setAmount("");
    setCategory("");
    setDescription("");
    setDate("");
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
                type="text"
                id="amount"
                value={amount}
                onChange={handleAmountChange}
                className="mt-1 p-3 text-black w-full border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-gray-700 font-medium">
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 p-3 w-full border rounded-md"
                required
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat.name} value={cat.name}>
                    <FontAwesomeIcon icon={cat.icon} className="mr-2" />
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {category === "Other" && (
            <div className="mt-4">
              <label htmlFor="customCategory" className="block text-gray-700 font-medium">
                Custom Category Name
              </label>
              <input
                type="text"
                id="customCategory"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 p-3 w-full border rounded-md"
              />
            </div>
          )}

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

          {isSettingLimit ? (
            <div className="mt-4">
              <label htmlFor="limit" className="block text-gray-700 font-medium">
                Set Category Limit
              </label>
              <input
                type="number"
                id="limit"
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
                className="mt-1 p-3 w-full border rounded-md"
                required
              />
              <button
                type="submit"
                onClick={handleSetCategoryLimit}
                className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 mt-2"
              >
                Set Limit
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setIsSettingLimit(true)}
              className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700 mt-4"
            >
              Set Category Limit
            </button>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 mt-4"
          >
            Add
          </button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddIncomeExpenseForm;
