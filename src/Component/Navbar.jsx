import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const isLoggedIn = false; // Replace with your authentication logic

  return (
    <nav className="navbar">
      <div className="logo">Food Donation</div>
      <ul className="nav-links">
        <li><a href="home">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="contact">Contact</a></li>
      </ul>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {isLoggedIn ? (
          <a href="/logout" className="nav-link" style={{ marginRight: '2rem' }}>
            Logout
          </a>
        ) : (
          <a href="/login" className="nav-link" style={{ marginRight: '2rem' }}>
            Login / Register
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
