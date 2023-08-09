import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import app from '../firebaseConfig'
import {
  getAuth,
  signOut,
} from "firebase/auth";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    if (localStorage.getItem("email")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("email");
    setIsLoggedIn(false);

    signOut(auth)
      .then(() => {
        console.log("user signed out");
        setTimeout(() => {
          alert("Successfully logged out");
          navigate("/home"); 
        }, 500);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <nav className="navbar">
      <div className="logo">Food Donation</div>
      <ul className="nav-links">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div style={{ display: "flex", alignItems: "center" }}>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="nav-link"
            style={{ marginRight: "2rem" }}
          >
            Logout
          </button>
        ) : (
          <a href="/login" className="nav-link" style={{ marginRight: "2rem" }}>
            Login / Register
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
