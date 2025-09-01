// src/pages/Home.jsx
import React from "react";
import "../css/Home.css";
import Card from "./Card";

const Home = () => {
  return (
    <>
      {/* Discount Banner
      <div className="discount-banner">
        <h1>🔥 A70% OFF on ll Products 🔥</h1>
      </div> */}

      {/* Video Banner Slider */}
      <div className="banner-container">
        <div className="banner-slider">
          <video autoPlay muted loop>
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          </video>
          <video autoPlay muted loop>
            <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
          </video>
          <video autoPlay muted loop>
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Products Section */}
      <h2>Featured Products</h2>
      <div className="product-grid">
        <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220YELLOW_1_800x.jpg?v=1755594198" />
        <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220PEACH_1_800x.jpg?v=1755594230" />
        <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220YELLOW_1_800x.jpg?v=1755594198" />
        <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220PEACH_1_800x.jpg?v=1755594230" />
        <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220YELLOW_1_800x.jpg?v=1755594198" />
        <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220PEACH_1_800x.jpg?v=1755594230" />
        <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220YELLOW_1_800x.jpg?v=1755594198" />
        <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220PEACH_1_800x.jpg?v=1755594230" />
        <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220YELLOW_1_800x.jpg?v=1755594198" />
        <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220PEACH_1_800x.jpg?v=1755594230" />
        <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220YELLOW_1_800x.jpg?v=1755594198" />
        <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220PEACH_1_800x.jpg?v=1755594230" />
        <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220YELLOW_1_800x.jpg?v=1755594198" />
        <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220PEACH_1_800x.jpg?v=1755594230" />
        <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220YELLOW_1_800x.jpg?v=1755594198" />
        <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220PEACH_1_800x.jpg?v=1755594230" />
        <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220YELLOW_1_800x.jpg?v=1755594198" />
        <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220PEACH_1_800x.jpg?v=1755594230" />
        <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220YELLOW_1_800x.jpg?v=1755594198" />
        <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220PEACH_1_800x.jpg?v=1755594230" />
        <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220YELLOW_1_800x.jpg?v=1755594198" />
        <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220PEACH_1_800x.jpg?v=1755594230" />
        <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220YELLOW_1_800x.jpg?v=1755594198" />
        <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220PEACH_1_800x.jpg?v=1755594230" />
        <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220YELLOW_1_800x.jpg?v=1755594198" />
        <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220PEACH_1_800x.jpg?v=1755594230" />
        <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220YELLOW_1_800x.jpg?v=1755594198" />
        <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220PEACH_1_800x.jpg?v=1755594230" />
        
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Tererang. All rights reserved.</p>
        {/* Brand Section */}
        <div className="footer-brand">
          <h2>Tererang</h2>
          <p>Redefining ethnic fashion with elegance and style. Discover kurtis, sarees, suits, and more curated for modern women.</p>
        </div>
           {/* Customer Care */}
           <div className="footer-links">
          <h3>Customer Care</h3>
          <ul>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/shipping">Shipping & Returns</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>
        
      </footer>
    </>
  );
};


export default Home;
