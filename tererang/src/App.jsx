// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
// You can create these pages later
import Home from "./pages/Home";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Deals from "./pages/Deals";
import Categories from "./pages/Categories";

import Kurti from "./products/Kurti";
import Suit from "./products/Suit";
import Coat from "./products/Coat";
import Sarara from "./products/Sarara";










function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/contact" element={<Contact />} />

        {/* Auth Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/kurti" element={<Kurti />} />
        <Route path="/products/suit" element={<Suit />} />
        <Route path="/products/coat" element={<Coat />} />
        <Route path="/products/Sarara" element={<Sarara />} />

        
        {/* Fallback Route */}
        <Route path="*" elemdent={<h2 style={{ padding: "20px" }}>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
