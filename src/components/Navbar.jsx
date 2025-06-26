import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white-900 text-black p-4">
      <div className="container mx-auto flex items-center">
        <img className="w-10 h-10 mr-4" src="src/assets/logo4.jpg" alt="Logo" />
        <h1 className="text-2xl font-bold">DreamCars</h1>
        <ul className="flex space-x-6 ml-auto">
          <li className="hover:text-blue-500 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <Link to="/login">Login</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">Cars</li>
          <li className="hover:text-blue-500 cursor-pointer"><Link to="/About">About</Link>
          </li>
          <li className="hover:text-blue-500 ">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
