import React from "react";

const Sidebar = ({setSidebar}) => {
  return (
    <div className="fixed top-16 left-0 w-64 h-screen bg-white shadow-lg">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold">Menu</h2>
      </div>

      <ul className="p-4 space-y-4">
        <li className="cursor-pointer hover:text-indigo-600">
          Home
        </li>

        <li className="cursor-pointer hover:text-indigo-600">
          Profile
        </li>

        <li className="cursor-pointer hover:text-indigo-600">
          Settings
        </li>

        <li className="cursor-pointer hover:text-indigo-600">
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;