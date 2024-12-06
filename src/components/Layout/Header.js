import React from 'react';
import { HiSearch, HiBell } from 'react-icons/hi';
import PDFExportButton from '../Reports/PDFExportButton';
import useBudgetData from '../../hooks/useBudgetData';

const Header = () => {
  const { income, expenses } = useBudgetData();

  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-end items-center">
      {/* Sağ: Araçlar */}
      <div className="flex items-center gap-6">
        {/* Arama */}
        <button className="text-gray-500 hover:text-gray-700">
          <HiSearch className="w-6 h-6" />
        </button>
        {/* Bildirim */}
        <button className="relative text-gray-500 hover:text-gray-700">
          <HiBell className="w-6 h-6" />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full"></span>
        </button>
        {/* Export Butonu */}
        <button>
          <PDFExportButton income={income} expenses={expenses} />
        </button>
      </div>
    </header>
  );
};

export default Header;