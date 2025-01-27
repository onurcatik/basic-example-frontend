import React, { useState } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  
    return (
      <header className="bg-white shadow">
        <nav className="bg-blue-400 flex justify-between items-center p-6">
          <div className="text-white text-xl font-bold">Logo</div>
          <ul className="hidden md:flex space-x-4">
            <li className="cursor-pointer hover:text-yellow-400 text-white">Home</li>
            <li className="cursor-pointer hover:text-yellow-400 text-white">About</li>
            <li className="cursor-pointer hover:text-yellow-400 text-white">Service</li>
            <li className="cursor-pointer hover:text-yellow-400 text-white">Contact</li>
          </ul>
          <div className="md:hidden">
            <button
              id="menu-toggle"
              className="text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </nav>
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden bg-blue-400 text-white text-right">
            <ul className="space-y-4 py-4">
              <li className="cursor-pointer hover:text-yellow-400 pr-8">Home</li>
              <li className="cursor-pointer hover:text-yellow-400 pr-8">About</li>
              <li className="cursor-pointer hover:text-yellow-400 pr-8">Service</li>
              <li className="cursor-pointer hover:text-yellow-400 pr-8">Contact</li>
            </ul>
          </div>
        )}
      </header>
    );
  };

  export default Navbar;