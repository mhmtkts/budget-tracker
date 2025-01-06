// src/components/Layout/Layout.js
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { HiMenu } from "react-icons/hi";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed z-50 top-4 left-4 p-2 rounded-md bg-white dark:bg-gray-800 shadow-lg md:hidden"
      >
        <HiMenu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
      </button>

      {/* Sidebar */}
      <div
        className={`
        fixed left-0 h-full z-40 transition-transform duration-300 ease-in-out
        md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }
      `}
      >
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="md:ml-60 flex flex-col flex-1 transition-all duration-300">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 bg-gray-100 dark:bg-gray-900">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
