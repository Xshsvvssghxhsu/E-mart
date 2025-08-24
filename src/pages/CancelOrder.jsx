import React from "react";
import { Link } from "react-router-dom";



export default function CancelOrder() {
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
      <h1 className="text-2xl font-bold mb-6 text-center">Cancel an Order</h1>

      {/* Content */}
      <p className="mb-4">
        At E-mart, we understand that sometimes you may need to cancel an order. We’ve made the process 
        simple and hassle-free for our customers.
      </p>

      <h2 className="text-lg font-semibold mb-2">How to Cancel Your Order</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li>
          Log in to your <span className="font-semibold">E-mart account</span>.
        </li>
        <li>
          Navigate to the <span className="font-semibold">“My Orders”</span> section.
        </li>
        <li>
          Select the order you wish to cancel and click on the{" "}
          <span className="font-semibold">“Cancel Order”</span> button.
        </li>
      </ol>

      <h2 className="text-lg font-semibold mb-2">Important Notes</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          Orders can only be cancelled <span className="font-semibold">before they are shipped</span>. 
          If your order has already been shipped, you may request a return after delivery.
        </li>
        <li>
          Refunds (if applicable) will be processed back to your original payment method within{" "}
          <span className="font-semibold">5–7 business days</span>.
        </li>
        <li>
          For “Pay on Delivery” orders, simply refuse the package upon delivery if you no longer wish 
          to keep the order.
        </li>
      </ul>

      <h2 className="text-lg font-semibold mb-2">Need Assistance?</h2>
      <p>
        If you experience any issues while cancelling your order, please reach out to our{" "}
        <span className="font-semibold">customer support team</span>. We are here to help make sure your 
        E-mart experience remains smooth and stress-free.
      </p>
    </div>
  );
}
