import React, { useState } from "react";
import './Log-reg.css';

const Register = (props) => {
    const [phonenumber, setphonenumber] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(phonenumber);
    }
    return (
        <>
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="phonenumber">Phone Number</label>
                <input value={phonenumber} onChange={(e) => setphonenumber(e.target.value)}type="number" placeholder="1234567890" id="phonenumber" name="phonenumber" /><label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button className="submitbutton" type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account?  Login here.</button>
    </div>
    </>
    );
};

export default  Register;