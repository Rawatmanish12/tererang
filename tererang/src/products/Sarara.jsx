import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const shararaData = [
  {
    id: 1,
    title: "Royal Blue Sharara Suit",
    description: "Elegant royal blue sharara suit with mirror work and soft fabric.",
    brand: "Tererang",
    oldPrice: "₹5,999",
    newPrice: "₹4,299",
    image: "https://www.lavanyathelabel.com/cdn/shop/files/LBL101KS584_2_700x.jpg?v=1755064787",
    sizes: ["S", "M", "L", "XL"],
    heightOptions: ["Up to 5'3''", "5'4''-5'6''", "5'6'' and above"],
  },
  // add all others...
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = shararaData.find((item) => item.id === parseInt(id));

  if (!product) return <h1 className="text-center mt-20">Product not found</h1>;

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-10 bg-gradient-to-r from-pink-50 to-white min-h-screen">
      <img
        src={product.image}
        alt={product.title}
        className="rounded-2xl shadow-lg w-[400px] h-[500px] object-cover"
      />
      <div className="lg:ml-10 mt-6 lg:mt-0 max-w-lg">
        <h1 className="text-4xl font-bold text-pink-700 mb-4">{product.title}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>

        <div className="mb-4">
          <span className="line-through text-gray-400 mr-3">{product.oldPrice}</span>
          <span className="text-2xl font-semibold text-pink-600">{product.newPrice}</span>
        </div>

        <h3 className="font-semibold mb-2">Select Size:</h3>
        <div className="flex gap-3 mb-4">
          {product.sizes.map((size) => (
            <button
              key={size}
              className="border border-pink-600 text-pink-600 px-4 py-1 rounded-md hover:bg-pink-600 hover:text-white transition"
            >
              {size}
            </button>
          ))}
        </div>

        <h3 className="font-semibold mb-2">Height Range:</h3>
        <div className="flex gap-3 mb-6">
          {product.heightOptions.map((h) => (
            <button
              key={h}
              className="border border-gray-400 text-gray-700 px-4 py-1 rounded-md hover:bg-gray-100 transition"
            >
              {h}
            </button>
          ))}
        </div>

        <Link to={`/product/${product.id}`}>
  <button className="w-full border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white font-medium py-2 rounded-lg transition duration-200">
    Choose Options
  </button>
</Link>

      </div>
    </div>
  );
}
