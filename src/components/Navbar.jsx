import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle, FaSearch } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import logo from "../assets/swiftcart-logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef();

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* SwiftCart Logo */}
        <Link to="/" className="logo">
          <img src={logo} alt="SwiftCart Logo" className="logo-img" />
          <span className="website-name">SwiftCart</span>
        </Link>

        {/* Nav Links */}
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Categories</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/support">Customer Service</Link>
          </li>
        </ul>

        {/* Search Icon with Dropdown */}
        <div className="nav-icons">
          <FaSearch
            size={22}
            className="search-icon"
            onClick={() => setShowSearch(!showSearch)}
          />
          {showSearch && (
            <div className="search-dropdown">
              <input type="text" placeholder="Search for products..." />
              <button>Search</button>
            </div>
          )}
          {/* Cart & Profile Icons */}
          <Link to="/cart" className="cart-icon">
            <FaShoppingCart size={22} />
          </Link>
          <Link to="/login" className="login-link">
            <FaUserPlus size={18} className="login-icon" />
          </Link>
          <Link to="/profile" className="profile-icon">
            <FaUserCircle size={22} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
