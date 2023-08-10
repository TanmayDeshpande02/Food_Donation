import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Home,
  AddLOF,
  AddRawFood,
  Contact,
  Login,
  Register,
  ThankYou,
  Show,
  Donations,
  PageNotFound,
  Pleaselogin
} from "./Pages/index.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        {/* <Route element={<RequiredAuth/>}/> */}
        <Route path="/" element={<Home />} />
        <Route path="/AddLOF" element={<AddLOF />} />
        {/* <Route path="/AddRawFood" element={<AddRawFood />} /> */}
        <Route path="/Login" element={<Login />} />
        <Route path="/Contact" element={<Contact />} />        
        <Route path="/Register" element={<Register />} />
        <Route path="/ThankYou" element={<ThankYou />} />
        <Route path="/Show" element={ <Show />} />
        <Route path="/Donations" element={ <Donations />} />
        <Route path="/PageNotFound" element={ <PageNotFound />} />
        <Route path="/Pleaselogin" element={ <Pleaselogin />} />
        {/* <Route path="/checkout" element={<Checkout />} /> */}
        {/* <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/product/*" element={<PageNotFound />} /> */}
      </Routes>
    </Provider>
  </BrowserRouter>
);
