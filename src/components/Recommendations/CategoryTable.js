import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CategoryTables = ({ incomeCategories, expenseCategories }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Income Categories Table */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
        <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Income Categories</h3>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="text-left py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400">Category</th>
              <th className="text-left py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400">Amount</th>
            </tr>
          </thead>
          <tbody>
            {incomeCategories.map((cat) => (
              <tr key={cat.category} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="flex items-center py-3 px-4 border-b border-gray-200 dark:border-gray-700">
                  <FontAwesomeIcon icon={cat.icon} style={{ color: cat.color }} className="mr-2" />
                  <span className="text-gray-800 dark:text-gray-200">{cat.category}</span>
                </td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200">
                  ${cat.amount.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Expense Categories Table */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
        <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Expense Categories</h3>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="text-left py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400">Category</th>
              <th className="text-left py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400">Amount</th>
            </tr>
          </thead>
          <tbody>
            {expenseCategories.map((cat) => (
              <tr key={cat.category} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="flex items-center py-3 px-4 border-b border-gray-200 dark:border-gray-700">
                  <FontAwesomeIcon icon={cat.icon} style={{ color: cat.color }} className="mr-2" />
                  <span className="text-gray-800 dark:text-gray-200">{cat.category}</span>
                </td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200">
                  ${cat.amount.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryTables;
