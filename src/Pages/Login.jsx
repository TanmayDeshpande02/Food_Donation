import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Log-reg.css';
import app from "../firebaseConfig"; 
import { Footer } from '../Component/index.js';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Update import

const Login = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const auth = getAuth();

        try {
            // Sign in with email and password
            await signInWithEmailAndPassword(auth, email, pass);

            // Successful login, redirect to home page
            navigate('/home'); // Replace '/home' with your actual home page path
        } catch (error) {
            console.error("Login error:", error.message);
            // Handle login error, such as displaying an error message to the user
        }
    }

    return (
        <>
            <div className="App">
                <div className="auth-form-container">
                    <h1>Login</h1>
                    <form className="login-form" onSubmit={handleSubmit}>
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
                        <div>
                        </div>
                        <button className="submitbutton" type="submit">Log In</button>
                    </form>
                    <p>
                        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>
                            Don't have an account? Register here.
                        </button>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
