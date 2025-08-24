import { Link } from "react-router-dom";

export default function PaymentOptions() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        How to pay for your order
      </h1>

      <p className="text-gray-700 mb-4">
        E-mart offers multiple payment options. Pay for the item online (mobile transfer)
        or on delivery by using your card, bank transfer, or USSD via our E-mart platform. 
        You can also pay for your order using a voucher.
      </p>

      <h2 className="font-semibold text-gray-800 mt-4">Option 1: Pay On Delivery</h2>
      <p className="text-gray-700 mb-2">
        You can pay for your orders upon delivery in a variety of ways to accommodate your needs.
        Choose to pay in cash, or opt for a credit/debit card, bank transfer, or Mastercard payment.
      </p>

      <h2 className="font-semibold text-gray-800 mt-4">Option 2: Mobile Transfer</h2>
      <p className="text-gray-700 mb-2">
        You can securely pay for your order on E-mart using Mastercard, Visa, or Verve cards,
        as well as bank transfer, or card payment.
      </p>

      <h2 className="font-semibold text-gray-800 mt-4">Option 4: Mobile Money</h2>
      <p className="text-gray-700 mb-2">
        You can effortlessly pay for your orders using Opay or PalmPay at checkout, 
        ensuring a smooth and worry-free experience.
      </p>

      <h2 className="font-semibold text-gray-800 mt-4">Option 5: Vouchers</h2>
      <p className="text-gray-700 mb-6">
        You can pay for your orders using a voucher code.
      </p>

      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Paying for Your E-mart Order - A Step by Step Guide
      </h2>

      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>Select the item of your choice and proceed to checkout.</li>
        <li>Choose your payment method.</li>
        <li>
          Complete your payment. For payment upon delivery, simply wait for your
          order and choose your preferred payment method.
        </li>
        <li>
          Confirm your payment. Once your payment is complete, you will receive an
          order confirmation email. If you paid online, your payment details will
          also appear on the confirmation page.
        </li>
      </ol>

      <p className="text-gray-700 mb-6">
        If you experience any issues with payment, please contact our support team.
        We are here to help and ensure your shopping experience is smooth.
      </p>

      <h2 className="text-xl font-bold text-gray-800 mb-2">Talk to an agent</h2>
      <Link 
        to="/livechat" 
        className="inline-block mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Live Chat
      </Link>
      <p className="text-gray-700">
        We are available Monday to Friday (8 am to 6 pm) and weekends (8 am to 5 pm). 
        On Public Holidays, we are available between 9am and 5pm.
      </p>

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
