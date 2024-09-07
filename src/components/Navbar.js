import React, { useState } from 'react';
import Button from './Button';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-4 sm:px-6 lg:px-10 py-4 sm:py-7">
      <div className="flex justify-between items-center">
        <div>
          <img src={logo} alt="logo" className="w-20 sm:w-28" />
        </div>
        <div className="hidden md:flex gap-4 lg:gap-7">
          <p className="nav-text">About Us</p>
          <p className="nav-text">Our Services</p>
          <p className="nav-text">Contact Us</p>
        </div>
        <div className="hidden md:block">
          <Button text="Book appointment" />
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg> : 
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          }
        </button>
      </div>
      {isOpen && (
        <div className="mt-4 md:hidden">
          <div className="flex flex-col gap-4">
            <p className="nav-text">About Us</p>
            <p className="nav-text">Our Services</p>
            <p className="nav-text">Contact Us</p>
            <Button text="Book appointment" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;