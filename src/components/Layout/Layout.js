import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="fixed left-0 h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-60 flex flex-col flex-1">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 bg-gray-100 dark:bg-gray-900">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
