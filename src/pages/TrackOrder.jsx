import React from "react";
import { Link } from "react-router-dom";




export default function TrackOrder() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-800">
      {/* Logo */}
        <Link
         to="/my-emart-account"
         className="text-3xl font-extrabold text-blue-700 animate-bounce hover:animate-pulse transition duration-300 ml-61"
         >
        E<span className="text-gray-800">-mart</span>
        </Link>
        <br />
        <br />
        <br />

      {/* Heading */}
      <h1 className="text-2xl font-bold mb-6 text-center">Track an Order</h1>

      {/* Content */}
      <p className="mb-4">
        Tracking your order on E-mart is quick and simple. We provide real-time updates so you always 
        know where your package is and when it will arrive.
      </p>

      <h2 className="text-lg font-semibold mb-2">How to Track Your Order</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li>
          Log in to your <span className="font-semibold">E-mart account</span>.
        </li>
        <li>
          Go to the <span className="font-semibold">“My Orders”</span> section from your dashboard.
        </li>
        <li>
          Select the order you want to track. You will see detailed information about your package, 
          including its current status and estimated delivery time.
        </li>
      </ol>

      <p className="mb-4">
        If your order has already been shipped, you may also see a tracking number and a link to the 
        courier’s website for more detailed tracking updates.
      </p>

      <h2 className="text-lg font-semibold mb-2">Need Help?</h2>
      <p>
        If you experience any issues with tracking your order or need more information, please contact 
        our customer support team. We’re here to make sure your shopping experience is smooth and stress-free.
      </p>
    </div>
  );
}
