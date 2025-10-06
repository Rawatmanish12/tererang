// src/pages/WomensCoat.jsx
// import React from "react";
import React, { useState } from "react";


// Dummy data for Women's Coats
const coatData = [
  {
    id: 1,
    title: "Classic Beige Coat",
    brand: "Tererang",
    oldPrice: "₹6,999",
    newPrice: "₹4,999",
    image: "https://m.media-amazon.com/images/I/91hVdIG5W5L._UY1100_.jpg",
  },
  {
    id: 2,
    title: "Stylish Black Coat",
    brand: "Tererang",
    oldPrice: "₹7,499",
    newPrice: "₹5,299",
    image: "https://m.media-amazon.com/images/I/91hVdIG5W5L._UY1100_.jpg",
  },
  {
    id: 3,
    title: "Winter Wool Coat",
    brand: "Tererang",
    oldPrice: "₹8,999",
    newPrice: "₹6,499",
    image: "https://m.media-amazon.com/images/I/91hVdIG5W5L._UY1100_.jpg",
  },
  {
    id: 4,
    title: "Trench Coat",
    brand: "Tererang",
    oldPrice: "₹9,499",
    newPrice: "₹6,999",
    image: "https://m.media-amazon.com/images/I/91hVdIG5W5L._UY1100_.jpg",
  },
  {
    id: 5,
    title: "Grey Long Coat",
    brand: "Tererang",
    oldPrice: "₹7,999",
    newPrice: "₹5,799",
    image: "https://m.media-amazon.com/images/I/91hVdIG5W5L._UY1100_.jpg",
  },
  {
    id: 6,
    title: "Double Breasted Coat",
    brand: "Tererang",
    oldPrice: "₹10,499",
    newPrice: "₹7,499",
    image: "https://m.media-amazon.com/images/I/91hVdIG5W5L._UY1100_.jpg",
  },
  {
    id: 7,
    title: "Woolen Overcoat",
    brand: "Tererang",
    oldPrice: "₹11,499",
    newPrice: "₹8,199",
    image: "https://m.media-amazon.com/images/I/91hVdIG5W5L._UY1100_.jpg",
  },
  {
    id: 8,
    title: "Formal Navy Coat",
    brand: "Tererang",
    oldPrice: "₹8,499",
    newPrice: "₹6,299",
    image: "https://m.media-amazon.com/images/I/91hVdIG5W5L._UY1100_.jpg",
  },
  {
    id: 9,
    title: "Camel Winter Coat",
    brand: "Tererang",
    oldPrice: "₹9,999",
    newPrice: "₹7,499",
    image: "https://m.media-amazon.com/images/I/91hVdIG5W5L._UY1100_.jpg",
  },
  {
    id: 10,
    title: "Luxury White Coat",
    brand: "Tererang",
    oldPrice: "₹12,499",
    newPrice: "₹9,299",
    image: "https://m.media-amazon.com/images/I/91hVdIG5W5L._UY1100_.jpg",
  },
  {
    id: 11,
    title: "Luxury White Coat",
    brand: "Tererang",
    oldPrice: "₹12,499",
    newPrice: "₹9,299",
    image: "https://m.media-amazon.com/images/I/91hVdIG5W5L._UY1100_.jpg",
  },
  {
    id: 12,
    title: "Luxury White Coat",
    brand: "Tererang",
    oldPrice: "₹12,499",
    newPrice: "₹9,299",
    image: "https://m.media-amazon.com/images/I/91hVdIG5W5L._UY1100_.jpg",
  },
];

const WomensCoat = () => {
  const [selectedCoat, setSelectedCoat] = useState(null);
const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="bg-gradient-to-r from-pink-50 via-white to-pink-50 min-h-screen py-12 px-6">
      {/* Page Title */}
      <h1 className="text-center text-4xl font-extrabold text-pink-700 mb-12 tracking-wide">
        🧥 Women’s Coat Collection 🧥
      </h1>

      {/* Coats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {coatData.map((coat) => (
          <div
            key={coat.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-2"
          >
            {/* Product Image + Badge */}
            <div className="relative">
              <span className="absolute top-3 left-3 bg-purple-600 text-white px-3 py-1 rounded-md text-xs font-bold shadow-md">
                Trending
              </span>
              <img
                src={coat.image}
                alt={coat.title}
                className="rounded-t-2xl w-full h-[350px] object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="p-5 text-center">
              <h2 className="text-lg font-semibold text-gray-800">
                {coat.title}
              </h2>
              <p className="text-sm text-gray-500">{coat.brand}</p>

              <div className="mt-2">
                <span className="line-through text-gray-400 mr-2">
                  {coat.oldPrice}
                </span>
                <span className="text-xl text-pink-600 font-bold">
                  {coat.newPrice}
                </span>
              </div>

              <button
  onClick={() => {
    setSelectedCoat(coat);
    setShowPopup(true);
  }}
  className="mt-5 w-full border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white font-medium py-2 rounded-lg transition duration-200"
>
  Choose Options
</button>

            </div>
          </div>
        ))}
      </div>
      {/* Product Popup */}
{showPopup && selectedCoat && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl p-8 w-[90%] md:w-[50%] relative shadow-xl">
      
      {/* Close Button */}
      <button
        onClick={() => setShowPopup(false)}
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl"
      >
        ✕
      </button>

      {/* Product Info */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={selectedCoat.image}
          alt={selectedCoat.title}
          className="w-[200px] h-[250px] rounded-xl object-cover"
        />

        <div>
          <h2 className="text-2xl font-bold text-pink-700">{selectedCoat.title}</h2>
          <p className="text-gray-600 font-medium mb-2">{selectedCoat.brand}</p>

          <div className="mb-4">
            <span className="line-through text-gray-400 mr-2">
              {selectedCoat.oldPrice}
            </span>
            <span className="text-2xl text-pink-600 font-bold">
              {selectedCoat.newPrice}
            </span>
          </div>

          {/* Size Options */}
          <div className="flex gap-2 mb-4">
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className="border border-pink-500 text-pink-600 px-3 py-1 rounded-full hover:bg-pink-600 hover:text-white transition"
              >
                {size}
              </button>
            ))}
          </div>

          {/* Buy Now Button */}
          <button className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default WomensCoat;
