import React from "react";
import Card from "./Card";
import banner from "../components/Banner.png";
const Home = () => {
  return (
    <>
      {/* Video Banner */}
      <div className="w-full h-204 mt-4 md:h-96 overflow-hidden relative">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <h2 className="text-3xl font-semibold mb-12 text-center bg-blue-500 text-white py-4 rounded-md shadow-md">
          Featured Products
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220YELLOW_1_800x.jpg?v=1755594198" />
          <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220PEACH_1_800x.jpg?v=1755594230" />
          <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220YELLOW_1_800x.jpg?v=1755594198" />
          <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220PEACH_1_800x.jpg?v=1755594230" />
          <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220YELLOW_1_800x.jpg?v=1755594198" />
          <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220PEACH_1_800x.jpg?v=1755594230" />
          <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220YELLOW_1_800x.jpg?v=1755594198" />
          <Card image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220PEACH_1_800x.jpg?v=1755594230" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold mb-3">Tererang</h2>
            <p className="text-gray-300">
              Redefining ethnic fashion with elegance and style. Discover kurtis, sarees, suits, and more curated for modern women.
            </p>
          </div>

          {/* Customer Care Links */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Customer Care</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/faq" className="hover:underline">FAQ</a></li>
              <li><a href="/shipping" className="hover:underline">Shipping & Returns</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Footer Bottom */}
          <div className="text-gray-400 text-sm md:text-right flex items-center justify-center md:justify-end">
            © 2025 Tererang. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
