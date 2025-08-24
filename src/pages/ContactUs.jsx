import React from "react";
import { FaCommentDots, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="p-6">
      <Link
        to="/need-help"
        className="inline-block mb-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Need Help
      </Link>

      {/* Contact Information */}
      <div className="mb-6">
        <p className="mb-2 text-gray-700">
          If you have inquiries or need assistance, do not hesitate to chat with us.
        </p>
        <p className="mb-4 text-gray-700 font-semibold">Live Chat Hours:</p>
        <p className="mb-4 text-gray-600">
          We are available Monday to Friday (8 am to 6 pm) and weekends (8 am to 5 pm). On Public Holidays, we are available between 9 am and 5 pm.
        </p>
      </div>

      {/* Chat & Call Buttons */}
      <div className="flex flex-col gap-4 mb-6">
      <Link
       to="/livechat"
       className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
       >
       <FaCommentDots /> Chat with us
       </Link>
       </div>


        <div className="flex flex-col gap-4 mb-6">
        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
          <FaPhoneAlt /> Call us
        </button>
      </div>

      {/* Phone Info */}
      <p className="text-gray-700">
        You can also reach us on <span className="font-semibold">123456789</span> from Monday to Friday (8 am to 6 pm) and weekends (8 am to 5 pm). On Public Holidays, we are available between 9 am and 5 pm.
      </p>
    </div>
  );
};

export default ContactUs;
