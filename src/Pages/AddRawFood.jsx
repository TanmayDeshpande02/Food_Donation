import React, { useState } from "react";
import './Log-reg.css';
import { Navbar, Footer } from "../Component/index";

const AddRawFood = (props) => {
    const [Name, setName] = useState('');
    const [Quantity, setQuantity] = useState('');
    const [Image, setImage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <>
            <Navbar />
            <div className="App">
                <div className="auth-form-container">
                    <h2>Add Raw Food</h2>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <label htmlFor="Name">Name</label>
                        <input value={Name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" id="Name" name="Name" />
                        <label htmlFor="Quantity">Quantity</label>
                        <input value={Quantity} onChange={(e) => setQuantity(e.target.value)} type="number" placeholder="0" id="Quantity" name="Quantity" />
                        <label htmlFor="Image">Add Image</label>
                        <input value={Image} onChange={(e) => setImage(e.target.value)} type="file" id="Image" name="Image" />
                        <button className="submitbutton" type="submit">Submit</button>
                    </form>

                </div>
            </div>
            <Footer />
        </>
    );
};
export default AddRawFood;