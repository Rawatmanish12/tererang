// src/pages/Card.jsx
import React, { useState } from "react";

const Card = ({ image }) => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    console.log("Product added to cart:", image);

    // Button color wapas reset ho 1.5 second baad
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-2">
      {/* Image with animation */}
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt="Product"
          className="w-full h-[350px] object-cover transition-transform duration-700 ease-in-out hover:scale-110 cursor-pointer"
        />
      </div>

      {/* Content */}
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800">Beautiful Dress</h2>
        <p className="text-sm text-gray-500">Tererang Brand</p>
        <div className="mt-2">
          <span className="line-through text-gray-400 mr-2">₹1499</span>
          <span className="text-xl text-pink-600 font-bold">₹999</span>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex flex-col gap-2">
          <button
            onClick={handleAddToCart}
            className={`w-full py-2 rounded-lg font-medium transition duration-300 ${
              added
                ? "bg-green-600 text-white"
                : "border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white"
            }`}
          >
            {added ? "✔ Added to Cart" : "Add to Cart"}
          </button>

          
        </div>
      </div>
    </div>
  );
};

export default Card;
