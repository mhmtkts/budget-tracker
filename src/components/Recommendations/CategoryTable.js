import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategoryTables = ({ incomeCategories, expenseCategories }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Income Categories Table */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-2 sm:p-4 overflow-x-auto">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-white">
          Income Categories
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-2 px-2 sm:px-4 border-b border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400">
                  Category
                </th>
                <th className="text-left py-2 px-2 sm:px-4 border-b border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {incomeCategories.map((cat) => (
                <tr
                  key={cat.category}
                  className="hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <td className="flex items-center py-2 sm:py-3 px-2 sm:px-4 border-b border-gray-200 dark:border-gray-700">
                    <FontAwesomeIcon
                      icon={cat.icon}
                      style={{ color: cat.color }}
                      className="mr-2"
                    />
                    <span className="text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                      {cat.category}
                    </span>
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                    ${cat.amount.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Expense Categories Table */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-2 sm:p-4 overflow-x-auto">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-white">
          Expense Categories
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-2 px-2 sm:px-4 border-b border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400">
                  Category
                </th>
                <th className="text-left py-2 px-2 sm:px-4 border-b border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {expenseCategories.map((cat) => (
                <tr
                  key={cat.category}
                  className="hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <td className="flex items-center py-2 sm:py-3 px-2 sm:px-4 border-b border-gray-200 dark:border-gray-700">
                    <FontAwesomeIcon
                      icon={cat.icon}
                      style={{ color: cat.color }}
                      className="mr-2"
                    />
                    <span className="text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                      {cat.category}
                    </span>
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                    ${cat.amount.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategoryTables;
