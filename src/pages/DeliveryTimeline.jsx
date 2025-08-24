import React from "react";
import { Link } from "react-router-dom";




export default function DeliveryTimeline() {
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
      <h1 className="text-2xl font-bold mb-4 text-center">TIMELINES:</h1>

      {/* Timelines Info */}
      <h2 className="text-lg font-semibold mb-2">TIMELINES: MONDAY - FRIDAY</h2>
      <p className="mb-4">
        The timelines quoted are business days – Monday to Friday only, and do not include weekends.
      </p>

      {/* Delivery Methods */}
      <h2 className="text-lg font-semibold mb-3">DELIVERY METHODS</h2>
      <ol className="list-decimal pl-6 space-y-3">
        <li>
          <span className="font-semibold">Door Delivery:</span> Delivery time starts from the day you 
          place your order to the day one of our delivery associates makes a first attempt to deliver 
          to you. Delivery will be attempted 2 times over 5 days (7.00 am to 5.30 pm), after which the 
          item will be cancelled.
        </li>
        <li>
          <span className="font-semibold">Pickup Stations:</span> Delivery time starts from the day you 
          place your order to when you receive the first SMS to pick up your order from our pickup 
          station. Ensure you pick up your item within 5 days, otherwise it will be cancelled.
        </li>
      </ol>
    </div>
  );
}
