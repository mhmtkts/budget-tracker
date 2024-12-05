import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CategoryTables = ({ incomeCategories, expenseCategories }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Income Categories Table */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Income Categories</h3>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="text-left py-2 px-4 border-b text-gray-600">Category</th>
              <th className="text-left py-2 px-4 border-b text-gray-600">Amount</th>
            </tr>
          </thead>
          <tbody>
            {incomeCategories.map((cat) => (
              <tr key={cat.category} className="hover:bg-gray-100">
                <td className="flex items-center py-3 px-4 border-b">
                  <FontAwesomeIcon icon={cat.icon} style={{ color: cat.color }} className="mr-2" />
                  <span className="text-gray-800">{cat.category}</span>
                </td>
                <td className="py-3 px-4 border-b text-gray-800">${cat.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Expense Categories Table */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Expense Categories</h3>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="text-left py-2 px-4 border-b text-gray-600">Category</th>
              <th className="text-left py-2 px-4 border-b text-gray-600">Amount</th>
            </tr>
          </thead>
          <tbody>
            {expenseCategories.map((cat) => (
              <tr key={cat.category} className="hover:bg-gray-100">
                <td className="flex items-center py-3 px-4 border-b">
                  <FontAwesomeIcon icon={cat.icon} style={{ color: cat.color }} className="mr-2" />
                  <span className="text-gray-800">{cat.category}</span>
                </td>
                <td className="py-3 px-4 border-b text-gray-800">${cat.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryTables;
