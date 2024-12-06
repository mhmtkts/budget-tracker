import React from 'react';
import { HiSearch, HiBell, HiMoon, HiSun } from 'react-icons/hi';
import PDFExportButton from '../Reports/PDFExportButton';
import useBudgetData from '../../hooks/useBudgetData';
import useDarkMode from '../../hooks/useDarkMode';

const Header = () => {
  const { income, expenses } = useBudgetData();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      {/* Placeholder div to prevent content from going under fixed header */}
      <div className="h-16"></div>
      
      <header className="fixed top-0 left-0 right-0 z-40 bg-white dark:bg-gray-800 shadow-md px-6 py-4 flex justify-between items-center ml-60">
        {/* Sol: Logo veya başlık için boş bırakıldı */}
        <div></div>

        {/* Sağ: Araçlar */}
        <div className="flex items-center gap-6">
          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleDarkMode}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? (
              <HiSun className="w-6 h-6" />
            ) : (
              <HiMoon className="w-6 h-6" />
            )}
          </button>

          {/* Arama */}
          <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <HiSearch className="w-6 h-6" />
          </button>

          {/* Bildirim */}
          <button className="relative text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <HiBell className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full"></span>
          </button>

          {/* Export Butonu */}
          <PDFExportButton 
            income={income} 
            expenses={expenses} 
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
          />
        </div>
      </header>
    </>
  );
};

export default Header;