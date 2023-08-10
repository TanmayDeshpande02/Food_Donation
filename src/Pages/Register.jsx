import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './Log-reg.css';
import app from '../firebaseConfig'
import {
    getAuth,
    createUserWithEmailAndPassword,

  } from 'firebase/auth'

const Register = (props) => {
    const navigate = useNavigate(); // Initialize useNavigate
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const auth = getAuth();
        
        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                console.log('user created:', userCredential.user)
                setRegistrationSuccess(true);
                setTimeout(() => {
                    navigate('/login');
                }, 3000);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Registration error:", errorCode, errorMessage);
            });
    }

    return (
        <>
            <div className="App Register">
                <div className="auth-form-container">
                    <h2>Register</h2>
                    {registrationSuccess ? (
                        <div className="success-message">Registered successfully! Redirecting...</div>
                    ) : (
                        <form className="register-form" onSubmit={handleSubmit}>
                            <label htmlFor="name">Full name</label>
                            <input
                                value={name}
                                name="name"
                                onChange={(e) => setName(e.target.value)}
                                id="name"
                                placeholder="Full Name"
                            />
                            <label htmlFor="email">Email</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="example@example.com"
                                id="email"
                                name="email"
                            />
                            <label htmlFor="password">Password</label>
                            <input
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                                type="password"
                                placeholder="********"
                                id="password"
                                name="password"
                            />
                            <button className="submitbutton" type="submit">Register</button>
                        </form>
                    )}
                    <button className="link-btn" onClick={() => props.onFormSwitch('login')}>
                        Already have an account? Login here.
                    </button>
                </div>
            </div>
        </>
    );
};

export default Register;
