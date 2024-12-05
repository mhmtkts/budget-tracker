// src/pages/settings.js
import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import DarkModeToggle from '../components/Layout/DarkModeToggle';

const Settings = () => {
  return (
    <div>
     
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Settings</h2>
        <DarkModeToggle />
        <div className="mt-4">
          {/* Diğer ayarlar buraya eklenebilir */}
          <p className="text-sm">Budget limit can be set here in future.</p>
        </div>
      </main>
    </div>
  );
};

export default Settings;
