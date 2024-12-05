import React from 'react';
import Image from 'next/image';
import { HiSearch, HiBell } from 'react-icons/hi'; // İkonlar
import Logo from './budget-cost-svgrepo-com.svg';
import PDFExportButton from '../Reports/PDFExportButton';
import useBudgetData from '../../hooks/useBudgetData';

const Header = () => {
  const { income, expenses } = useBudgetData();

  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Sol: Logo ve Başlık */}
      <div className="flex items-center gap-4">
        {/* Logo */}
        <Image
          src={Logo}
          alt="Personel Budget Logo"
          width={40}
          height={40}
        />
        {/* Başlık */}
        <h1 className="text-lg font-semibold text-gray-700">Personal Budget</h1>
      </div>

      {/* Sağ: Araçlar */}
      <div className="flex items-center gap-6">
        {/* Arama */}
        <button className="text-gray-500 hover:text-gray-700">
          <HiSearch className="w-6 h-6" />
        </button>
        {/* Bildirim */}
        <button className="relative text-gray-500 hover:text-gray-700">
          <HiBell className="w-6 h-6" />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </button>
        {/* Export Butonu */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
          <PDFExportButton income={income} expenses={expenses} />
        </button>
      </div>
    </header>
  );
};

export default Header;
