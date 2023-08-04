// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="nav-logo">
          Food Donation
        </a>
        <div>
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/login" className="nav-link">
            Login
          </a>
          <a href="/contact" className="nav-link">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
