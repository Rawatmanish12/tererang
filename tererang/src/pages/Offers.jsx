import React from "react";
// import { Link } from "react-router-dom";
// import offerImg from "../assets/offer.png"; 

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: "Flat 30% OFF on Kurtis",
      desc: "Get the latest designer kurtis with amazing discounts.",
      code: "KURTI30",
      icon: "🎁",
    },
    {
      id: 2,
      title: "Buy 1 Get 1 Free - Sarees",
      desc: "Exclusive festive offer on sarees. Hurry, limited stock!",
      code: "SAREEBOGO",
      icon: "🛍️",
    },
    {
      id: 3,
      title: "Free Shipping on Orders Above ₹999",
      desc: "Enjoy free delivery for all orders over ₹999.",
      code: "FREESHIP",
      icon: "🚚",
    },
    {
      id: 4,
      title: "Extra 15% OFF on Designer Suits",
      desc: "Look gorgeous in our premium designer suits collection.",
      code: "SUIT15",
      icon: "👗",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-center mb-10 text-pink-600 flex items-center justify-center gap-2">
        🎁 Offers
      </h1>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition transform hover:-translate-y-1 border border-pink-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{offer.icon}</span>
              <h2 className="text-xl font-bold text-gray-800">{offer.title}</h2>
            </div>
            <p className="text-gray-600 mb-4">{offer.desc}</p>
            <p className="font-semibold text-pink-600">
              Use Code: <span className="bg-pink-100 px-2 py-1 rounded">{offer.code}</span>
            </p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          💖 Don’t Miss Out!
        </h2>
        <p className="text-gray-600 mb-6">
          Grab these exclusive offers and upgrade your festive wardrobe today.
        </p>
        <a
          href="/products/Kurti"
          className="bg-pink-600 hover:bg-pink-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
        >
          Shop Now
        </a>
      </div>
    </div>
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
    <div className="bg-white shadow-xl rounded-lg p-6 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        🎉 Avail Upto ₹500 OFF 🎉
      </h2>
      <p className="text-gray-600 mb-4">
        Use Coupon Code: <span className="font-bold">MYNTRA500</span>
      </p>
      <a
        href="/register"
        className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full font-semibold"
      >
        Sign Up Now
      </a>
    </div>
  </div>
  );
};
// // import React from "react";
// // replace with your second image

// const OfferPage = () => {
//   return (
//     <div className="h-screen bg-gradient-to-r from-pink-50 to-yellow-50 flex flex-col justify-center items-center p-6">
//       <img src={offerImg} alt="Offer Details" className="w-72 mb-6 rounded-lg" />
//       <h1 className="text-3xl font-bold text-gray-800 mb-2">Exclusive Offer</h1>
//       <p className="text-lg text-gray-700 mb-4">
//         Get <span className="font-bold">₹500 OFF</span> on your first order.  
//         Use coupon <span className="font-mono bg-yellow-200 px-2">MYNTRA500</span>
//       </p>
//       <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold mb-6">
//         Sign Up Now
//       </button>

//       {/* Extra Features */}
//       <div className="flex space-x-6 text-gray-600">
//         <div>✅ Genuine Products</div>
//         <div>🔄 Easy Exchanges</div>
//         <div>📦 Try & Buy</div>
//       </div>

//       <Link
//         to="/"
//         className="mt-8 text-pink-600 hover:underline font-medium"
//       >
//         ← Back to Home
//       </Link>
//     </div>
//   );
//  };

// export default OfferPage;


export default Offers;
