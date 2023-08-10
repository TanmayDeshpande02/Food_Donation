import React from 'react';
import './Footer.css';
const Footer = () => {

  const Style = {
    border: "1px solid #ccc",
    padding: "10px",
    textAlign: "center"
  };

  return (
    <footer className="footer">
      <div className="footer-content">
       <p style={Style} >
       The food we throw away is as good as stolen from the poor.
       </p>
      </div>
    </footer>
  );
};
export default Footer;