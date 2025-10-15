// src/components/Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import tereRang from "./final logo updated.jpg";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);

  const dropdownRef = useRef(null);
  const loginRef = useRef(null);
  const location = useLocation();

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        setIsLoginMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Auto-close dropdown when route changes
  useEffect(() => {
    setIsDropdownOpen(false);
    setIsLoginMenuOpen(false);
  }, [location]);

  return (
    <nav className="bg-gradient-to-r from-pink-100 via-pink-200 to-pink-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={tereRang}
              alt="Logo"
              className="h-14 w-auto mr-3 drop-shadow-lg"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 items-center font-semibold text-gray-800">
          <li>
            <Link
              to="/"
              className="hover:text-pink-700 hover:scale-105 transition duration-200"
            >
              Home
            </Link>
          </li>

          {/* Products dropdown */}
          <li ref={dropdownRef} className="relative">
            <button
              onClick={() => setIsDropdownOpen((s) => !s)}
              className="hover:text-pink-700 hover:scale-105 transition duration-200"
            >
              Products
            </button>

            {isDropdownOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 bg-white rounded-xl shadow-xl p-5 grid grid-cols-2 gap-6 w-[480px] border border-pink-200 z-50">
                {/* Daily Wear */}
                <div className="p-3 rounded-lg bg-pink-50 hover:shadow-md transition">
                  <h4 className="font-bold text-pink-700 border-b border-pink-300 pb-1 mb-2">
                    🌸 Daily Wear
                  </h4>
                  <Link
                    to="/products/kurti"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block hover:text-pink-600"
                  >
                    Kurti
                  </Link>
                  <Link
                    to="/products/suit"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block hover:text-pink-600"
                  >
                    Suit
                  </Link>
                  <Link
                    to="/products/coat"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block hover:text-pink-600"
                  >
                    Coat
                  </Link>
                </div>

                {/* Party Wear */}
                <div className="p-3 rounded-lg bg-purple-50 hover:shadow-md transition">
                  <h4 className="font-bold text-purple-700 border-b border-purple-300 pb-1 mb-2">
                    🎉 Party Wear
                  </h4>
                  <Link
                    to="/products/sarara"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block hover:text-purple-600"
                  >
                    Sarara Suits
                  </Link>
                  <Link
                    to="/products/skirt"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block hover:text-purple-600"
                  >
                    Skirt
                  </Link>
                  <Link
                    to="/products/designerSuit"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block hover:text-purple-600"
                  >
                    Designer Suits
                  </Link>
                </div>
              </div>
            )}
          </li>

          <li>
            <Link
              to="/TermsPage"
              className="hover:text-pink-700 hover:scale-105 transition duration-200"
            >
              Term's & Condition
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-pink-700 hover:scale-105 transition duration-200"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-4 relative">
          {/* Search Section */}
          <div className="relative flex items-center">
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isSearchOpen ? "w-48 opacity-100" : "w-0 opacity-0"
              }`}
            >
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search products..."
                className="bg-white border border-pink-300 rounded-full px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 w-full"
              />
            </div>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-xl ml-2 hover:text-pink-700 transition"
            >
              🔍
            </button>
          </div>

          {/* Cart */}
          <div className="relative">
            <button className="text-2xl hover:text-pink-700 transition">🛒</button>
            <span className="absolute -top-2 -right-3 bg-pink-600 text-white text-xs font-bold rounded-full px-2 shadow-md">
              2
            </span>
          </div>

          {/* Login dropdown */}
          <div ref={loginRef} className="relative">
            <button
              onClick={() => setIsLoginMenuOpen((s) => !s)}
              className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-1.5 rounded-full font-medium transition"
            >
              Login
            </button>

            {isLoginMenuOpen && (
              <div className="absolute right-0 mt-3 w-60 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 p-5">
                <h4 className="text-lg font-bold text-gray-700 mb-2">Welcome</h4>
                <p className="text-sm text-gray-500 mb-3">
                  Access your account and manage orders
                </p>

                <Link
                  to="/login"
                  onClick={() => setIsLoginMenuOpen(false)}
                  className="block bg-pink-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-pink-500 transition mb-3"
                >
                  LOGIN / SIGNUP
                </Link>

                <hr className="mb-3" />

                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>
                    <Link
                      to="/orders"
                      onClick={() => setIsLoginMenuOpen(false)}
                      className="hover:text-pink-600"
                    >
                      📦 My Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/offers"
                      onClick={() => setIsLoginMenuOpen(false)}
                      className="hover:text-pink-600"
                    >
                      🎁 Offers
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Register */}
          <Link
            to="/register"
            className="bg-pink-600 hover:bg-pink-500 text-white px-4 py-1.5 rounded-full font-medium shadow-md transition"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
