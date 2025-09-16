// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import tereRang from "./final logo updated.jpg";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16">
        
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={tereRang} alt="Logo" className="h-12 w-auto mr-3" />
          </Link>
        </div>

        {/* Links */}
        <ul className="hidden md:flex space-x-6 items-center relative">
          <li>
            <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          </li>

          {/* Products Dropdown */}
          <li 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="hover:text-gray-300 transition focus:outline-none">
              Products ▼
            </button>

            {isDropdownOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-gray-700 rounded-md shadow-lg p-6 grid grid-cols-2 gap-6 z-50 w-[400px]">
                
                <div>
                  <h4 className="font-semibold mb-2">Women</h4>
                  <Link to="/products/kurti" className="block py-1 hover:text-gray-300">Kurti</Link>
                  <Link to="/products/short-kurti" className="block py-1 hover:text-gray-300">Short Kurti</Link>
                  <Link to="/products/saree" className="block py-1 hover:text-gray-300">Saree</Link>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Men</h4>
                  <Link to="/products/shirts" className="block py-1 hover:text-gray-300">Shirts</Link>
                  <Link to="/products/tshirts" className="block py-1 hover:text-gray-300">T-Shirts</Link>
                  <Link to="/products/trousers" className="block py-1 hover:text-gray-300">Trousers</Link>
                </div>

              </div>
            )}
          </li>

          <li>
            <Link to="/about" className="hover:text-gray-300 transition">About Us</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300 transition">Contact Us</Link>
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <button className="hover:text-gray-300 transition text-xl">🔍</button>
          <button className="hover:text-gray-300 transition text-xl">🛒</button>

          <Link to="/register" className="bg-gray-600 hover:bg-gray-500 text-white px-3 py-1 rounded-md transition">
            Register
          </Link>
          <Link to="/login" className="bg-gray-600 hover:bg-gray-500 text-white px-3 py-1 rounded-md transition">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
