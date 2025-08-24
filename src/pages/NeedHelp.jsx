import React from "react";
import { FaComments, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const NeedHelp = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Top Heading */}
      <div className="bg-gray-100 py-6 px-4 border-b border-gray-300">
        <h1 className="text-2xl font-bold text-gray-900">NEED HELP?</h1>
      </div>

      {/* Chat with us Button */}
      <div className="p-4">
        <Link to="/LiveChat" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          <FaComments className="text-lg" />
          Chat with us 
        </Link>
      </div>

      {/* Help Options */}
      <div className="flex flex-col divide-y divide-gray-300">
        {[
         <div className="flex flex-col divide-y divide-gray-300">
         <Link to="/PaymentOptions" className="flex justify-between items-center p-4 hover:bg-gray-50 transition">
         <span className="text-gray-800">Payment Options</span>
         <FaChevronRight className="text-gray-400" />
         </Link>
         </div>,

         <div className="flex flex-col divide-y divide-gray-300">
         <Link to="/DeliveryTimeline" className="flex justify-between items-center p-4 hover:bg-gray-50 transition">
         <span className="text-gray-800">Delivery Timeline</span>
         <FaChevronRight className="text-gray-400" />
         </Link>
         </div>,

         <div className="flex flex-col divide-y divide-gray-300">
         <Link to="/TrackOrder" className="flex justify-between items-center p-4 hover:bg-gray-50 transition">
         <span className="text-gray-800">Track an order</span>
         <FaChevronRight className="text-gray-400" />
         </Link>
         </div>,

         <div className="flex flex-col divide-y divide-gray-300">
         <Link to="/CancelOrder" className="flex justify-between items-center p-4 hover:bg-gray-50 transition">
         <span className="text-gray-800">Cancel an order</span>
         <FaChevronRight className="text-gray-400" />
         </Link>
         </div>,

         <div className="flex flex-col divide-y divide-gray-300">
         <Link to="/CreateReturn" className="flex justify-between items-center p-4 hover:bg-gray-50 transition">
         <span className="text-gray-800">Create a return</span>
         <FaChevronRight className="text-gray-400" />
         </Link>
         </div>,

         <div className="flex flex-col divide-y divide-gray-300">
         <Link to="/Warranty" className="flex justify-between items-center p-4 hover:bg-gray-50 transition">
         <span className="text-gray-800">Warranty</span>
         <FaChevronRight className="text-gray-400" />
         </Link>
         </div>,

         <div className="flex flex-col divide-y divide-gray-300">
         <Link to="/AboutUs" className="flex justify-between items-center p-4 hover:bg-gray-50 transition">
         <span className="text-gray-800">About Us</span>
         <FaChevronRight className="text-gray-400" />
         </Link>
         </div>,

        ].map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50 transition"
          >
            <span className="text-gray-800">{item}</span>
            <FaChevronRight className="text-gray-400" />
          </div>
        ))}
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
};

export default NeedHelp;
