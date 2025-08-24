import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      {/* Main Cart Content */}
      <div className="flex flex-col items-center justify-center flex-grow p-6">
        
        {/* Cart Icon in Circle */}
        <div className="w-28 h-28 flex items-center justify-center bg-gray-200 rounded-full mb-6">
          <FaShoppingCart className="text-4xl text-gray-600" />
        </div>

        {/* Main Text */}
        <h1 className="text-2xl font-bold mb-2">Your cart is empty!</h1>
        <p className="text-gray-600 text-center max-w-md mb-8">
          Browse our categories and discover our best deals!
        </p>

        {/* Start Shopping Button */}
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Start Shopping
        </Link>
      </div>

      {/* Black Footer Bar */}
      <div className="bg-black text-white text-sm py-4 mt-6">
        <div className="flex flex-wrap justify-center gap-6 px-4">
          <span className="cursor-pointer hover:underline">CHAT WITH US</span>
          <span className="cursor-pointer hover:underline">TERMS & CONDITIONS</span>
          <span className="cursor-pointer hover:underline">BECOME A SELLER</span>
          <span className="cursor-pointer hover:underline">DISPUTE RESOLUTION POLICY</span>
          <span className="cursor-pointer hover:underline">CONTACT US</span>
          <span className="cursor-pointer hover:underline">REPORT A PRODUCT</span>
          <span className="cursor-pointer hover:underline">RETURNS & REFUND TIMELINE</span>
          <span className="cursor-pointer hover:underline">RETURN POLICY</span>
          <span className="cursor-pointer hover:underline">PRIVACY POLICY</span>
          <span className="cursor-pointer hover:underline">SHIPPING POLICY</span>
          <span className="cursor-pointer hover:underline">ABOUT US</span>
          <span className="cursor-pointer hover:underline">FAQ</span>
          <span className="cursor-pointer hover:underline">SELLER TERMS & CONDITIONS</span>
          <span className="cursor-pointer hover:underline">SELLER PRIVACY POLICY</span>
          <span className="cursor-pointer hover:underline">SELLER SHIPPING POLICY</span>
          <span className="cursor-pointer hover:underline">SELLER RETURNS & REFUND POLICY</span>
          <span className="cursor-pointer hover:underline">SELLER DISPUTE RESOLUTION POLICY</span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
