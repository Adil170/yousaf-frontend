import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 w-full z-50"> 
    <nav className="bg-gray-800 p-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="md:hidden flex items-center">
              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="text-white hover:bg-gray-700 px-2 py-1 rounded-md focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-shrink-0">
              <Link to='/'>
              <h1 className=" text-white text-2xl mx-1">yousaf Optical</h1>
              </Link>
            </div>
            
          </div>
          <div className="md:hidden flex items-center">
            {/* Cart Icon */}
            <Link to="/cart" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">
            <AiOutlineShoppingCart className='text-3xl' />
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            {/* Desktop Menu */}
            {/* Add your navigation links here */}
            <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md font-bold">
              Home
            </Link>
            <Link to="/products" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md font-bold">
              Products
            </Link>
            <Link to="/contectus" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md font-bold">
              Contect Us
            </Link>
            <Link to="/cart" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md font-bold">
            <AiOutlineShoppingCart className='text-3xl'/>
            </Link>
            
            {/* Add more links as needed */}
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          {/* Add your mobile menu content here */}
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-white block px-3 py-2 rounded-md hover:bg-gray-700 font-bold">
              Home
            </Link>
            <Link to="/products" className="text-white block px-3 py-2 rounded-md hover:bg-gray-700 font-bold">
              Products
            </Link>
            <Link to="/contectus" className="text-white block px-3 py-2 rounded-md hover:bg-gray-700 font-bold">
              Contect Us
            </Link>
            {/* Add more mobile menu links as needed */}
          </div>
        </div>
      )}
    </nav>
    </div>
  );
}

export default Navbar;
