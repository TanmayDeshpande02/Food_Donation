import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Log-reg.css';
import app from '../firebaseConfig'
import { Footer } from '../Component/index.js';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Update import

const Login = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const auth = getAuth();
    localStorage.setItem('email', email);

    const handleSubmit = async (e) => {
        e.preventDefault();
        

        try {
            await signInWithEmailAndPassword(auth, email, pass);
            navigate('/home'); 
        } catch (error) {
            console.error("Login error:", error.message);
        }
    }

    return (
        <>
            <div className="App Register">
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
