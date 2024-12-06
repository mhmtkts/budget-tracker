import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryLimit } from "../../redux/slices/budgetSlice";
import { toast } from "react-toastify";

const SetCategoryLimit = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const [category, setCategory] = useState("");
  const [limit, setLimit] = useState("");

  const handleSetLimit = (e) => {
    e.preventDefault();
    if (category && limit > 0) {
      dispatch(setCategoryLimit({ category, limit: parseFloat(limit) }));
      toast.success(`Set limit of ${limit} for ${category} category.`);

      setCategory("");
      setLimit("");
    } else {
      toast.error("Please enter a valid category and limit.");
    }
  };

  return (
    <div className="mt-4 mb-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow">
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
        Set Category Limit
      </h3>
      <form onSubmit={handleSetLimit}>
        <label
          htmlFor="category"
          className="block text-gray-700 dark:text-gray-300 font-medium"
        >
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 p-3 w-full border rounded-md bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:[&>option]:bg-gray-700"
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.name} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>

        <label
          htmlFor="limit"
          className="block text-gray-700 dark:text-gray-300 font-medium mt-4"
        >
          Limit
        </label>
        <input
          type="number"
          id="limit"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          className="mt-1 p-3 w-full border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          min="0"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 mt-4 dark:bg-blue-700 dark:hover:bg-blue-800"
        >
          Set Limit
        </button>
      </form>
    </div>
  );
};

export default SetCategoryLimit;
