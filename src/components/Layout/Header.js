// src/components/Layout/Header.js
import React from 'react';
import DarkModeToggle from './DarkModeToggle'; // Dark mode butonu

const Header = () => {
  return (
    <header className="bg-indigo-600 text-white p-5 shadow-md flex justify-between items-center">
      <h1 className="text-3xl font-semibold">Personal Budget</h1>
      <DarkModeToggle />
    </header>
  );
};

export default Header;
