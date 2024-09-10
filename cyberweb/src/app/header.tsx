import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
      <header className="bg-custom-bg p-4 w-full">
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
          <ul className="flex space-x-9 text-0.5lg font-semibold ">
            <li className=" hover:bg-gray-300 text-white rounded-full px-4 py-2 cursor-pointer">
              <Link href="/home">Home</Link>
            </li>
            <li className=" hover:bg-gray-300 text-white rounded-full px-4 py-2 cursor-pointer">
              <Link href="/events">Events</Link>
            </li>
            <li className=" hover:bg-gray-300 text-white rounded-full px-4 py-2 cursor-pointer">
              <Link href="/aboutus">Team</Link>
            </li>
            <li className=" hover:bg-gray-300 text-white rounded-full px-4 py-2 cursor-pointer">
              <Link href="/contactus">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  
  );
};

export default Header;