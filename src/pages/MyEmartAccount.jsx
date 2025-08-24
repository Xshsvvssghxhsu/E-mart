import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { LiaApple } from "react-icons/lia";


function MyEmartAccount() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="flex flex-col items-center p-6 max-w-md mx-auto md:bg-white">
      {/* Logo */}
       <Link
        to="/my-emart-account"
        className="text-3xl font-extrabold text-blue-700 animate-bounce hover:animate-pulse transition duration-300"
      >
        E<span className="text-gray-800">-mart</span>
      </Link>
      {/* Welcome text */}
      <h1 className="text-2xl font-bold mb-1">Welcome to E-mart</h1>
      <p className="text-gray-500 text-sm mb-6">Smart shopping starts here</p>

      {/* Instruction */}
      <p className="text-center text-sm mb-4">
        Type your e-mail or phone number to log in or create an E-mart account.
      </p>

      {/* Input */}
      <input
        type="text"
        placeholder="Email or Mobile Number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border rounded w-full p-2 mb-4 focus:outline-none focus:ring focus:ring-yellow-400"
      />

      {/* Continue Button */}
      <button
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded w-full mb-4"
      >
        Continue
      </button>

      {/* Terms */}
      <p className="text-xs text-center mb-6">
        By continuing you agree to E-mart{' '}
        <Link to="/terms" className="text-blue-500 underline">
          Terms and Conditions
        </Link>
      </p>

      {/* Social Login Buttons */}
      <button className="flex items-center justify-center gap-2 bg-blue-600 text-white text-lg px-4 py-2 rounded-lg hover:bg-blue-700 transition">
      <FaFacebook size={24} />
        
        <span className="ml-2">Login with Facebook</span>
      </button>
      <br />
      <button className="flex items-center justify-center gap-2 w-60 px-3 py-1 border border-black rounded-lg bg-white text-black text-lg hover:bg-gray-100 transition">      
         <FcGoogle size={24} />
        <span className="ml-2">Login with Google</span>
      </button>
      <br />
     <button className="flex items-center justify-center gap-2 w-60 px-3 py-1 border border-black rounded-lg bg-black text-white text-lg hover:bg-gray-100 transition">     
        <LiaApple size={24} />
        <span className="ml-2">Login with Apple</span>
        
      </button>

      {/* Support */}
      <p className="text-sm text-center mb-6">
        For further support, you may visit the Help Center or contact our customer service team.
      </p>

      {/* Footer Logo */}
     <Link
        to="/my-emart-account"
        className="text-3xl font-extrabold text-blue-700 animate-bounce hover:animate-pulse transition duration-300"
      >
        E<span className="text-gray-800">-mart</span>
      </Link>
    </div>
  );
}

export default MyEmartAccount;
