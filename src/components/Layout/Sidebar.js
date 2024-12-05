import React from "react";
import { useRouter } from "next/router";
import Image from 'next/image';
import { RiDashboardLine, RiLoginBoxLine, RiUserAddLine, RiPieChartLine, RiSettings4Line } from 'react-icons/ri';
import Logo from './budget-cost-svgrepo-com.svg';

const Sidebar = () => {
  const router = useRouter();

  const menuItems = [
    { name: "Dashboard", path: "/", icon: <RiDashboardLine className="text-xl" /> },
    { name: "Register", path: "/register", icon: <RiUserAddLine className="text-xl" /> },
    { name: "Login", path: "/login", icon: <RiLoginBoxLine className="text-xl" /> },
    { name: "Reports", path: "/reports", icon: <RiPieChartLine className="text-xl" /> },
    { name: "Settings", path: "/settings", icon: <RiSettings4Line className="text-xl" /> },
  ];

  return (
    <div className="bg-white w-60 h-screen flex flex-col border-r border-gray-200">
      <div 
        className="p-6 cursor-pointer"
        onClick={() => router.push('/')}
      >
        <div className="flex items-center gap-4">
          <Image
            src={Logo}
            alt="Personal Budget Logo"
            width={40}
            height={40}
          />
          <h1 className="text-lg font-semibold text-gray-800">
            Personal Budget
          </h1>
        </div>
      </div>
      <ul className="flex-grow">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`px-6 py-3 cursor-pointer flex items-center gap-3
              ${router.pathname === item.path 
                ? "bg-blue-50 text-blue-600 font-medium" 
                : "text-gray-600 hover:bg-gray-50"
              }`}
            onClick={() => router.push(item.path)}
          >
            {item.icon}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;