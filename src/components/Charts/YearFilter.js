import React from "react";

const YearFilter = ({ selectedYear, onYearChange }) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

  return (
    <select
      value={selectedYear}
      onChange={(e) => onYearChange(e.target.value)}
      className="p-2 border rounded"
    >
      {years.map(year => (
        <option key={year} value={year.toString()}>
          {year === currentYear ? 'This year' : year}
        </option>
      ))}
    </select>
  );
};

export default YearFilter;