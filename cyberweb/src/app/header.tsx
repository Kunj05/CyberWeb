import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-black backdrop-blur-lg p-4 w-full border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/placeholder.svg?height=50&width=200"
            alt="Galgotias University Logo"
            width={200}
            height={50}
          />
        </div>
        <nav>
          <ul className="flex space-x-9 font-semibold text-gray-800">
            <li className="hover:bg-gray-600 text-white rounded-full px-4 py-2 cursor-pointer transition duration-300 ease-in-out">
              <Link href="/home">Home</Link>
            </li>
            <li className="hover:bg-gray-600 text-white rounded-full px-4 py-2 cursor-pointer transition duration-300 ease-in-out">
              <Link href="/events">Events</Link>
            </li>
            <li className="hover:bg-gray-600 text-white rounded-full px-4 py-2 cursor-pointer transition duration-300 ease-in-out">
              <Link href="/team">Team</Link>
            </li>
            <li className="hover:bg-gray-600 text-white rounded-full px-4 py-2 cursor-pointer transition duration-300 ease-in-out">
              <Link href="/resources">Resources</Link>
            </li>
            <li className="hover:bg-gray-600 text-white rounded-full px-4 py-2 cursor-pointer transition duration-300 ease-in-out">
              <Link href="/contactus">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
