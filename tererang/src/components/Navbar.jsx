// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import tereRang from "./WhatsApp_Image_2025-08-29_at_12.53.34_PM-removebg-preview.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        {/* <Link to="">Tererang</Link> */}
        <img src={tereRang} alt="ram" className="text" style={{marginLeft: "-30px", width: "108px", height: "140px"}}/>
      </div>

      {/* Main Nav Links */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>

        {/* Products with Mega Dropdown */}
        <li 
          className="dropdown"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <span className="dropdown-link">Products</span>
          
          {isDropdownOpen && (
            <div className="mega-dropdown">
              <div className="dropdown-column">
                <h4>Women</h4>
                <Link to="/products/kurti">Kurti</Link>
                <Link to="/products/short-kurti">Short Kurti</Link>
                <Link to="/products/saree">Saree</Link>
              </div>
              <div className="dropdown-column">
                <h4>Men</h4>
                <Link to="/products/shirts">Shirts</Link>
                <Link to="/products/tshirts">T-Shirts</Link>
                <Link to="/products/trousers">Trousers</Link>
            
              </div>
              {/* <div className="dropdown-column">
                <h4>Kids</h4>
                <Link to="/products/frock">Frock</Link>
                <Link to="/products/kids-suits">Kids Suits</Link>
              </div>
              <div className="dropdown-column">
                <h4>Accessories</h4>
                <Link to="/products/jewellery">Jewellery</Link>
                <Link to="/products/bags">Bags</Link>
                <Link to="/products/shoes">Shoes</Link>
              </div> */}
            </div>
          )}
        </li>

        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

      {/* Right Section */}
      <div className="right-section">
        <div className="icons">
          <span role="img" aria-label="search">🔍</span>
          <span role="img" aria-label="cart">🛒</span>
        </div>
        <div className="auth-buttons">
          <Link to="/register" className="btn register">Register</Link>
          <Link to="/login" className="btn login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
