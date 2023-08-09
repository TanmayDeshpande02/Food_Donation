import React, { useState } from "react";
import "./Log-reg.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Navbar, Footer } from "../Component/index.js";
import { colRef } from "../firebaseConfig";
import ThankYou from "./ThankYou";
import {
  getFirestore,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const AddLOF = (props) => {
    const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [Serving, setServing] = useState("");
  const [Expiry, setExpiry] = useState("");
  const [Image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const db = getFirestore();
      await addDoc(colRef, {
        Name: Name,
        Serving: Serving,
        Expiry: Expiry,
        Image: Image,
        Timestamp: serverTimestamp(),
      });

      // Clear form fields after successful submission
      setName("");
      setServing("");
      setExpiry("");
      setImage("");
      setTimeout(() => {
        navigate('/home');
    }, 2000);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="App">
        <div className="auth-form-container">
          <h2>Add Left Over Food</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="Name">Name</label>
            <input
              value={Name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              id="Name"
              name="Name"
            />
            <label htmlFor="Serving">Serving</label>
            <input
              value={Serving}
              onChange={(e) => setServing(e.target.value)}
              type="number"
              placeholder="0"
              id="Serving"
              name="Serving"
            />
            <label htmlFor="Expiry">Expiry in days</label>
            <input
              value={Expiry}
              onChange={(e) => setExpiry(e.target.value)}
              type="number"
              placeholder="0"
              id="Expiry"
              name="Expiry"
            />
            <label htmlFor="Image">Add Image</label>
            <input
              value={Image}
              onChange={(e) => setImage(e.target.value)}
              type="file"
              id="Image"
              name="Image"
            />
            <button className="submitbutton" type="submit" to="/ThankYou">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddLOF;
