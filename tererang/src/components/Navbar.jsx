// src/components/Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import tereRang from "./final logo updated.jpg";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gradient-to-r from-pink-200 via-pink-300 to-pink-200 text-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between h-20 items-center">
        
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={tereRang} alt="Logo" className="h-14 w-auto mr-4 drop-shadow-lg" />
          </Link>
        </div>

        {/* Links (desktop) */}
        <ul className="hidden md:flex space-x-10 items-center text-lg font-semibold tracking-wide">
          <li>
            <Link to="/" className="hover:text-pink-700 hover:scale-110 transition transform duration-200">
              Home
            </Link>
          </li>

          {/* Products dropdown */}
          <li ref={dropdownRef} className="relative">
            <button
              onClick={() => setIsDropdownOpen((s) => !s)}
              className="hover:text-pink-700 hover:scale-110 transition transform duration-200 focus:outline-none"
            >
              Products
            </button>

            {isDropdownOpen && (
              <div
                className="absolute left-1/2 transform -translate-x-1/2 mt-4 bg-white rounded-xl shadow-2xl p-6 grid grid-cols-2 gap-6 z-50 w-[500px] border border-pink-200"
                onClick={() => setIsDropdownOpen(false)} // ✅ close on any click inside
              >
                {/* Daily Wear */}
                <div className="bg-gradient-to-r from-pink-100 via-pink-200 to-pink-100 rounded-lg p-4 hover:shadow-lg transition">
                  <h4 className="font-bold mb-3 text-pink-700 text-lg border-b border-pink-300 pb-2">
                    🌸 Daily Wear
                  </h4>
                  <Link to="/products/kurti" className="block py-1 hover:text-pink-600">Kurti</Link>
                  <Link to="/products/Suit" className="block py-1 hover:text-pink-600">Suit</Link>
                  <Link to="/products/Coat" className="block py-1 hover:text-pink-600">Coat</Link>
                </div>

                {/* Party Wear */}
                <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 rounded-lg p-4 hover:shadow-lg transition">
                  <h4 className="font-bold mb-3 text-purple-700 text-lg border-b border-purple-300 pb-2">
                    🎉 Party Wear
                  </h4>
                  <Link to="/products/Sarara" className="block py-1 hover:text-purple-600">Sarara Suits</Link>
                  <Link to="/products/Skilt" className="block py-1 hover:text-purple-600">Skirt Top</Link>
                  <Link to="/products/DesignerSuit" className="block py-1 hover:text-purple-600">Designer Suits</Link>
                </div>
              </div>
            )}
          </li>

          <li>
            <Link to="/about" className="hover:text-pink-700 hover:scale-110 transition transform duration-200">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-pink-700 hover:scale-110 transition transform duration-200">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-5">
          {/* Search */}
          <div className="relative">
            {searchOpen && (
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search products..."
                className="bg-gray-200 border border-blue-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            )}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hover:text-pink-700 transition text-2xl ml-2"
            >
              🔍
            </button>
          </div>

          {/* Cart */}
          <div className="relative">
            <button className="hover:text-pink-700 transition text-2xl">🛒</button>
            <span className="absolute -top-2 -right-3 bg-pink-600 text-white text-xs font-bold rounded-full px-2 shadow-md">
              2
            </span>
          </div>

          {/* Auth */}
          <Link to="/register" className="bg-pink-600 hover:bg-pink-500 text-white px-4 py-2 rounded-full font-medium transition shadow-md">
            Register
          </Link>
          <Link to="/login" className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full font-medium transition shadow-md">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
