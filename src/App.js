import React, { useState } from "react";
import './App.css';
import {Login} from './Pages/index';
import {Register} from './Pages/index';
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Contact from "./Pages/Contact";
import Home from "./Component/Home";
import Services from "./Component/Services";
function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <>
    <Navbar />
    <Home/>
    <Services/>

    {/* <Contact/>
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/>
      }
    </div> */}
    <Footer/>
    </>
  );
}

export default App;
