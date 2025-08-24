import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";






const Navbar = () => {
    const [isOpen, setisOpen]= useState(false);
    const menuOpen = () => setisOpen (!isOpen);
    const closeMenu = () => setisOpen (false);
  return (
    <nav className="bg-blue-600 text-white p-4">

      {/* Right Side - Icons */}
      <div className="flex justify-end gap-4 text-xl">
        <Link to="/search">
        <CiSearch />
        </Link>
        <Link to="/cart">
         <AiOutlineShoppingCart />
         </Link>
         <Link to="/my-emart-account">
         <MdOutlineAccountCircle />
         </Link>
      </div>
      

             {/* Hamburger Button */}
         <div className="md:hidden text-2xl cursor-pointer" onClick={() => setisOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      
     {isOpen && (   
        <div>
        <ul className="space-y-2 mb-4 md-hidden flex flex-col items-start bg-blue text-white py-4 space-y-2">
  <li>
    <Link to="/need-help" className="hover:text-yellow-300" onClick={closeMenu}>
      Need Help
    </Link>
  </li>
  <li>
     <Link to="/my-emart-account" className="hover:text-yellow-300" onClick={closeMenu}>
     My E-mart Account
      </Link>
      </li>
  <li>
    <Link to="/my-emart-account" className="hover:text-yellow-300" onClick={closeMenu}>
   Orders
    </Link>
    </li>
  <li>
    <Link to="/my-emart-account" className="hover:text-yellow-300" onClick={closeMenu}>
   Vouchers
    </Link>
    </li>
  <li>
     <Link to="/my-emart-account" className="hover:text-yellow-300" onClick={closeMenu}>
     Wishlist
     </Link>
     </li>
</ul>


              <hr className="my-3 border-gray-300" />

                {/* Section 2 */}

          <h3 className="font-semibold mb-2 text-gray-700">Our Category</h3>
          <ul className="space-y-2 mb-4">
            <Link to="/Home" onClick={closeMenu}><li>Home</li></Link>
            <Link to="/products" onClick={closeMenu}><li>products</li></Link>
            <Link to="/PhonesTablets" onClick={closeMenu}><li>Phones & Tablets</li></Link>
            <Link to="/Appliances" onClick={closeMenu}><li>Appliances</li></Link>
            <Link to="/Electronics" onClick={closeMenu}><li>Electronics</li></Link>
            <Link to="/Supermarket" onClick={closeMenu}><li>Supermarket</li></Link>
            <Link to="/HealthBeauty" onClick={closeMenu}><li>Health & Beauty</li></Link>
            <Link to="/HomeOffice" onClick={closeMenu}><li>Home & Office</li></Link>
            <Link to="/WomenFashion" onClick={closeMenu}><li>Women Fashion</li></Link>
            <Link to="/MenFashion" onClick={closeMenu}><li>Men Fashion</li></Link>
            <Link to="/Gaming" onClick={closeMenu}><li>Gaming</li></Link>
            <Link to="/BabyProducts" onClick={closeMenu}><li>Baby Products</li></Link>
            <Link to="/Automobile" onClick={closeMenu}><li>Automobile</li></Link>
            <Link to="/SportingGoods" onClick={closeMenu}><li>Sporting Goods</li></Link>
          </ul>

          
          <hr className="my-3 border-gray-300" />

          {/* Section 3 */}
          <h3 className="font-semibold mb-2 text-gray-700">Our Services</h3>
          <ul className="space-y-2">
             <Link to="/my-emart-account" className="hover:text-yellow-300" onClick={closeMenu}>
             <li>Sell on E-mart</li>
             </Link>
            <Link to="/ContactUs" onClick={closeMenu}>
            <li>Contact Us</li>
            </Link>
          </ul>
          </div>
          
           

          
        

         
        )}


            
            


        
     {/* Animated E-mart Logo */}
      <Link
        to="/my-emart-account"
        className="text-3xl font-extrabold text-blue-700 animate-bounce hover:animate-pulse transition duration-300"
      >
        E<span className="text-gray-800">-mart</span>
      </Link>

        <p className="text-sm text-rose-500 mt-1 ml-1">Smart shopping starts here!</p>

         
        


      
    
    </nav>
  )
}



export default Navbar
