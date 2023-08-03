import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import {Login, Register, AddRawFood,AddLOF} from './Pages/index';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">
      {/* {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/>
      } */}
      <AddLOF/>
    </div>
   
  );
}

export default App;
