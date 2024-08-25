import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-zinc-800 p-6 w-full">
      <nav className="flex justify-center">
        <ul className="flex space-x-12 text-lg font-semibold text-gray-300">
          <li className="bg-gray-200 hover:bg-gray-300 text-black rounded-full px-4 py-2 cursor-pointer"><a href="/home">Home</a></li>
          <li className="bg-gray-200 hover:bg-gray-300 text-black rounded-full px-4 py-2 cursor-pointer">Events</li>
          <li className="bg-gray-200 hover:bg-gray-300 text-black rounded-full px-4 py-2 cursor-pointer"><a href="/aboutus">About Us</a></li>
          <li className="bg-gray-200 hover:bg-gray-300 text-black rounded-full px-4 py-2 cursor-pointer">Login</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;