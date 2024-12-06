import React from "react";
import DarkModeToggle from "../components/Layout/DarkModeToggle";

const Settings = () => {
  return (
    <div>
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Settings</h2>
        <DarkModeToggle />
        <div className="mt-4">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Budget limit can be set here in future.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Settings;
