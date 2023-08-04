import React, { useState } from "react";
import './Log-reg.css';
import {Navbar} from "../Component/index.js";

const AddLOF = (props) => {
    const [Name, setName] = useState('');
    const [Serving, setServing] = useState('');
    const [Expiry,setExpiry]= useState('');
    const [Image, setImage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <>
         
      <div className="App">
      <Navbar />
            <div className="auth-form-container">
                <h2>Add Raw Food</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="Name">Name</label>
                    <input value={Name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" id="Name" name="Name" />
                    <label htmlFor="Serving">Serving</label>
                    <input value={Serving} onChange={(e) => setServing(e.target.value)} type="number" placeholder="0" id="Serving" name="Serving" />
                    <label htmlFor="Expiry">Expiry in days</label>
                    <input value={Expiry} onChange={(e) => setExpiry(e.target.value)} type="number" placeholder="0" id="Expiry" name="Expiry" />
                    <label htmlFor="Image">Add Image</label>
                    <input value={Image} onChange={(e) => setImage(e.target.value)} type="file" id="Image" name="Image" />
                    <button className="submitbutton" type="submit">Submit</button>
                </form>

            </div>
        </div>
        </>
    );
};

export default AddLOF;