import React from "react";
import { Link } from "react-router-dom";


export default function AboutUs() {
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
      <h1 className="text-2xl font-bold mb-6 text-center">About Us</h1>

      {/* Content */}
      <p className="mb-4">
        Welcome to <span className="font-semibold">E-mart</span> – your trusted online 
        marketplace designed to make shopping simple, reliable, and affordable.  
        At E-mart, we believe in connecting customers with top-quality products 
        from trusted brands while delivering a seamless shopping experience.
      </p>

      <h2 className="text-lg font-semibold mb-2">Our Mission</h2>
      <p className="mb-4">
        Our mission is to provide a convenient, secure, and enjoyable 
        shopping journey for everyone. We’re dedicated to offering a wide range 
        of products at competitive prices, supported by excellent customer service.
      </p>

      <h2 className="text-lg font-semibold mb-2">What We Offer</h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>A wide variety of high-quality products across multiple categories.</li>
        <li>Fast and reliable delivery to your doorstep or pickup station.</li>
        <li>Flexible payment options including Pay on Delivery, Mobile Transfers, and Vouchers.</li>
        <li>Dedicated customer support to assist with all your shopping needs.</li>
      </ul>

      <h2 className="text-lg font-semibold mb-2">Why Shop With Us?</h2>
      <p className="mb-4">
        We understand that trust is the foundation of every shopping experience.  
        That’s why we partner with reputable vendors, ensure transparent policies,  
        and provide warranties on eligible items. Shopping with E-mart means shopping 
        with confidence.
      </p>

      <h2 className="text-lg font-semibold mb-2">Join the E-mart Community</h2>
      <p>
        At E-mart, you’re more than just a customer—you’re part of our growing 
        community. Whether you’re looking for daily essentials, fashion, gadgets, 
        or home products, we’re here to serve you with excellence.  
      </p>
    </div>
  );
}

