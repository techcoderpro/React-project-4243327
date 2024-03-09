import React, { useState } from 'react';

function Menu() {
  const [showMenu, setShowMenu] = useState(true); // Set initial state to true to show menu by default

  return (
    <div className="lg:w-full bg-transparent mt-4 lg:mt-0 ">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden block text-red-900"
      >
        {showMenu ? 'Close' : 'Menu'}
      </button>

      {/* Menu */}
      {showMenu && (
        <ul className="lg:flex justify-end text-white font-semibold text-xl capitalize leading-[60px] lg:leading-[80px]">
          <li className="hover:bg-[#4B0082] hover:lg:bg-transparent text-center">
            <a href="#home" className="lg:px-4 hover:bg-[#4B0082] py-2 rounded">
              Home
            </a>
          </li>
          <li className="hover:bg-[#4B0082] hover:lg:bg-transparent text-center">
            <a
              href="#services"
              className="lg:px-4 hover:bg-[#4B0082] py-2 rounded"
            >
              Services
            </a>
          </li>
          <li className="hover:bg-[#4B0082] hover:lg:bg-transparent text-center">
            <a
              href="#testimonials"
              className="lg:px-4 hover:bg-[#4B0082] py-2 rounded"
            >
              Testimonials
            </a>
          </li>
          <li className="hover:bg-[#4B0082] hover:lg:bg-transparent text-center">
            <a
              href="#pricing"
              className="lg:px-4 hover:bg-[#4B0082] py-2 rounded"
            >
              Pricing
            </a>
          </li>
          <li className="hover:bg-[#4B0082] hover:lg:bg-transparent text-center">
            <a
              href="#contact"
              className="lg:px-4 hover:bg-[#4B0082] py-2 rounded"
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Menu;
