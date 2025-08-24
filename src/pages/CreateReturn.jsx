import React from "react";
import { Link } from "react-router-dom";


export default function CreateReturn() {
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
      <h1 className="text-2xl font-bold mb-6 text-center">Create a Return</h1>

      {/* Content */}
      <p className="mb-4">
        At <span className="font-semibold">E-mart</span>, your satisfaction is our priority. 
        If you are not completely happy with a product you received, you can easily 
        request a return within the allowed return period.
      </p>

      <h2 className="text-lg font-semibold mb-2">Steps to Create a Return</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li>Log in to your <span className="font-semibold">E-mart account</span>.</li>
        <li>Go to <span className="font-semibold">“My Orders”</span> and select the order you want to return.</li>
        <li>Click on <span className="font-semibold">“Return Item”</span>.</li>
        <li>Choose the reason for return and select your preferred resolution (refund or replacement).</li>
        <li>Submit your request and follow the instructions provided.</li>
      </ol>

      <h2 className="text-lg font-semibold mb-2">Return Policy</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Items must be returned in their original packaging and condition.</li>
        <li>Returns must be requested within the <span className="font-semibold">return window</span> specified for each product.</li>
        <li>Some items (e.g., perishable goods, intimate products) may not be eligible for return.</li>
      </ul>

      <h2 className="text-lg font-semibold mb-2">Refunds</h2>
      <p className="mb-6">
        Refunds will be processed to your original payment method within{" "}
        <span className="font-semibold">5–7 business days</span> after the returned item 
        has been inspected and approved.
      </p>

      <h2 className="text-lg font-semibold mb-2">Need Help?</h2>
      <p>
        If you encounter any issues during the return process, our{" "}
        <span className="font-semibold">customer support team</span> is available to 
        assist you. We’re here to ensure your shopping experience at E-mart is seamless.
      </p>
    </div>
  );
}
