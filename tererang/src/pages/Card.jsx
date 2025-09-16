import React from "react";

export default function Card({ image,name }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition p-4 flex flex-col items-center text-center">
      
      <img
        src={image}
        alt="Product"
        className="w-full h-[272px] object-cover mb-4 rounded-md"
      />

      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">₹999</p>
      
      <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition">
        Add to Cart
      </button>
    </div>
  );
}
