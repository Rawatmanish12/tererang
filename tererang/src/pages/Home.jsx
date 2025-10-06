// src/pages/Home.jsx
import React from "react";
import Card from "./Card";
import banner from "../components/Banner.png"; // ✅ make sure this path is correct

// Dummy Product Data
const latestProducts = [
  "https://www.libas.in/cdn/shop/files/27190.jpg?v=1756105763",
  "https://www.libas.in/cdn/shop/files/27190.jpg?v=1756105763",
  "https://www.libas.in/cdn/shop/files/27190.jpg?v=1756105763",
  "https://www.libas.in/cdn/shop/files/27190.jpg?v=1756105763",
];

const featuredProducts = [
  "https://www.libas.in/cdn/shop/files/27190.jpg?v=1756105763",
  "https://www.libas.in/cdn/shop/files/27190.jpg?v=1756105763",
  "https://www.libas.in/cdn/shop/files/27190.jpg?v=1756105763",
  "https://www.libas.in/cdn/shop/files/27190.jpg?v=1756105763",
];

const Home = () => {
  return (
    <>
      {/* Banner Section */}
      <div className="w-full h-64 sm:h-80 md:h-[420px] mt-4 overflow-hidden relative">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-full object-cover rounded-xl shadow-lg"
          loading="lazy"
        />
      </div>

      {/* Welcome Text */}
      <div className="text-center mt-8 mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800">
          Welcome to <span className="text-pink-500">Tererang</span>
        </h1>
        <p className="mt-3 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Redefining ethnic fashion with elegance and style ✨ Explore our
          exclusive collections of Kurtis, Shararas, Suits, and more.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto mt-6 px-4 sm:px-6 lg:px-10">
        {/* Latest Products */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 py-3 rounded-lg shadow-lg">
            🌟 Latest Products 🌟
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {latestProducts.map((img, i) => (
              <Card key={i} image={img} />
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-white bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 py-3 rounded-lg shadow-lg">
            ✨ Featured Products ✨
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {featuredProducts.map((img, i) => (
              <Card key={i} image={img} />
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-10 mt-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div>
            <h2 className="text-3xl font-bold text-pink-500 mb-4">Tererang</h2>
            <p className="text-sm leading-relaxed">
              Redefining ethnic fashion with elegance and style. Explore Kurtis,
              Sarees, Suits, Shararas, Skirt Tops & Designer Suits.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="/products/Kurti" className="hover:text-pink-500">Kurtis</a></li>
              <li><a href="/products/Coat" className="hover:text-pink-500">Coats</a></li>
              <li><a href="/products/Suit" className="hover:text-pink-500">Suits</a></li>
              <li><a href="/products/Sarara" className="hover:text-pink-500">Shararas</a></li>
              <li><a href="/products/Skirt" className="hover:text-pink-500">Skirt Tops</a></li>
              <li><a href="/products/DesignerSuit" className="hover:text-pink-500">Designer Suits</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Customer Care</h3>
            <ul className="space-y-2">
              <li><a href="/orders" className="hover:text-pink-500">My Orders</a></li>
              <li><a href="/track" className="hover:text-pink-500">Track Order</a></li>
              <li><a href="/shipping" className="hover:text-pink-500">Shipping & Returns</a></li>
              <li><a href="/faq" className="hover:text-pink-500">FAQ</a></li>
              <li><a href="/help" className="hover:text-pink-500">Help Center</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <p className="text-sm mb-2">📍 D-268, Noida, India</p>
            <p className="text-sm mb-2">📞 +91 8126742827</p>
            <p className="text-sm mb-2">✉️ support@tererang.com</p>
            <p className="text-sm">Mon - Sat: 9:00 AM - 8:00 PM</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © 2025 Tererang. All rights reserved. | Made with ❤️ in India
        </div>
      </footer>
    </>
  );
};

export default Home;
