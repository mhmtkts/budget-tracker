import React from "react";

const YearFilter = ({ selectedYear, onYearChange }) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

  return (
    <select
      value={selectedYear}
      onChange={(e) => onYearChange(e.target.value)}
      className="p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
    >
      {years.map(year => (
        <option 
          key={year} 
          value={year.toString()}
          className="bg-white dark:bg-gray-700"
        >
          {year === currentYear ? 'This year' : year}
        </option>
      ))}
    </select>
  );
};

export default YearFilter;