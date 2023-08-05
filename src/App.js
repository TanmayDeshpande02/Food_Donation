import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import Services from "./Component/Services";
import { Login, Register,Contact, AddRawFood, AddLOF } from './Pages/index';


function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <>
    <Navbar/>
    <Home/>
    <Register/>
    <Login/>
    <Services/>
    <Contact/>
    <AddLOF/>
    <AddRawFood/>
    <Footer/>
    </>
    // <Router>
    //   <div className="App">
    //     <Routes>
          
          
    //       {/* <Route path="/Navbar" element={<Navbar />} />
    //       <Route path="/Home" element={<Home/>} /> */}
    //       {/* <Route path="/login" element={<Login onFormSwitch={toggleForm} />} />
    //       <Route path="/Contact" element={<Contact/>} />
    //       <Route path="/register" element={<Register onFormSwitch={toggleForm} />} />
    //       <Route path="/AddLOF" element={<AddLOF />} />
    //       <Route path="/AddRawFood" element={<AddRawFood />} />
    //       <Route path="/home" element={<Home />} /> */}
    //       {/* <Route path="/Footer" element={ <Footer/>} /> */}
         
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
