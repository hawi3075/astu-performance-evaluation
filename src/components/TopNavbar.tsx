// components/TopNavbar.tsx

import React from 'react';

const TopNavbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      {/* Logo/Name on the left */}
      <div className="flex items-center">
        {/* Placeholder for the logo from the image */}
        <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
        <div className="text-lg font-bold">Employee Dashboard</div>
      </div>

      {/* Navigation links in the center */}
      <div className="hidden md:flex space-x-8">
        <a href="#" className="text-gray-600 hover:text-blue-500 font-medium">complien</a>
        <a href="#" className="text-gray-600 hover:text-blue-500 font-medium">resulit</a>
        <a href="#" className="text-gray-600 hover:text-blue-500 font-medium">Comment</a>
        <a href="#" className="text-blue-500 font-medium border-b-2 border-blue-500">profile</a>
      </div>

      {/* User profile button/dropdown on the right */}
      <div className="relative">
        <button className="flex items-center space-x-2">
          <span className="text-sm font-medium">61%</span>
          {/* User profile picture placeholder */}
          <div className="w-8 h-8 rounded-full bg-gray-400"></div>
        </button>
        {/* You could add a dropdown menu here */}
      </div>
    </nav>
  );
};

export default TopNavbar;