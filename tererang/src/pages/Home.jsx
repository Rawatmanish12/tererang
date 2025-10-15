import React from "react";
import Card from "./Card";
import banner from "../components/Banner.png";

const Home = () => {
  // Common product data (you can replace later with API)
  const products = [
    {
     
     image:
        "https://www.libas.in/cdn/shop/files/27190.jpg?v=1756105763",
      brand: "Libas",
      title: "Women Kurta with Trousers & Dupatta",
      price: 2799,
      oldPrice: 7999,
      discount: 65,
    },
    {
      image:
      "https://maharanidesigner.com/wp-content/uploads/2020/08/Designer-Suits-For-Girls.jpeg.webp",
      brand: "Anouk",
      title: "Embroidered Straight Kurta Set",
      price: 2499,
      oldPrice: 9999,
      discount: 75,
    },
    {
      image:
"https://ibaadatbyjasmine.com/cdn/shop/files/WhatsAppImage2025-06-06at21.28.19_b8497859_540x.jpg?v=1749272465",
      title: "Printed Cotton Kurta Set",
      price: 1799,
      oldPrice: 5999,
      discount: 70,
    },
    {
      image:
"https://ibaadatbyjasmine.com/cdn/shop/files/WhatsAppImage2025-07-18at16.41.24_54276767_540x.jpg?v=1754128491",
      brand: "Aaghnya",
      title: "Women Printed Kurta Set",
      price: 750,
      oldPrice: 4345,
      discount: 83,
    },
    { image:
      "https://www.libas.in/cdn/shop/files/27190.jpg?v=1756105763",
    brand: "Libas",
    title: "Women Kurta with Trousers & Dupatta",
    price: 2799,
    oldPrice: 7999,
    discount: 65,
  },
  {
    image:
    "https://maharanidesigner.com/wp-content/uploads/2020/08/Designer-Suits-For-Girls.jpeg.webp",
    brand: "Anouk",
    title: "Embroidered Straight Kurta Set",
    price: 2499,
    oldPrice: 9999,
    discount: 75,
  },
  {
    image:
"https://ibaadatbyjasmine.com/cdn/shop/files/WhatsAppImage2025-06-06at21.28.19_b8497859_540x.jpg?v=1749272465",
    title: "Printed Cotton Kurta Set",
    price: 1799,
    oldPrice: 5999,
    discount: 70,
  },
  {
    image:
"https://ibaadatbyjasmine.com/cdn/shop/files/WhatsAppImage2025-07-18at16.41.24_54276767_540x.jpg?v=1754128491",
    brand: "Aaghnya",
    title: "Women Printed Kurta Set",
    price: 750,
    oldPrice: 4345,
    discount: 83,
  },
  ];

  // reusable section component
  const renderSection = (title, gradient) => (
    <section className="mb-16">
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-white py-3 rounded-lg shadow-lg ${gradient}`}
      >
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item, i) => (
          <Card
            key={i}
            image={item.image}
            brand={item.brand}
            title={item.title}
            price={item.price}
            oldPrice={item.oldPrice}
            discount={item.discount}
          />
        ))}
      </div>
    </section>
  );

  return (
    <>
      {/* Banner Section */}
      <div className="w-full h-64 sm:h-80 md:h-[420px] mt-4 overflow-hidden relative">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Welcome Section */}
      <div className="text-center mt-8 mb-12 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Welcome to <span className="text-pink-500">Tererang</span>
        </h1>
        <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
          Redefining ethnic fashion with elegance and style ✨ Explore our
          exclusive collections of Kurtis, Shararas, Suits, and more.
        </p>
      </div>

      {/* Main Product Sections */}
      <div className="max-w-7xl mx-auto px-6">
        {renderSection("🛍️ Latest Collection", "bg-gradient-to-r from-pink-500 to-rose-500")}
        {renderSection("✨ Featured Products", "bg-gradient-to-r from-purple-500 to-indigo-500")}
        {renderSection("🔥 Trending Now", "bg-gradient-to-r from-orange-400 to-red-500")}
        {renderSection("🌸 New Arrivals", "bg-gradient-to-r from-teal-400 to-cyan-500")}
        {renderSection("💥 Best Offers", "bg-gradient-to-r from-green-400 to-emerald-500")}
      </div>
      <footer className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-300 pt-16 pb-10 mt-16">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

    {/* Brand Info */}
    <div>
      <h2 className="text-4xl font-extrabold text-pink-500 mb-4 tracking-wide">Tererang</h2>
      <p className="italic text-lg mb-3 text-pink-200">“Elegance Woven with Love”</p>
      <p className="text-sm leading-relaxed text-gray-400">
        Born from passion and creativity, Tererang reimagines Indian wear with elegance and intention.
        Every piece is crafted with love, bringing beauty that feels personal and rooted.
      </p>
      <div className="flex space-x-4 mt-5">
        <a href="#" className="text-gray-400 hover:text-pink-500 transition">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-pink-500 transition">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-pink-500 transition">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-pink-500 transition">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-xl font-semibold text-white mb-5 border-b-2 border-pink-500 inline-block pb-1">
        Quick Links
      </h3>
      <ul className="space-y-3 text-gray-400">
        <li><a href="/products/Kurti" className="hover:text-pink-400 transition">Products</a></li>
        <li><a href="/Shipping" className="hover:text-pink-400 transition">Shipping Policy</a></li>
        <li><a href="/TermsPage" className="hover:text-pink-400 transition">Terms & Conditions</a></li>
        <li><a href="/returns" className="hover:text-pink-400 transition">Return & Exchange</a></li>
      </ul>
    </div>

    {/* Customer Care */}
    <div>
      <h3 className="text-xl font-semibold text-white mb-5 border-b-2 border-pink-500 inline-block pb-1">
        Customer Care
      </h3>
      <ul className="space-y-3 text-gray-400">
        <li><a href="/orders" className="hover:text-pink-400 transition">My Orders</a></li>
        <li><a href="/OrderTracker" className="hover:text-pink-400 transition">Track Order</a></li>
        <li><a href="/FaqPage" className="hover:text-pink-400 transition">FAQ</a></li>
        <li><a href="/HelpCenterPage" className="hover:text-pink-400 transition">Help Center</a></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h3 className="text-xl font-semibold text-white mb-5 border-b-2 border-pink-500 inline-block pb-1">
        Contact Us
      </h3>
      <ul className="space-y-3 text-gray-400 text-sm">
        <li>📍 D-268, Noida, India</li>
        <li>📞 +91 8126742827</li>
        <li>✉️ support@tererang.com</li>
        <li>🕒 Mon - Sat: 9:00 AM - 8:00 PM</li>
      </ul>
    </div>
  </div>

  {/* Divider */}
  <div className="mt-12 border-t border-gray-700"></div>

  {/* Bottom Bar */}
  <div className="mt-6 text-center text-sm text-gray-500">
    © 2025 <span className="text-pink-400 font-semibold">Tererang</span>. All rights reserved.
    <br />
    <span className="text-gray-400">Made with ❤️ in India</span>
  </div>
</footer>

     
    </>
  );
};

export default Home;
