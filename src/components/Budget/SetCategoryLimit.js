import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../redux/slices/categoriesSlice";

const SetCategoryLimit = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories); // Redux'tan kategorileri al
  const [category, setCategory] = useState("");
  const [limit, setLimit] = useState("");

  const handleSetLimit = (e) => {
    e.preventDefault();
    if (category && limit > 0) {
      // Kategori ve limit bilgisi doğruysa Redux'a ekliyoruz
      dispatch(addCategory({ name: category, limit: parseFloat(limit) }));
      setCategory(""); // Kategoriyi sıfırlıyoruz
      setLimit(""); // Limiti sıfırlıyoruz
    } else {
      alert("Lütfen geçerli bir kategori ve limit girin.");
    }
  };

  return (
    <div className="mt-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">Kategori Limiti Belirle</h3>
      <form onSubmit={handleSetLimit}>
        <label htmlFor="category" className="block text-gray-700 font-medium">
          Kategori
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 p-3 w-full border rounded-md"
          required
        >
          <option value="">Kategori Seç</option>
          {categories.map((cat) => (
            <option key={cat.name} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>

        <label htmlFor="limit" className="block text-gray-700 font-medium mt-4">
          Limit
        </label>
        <input
          type="number"
          id="limit"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          className="mt-1 p-3 w-full border rounded-md"
          min="0"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 mt-4"
        >
          Limiti Belirle
        </button>
      </form>
    </div>
  );
};

export default SetCategoryLimit;
