import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Login, Register, AddRawFood, AddLOF } from './Pages/index';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login onFormSwitch={toggleForm} />} />
          <Route path="/register" element={<Register onFormSwitch={toggleForm} />} />
          <Route path="/AddLOF" element={<AddLOF />} />
          <Route path="/AddRawFood" element={<AddRawFood />} />
          <Route path="/" element={<Login onFormSwitch={toggleForm} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
