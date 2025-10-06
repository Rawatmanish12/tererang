import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Deals from "./pages/Deals";
import Categories from "./pages/Categories";

// Products
import Kurti from "./products/Kurti";
import Suit from "./products/Suit";
import Coat from "./products/Coat";
import Sarara from "./products/Sarara";
import Skirt from "./products/Skirt";
//import Offers from "./pages/Offers";

function App() {
  const [showPopup] = useState(false);
  return (
    <Router>
      {/* <Navbar /> */}
      {!showPopup && <Navbar />}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />   {/* ✅ Changed /Home → / */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/contact" element={<Contact />} />

        {/* Auth Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Products */}
        <Route path="/products/Kurti" element={<Kurti />} />
        <Route path="/products/Suit" element={<Suit />} />
        <Route path="/products/Coat" element={<Coat />} />
        <Route path="/products/Sarara" element={<Sarara />} />   {/* ✅ lowercase */}
        <Route path="/products/Skirt" element={<Skirt />} />     {/* ✅ lowercase */}

        {/* Fallback Route */}
        <Route
          path="*"
          element={<h2 style={{ padding: "20px" }}>404 - Page Not Found</h2>}
        />
      </Routes>
    </Router>
  );
}

export default App;
