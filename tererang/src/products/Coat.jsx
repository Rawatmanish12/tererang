// src/pages/WomensCoat.jsx
import React from "react";

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

              <button className="mt-5 w-full border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white font-medium py-2 rounded-lg transition duration-200">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomensCoat;
