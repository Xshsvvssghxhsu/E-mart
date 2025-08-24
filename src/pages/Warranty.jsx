import React from "react";
import { Link } from "react-router-dom";


export default function Warranty() {
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
      <h1 className="text-2xl font-bold mb-6 text-center">Warranty</h1>

      {/* Content */}
      <h2 className="text-lg font-semibold mb-2">E-mart Warranty</h2>
      <p className="mb-4">
        E-mart partners with top suppliers and vendors to deliver high-quality, affordable products 
        to its customers. Occasionally, issues may arise with these products. Fortunately, our brands 
        share our commitment to customer satisfaction, demonstrating this through the provision of warranties.
      </p>

      <h2 className="text-lg font-semibold mb-2">What Is a Warranty?</h2>
      <p>
        A warranty is a commitment or guarantee provided by a manufacturer about the condition of 
        their product. It also outlines the terms and conditions under which repairs, refunds, or 
        exchanges will be provided if the product fails to function as intended or described.
      </p>
    </div>
  );
}
