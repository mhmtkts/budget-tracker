import React from "react";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();

  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Register", path: "/register" },
    { name: "Login", path: "/login" },
    { name: "Reports", path: "/reports" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <div className="bg-gray-800 text-white w-64 h-screen flex flex-col">
      <h1 className="text-2xl font-bold p-4">Budget Tracker</h1>
      <ul className="flex-grow">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`p-4 cursor-pointer hover:bg-gray-700 ${
              router.pathname === item.path ? "bg-gray-700" : ""
            }`}
            onClick={() => router.push(item.path)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
