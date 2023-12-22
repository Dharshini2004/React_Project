import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter , Routes,Route } from "react-router-dom";
import Overview from "./pages/Overview";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Aboutus from "./pages/Aboutus";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import Seeds from "./pages/Seeds";
import GrowBags from "./pages/GrowBags";
import Pots from "./pages/Pots";
import Navbar from "./components/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Navbar/>
    <Routes>
      
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/reset-password" element={<ForgotPassword/>} />
        <Route path="/" element={<Overview/>} />
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/products" element={<Products/>} />
        <Route path="/products/seeds" element={<Seeds/>} />
        <Route path="/products/growBags" element={<GrowBags/>}/>
        <Route path="/products/pots" element={<Pots/>}/>
        <Route path="/contact" element={<Contact/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
