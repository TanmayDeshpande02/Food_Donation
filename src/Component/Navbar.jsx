import React from 'react';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Food Donation</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      {/* <div style={{ display: 'flex', alignItems: 'center' }}>
        <a href="/login" className="nav-link" style={{ marginRight: '2rem' }}>
          Login
        </a>
        </div> */}
    </nav>
  );
};
export default Navbar;
