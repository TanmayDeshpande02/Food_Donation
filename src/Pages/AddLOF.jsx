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
  const [Phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem('hasdonated',Phone);

    try {
      const db = getFirestore();
      await addDoc(colRef, {
        Name: Name,
        Serving: Serving,
        Expiry: Expiry,
        Phone:Phone,
        Timestamp: serverTimestamp(),
      });

      // Clear form fields after successful submission
      setName("");
      setServing("");
      setExpiry("");
      setPhone("");
      setTimeout(() => {
        navigate('/ThankYou');
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
            <input required
              value={Name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              id="Name"
              name="Name"
            />
            <label htmlFor="Serving">Serving</label>
            <input required
              value={Serving}
              onChange={(e) => setServing(e.target.value)}
              type="number"
              placeholder="0"
              id="Serving"
              name="Serving"
            />
            <label htmlFor="Expiry">Valid till</label>
            <input required
              value={Expiry}
              onChange={(e) => setExpiry(e.target.value)}
              type='datetime-local'
              placeholder="0"
              id="Expiry"
              name="Expiry"
            />
             <label htmlFor="Expiry" >Contact Number </label>
            <input required
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              placeholder="0"
              id="Phone"
              name="Phone"
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
