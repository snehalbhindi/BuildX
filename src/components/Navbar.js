import React from 'react';
import logo from '../assets/Layer 48 1.svg'; // Adjust path as needed
import icon1 from '../assets/telephone-call (1).svg';
import icon2 from '../assets/email.svg';

const Navbar = () => {
  return (
    <nav className="bg-gray shadow-md">
  <div className="container mx-auto flex justify-between items-center p-4 bg-gray-100 shadow-md cursor-pointer">
    <h3 className="text-gray-700 font-medium">Have any question?</h3>
    <ul className="hidden md:flex space-x-8">
      <li className="flex items-center space-x-2 text-gray-700 hover:text-yellow-500 font-semibold">
        <img src={icon1} alt="Email Icon" className="w-5 h-5" />
        <span>contact@mail.com</span>
      </li>
      <li className="flex items-center space-x-2 text-gray-700 hover:text-yellow-500 font-semibold">
        <img src={icon2} alt="Phone Icon" className="w-5 h-5" />
        <span>+080 0444 333 444</span>
      </li>
    </ul>
  </div>

      <nav className="bg-gray shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <img src={logo} alt="Logo" className="h-8 w-auto" />
        <ul className="hidden md:flex space-x-4">
          <li className="text-gray-700 hover:text-yellow-500 font-semibold">Home</li>
          <li className="text-gray-700 hover:text-yellow-500 font-semibold">About Us</li>
          <li className="text-gray-700 hover:text-yellow-500 font-semibold">Features</li>
          <li className="text-gray-700 hover:text-yellow-500 font-semibold">Project</li>
          <li className="text-gray-700 hover:text-yellow-500 font-semibold">Pages</li>
          <li className="text-gray-700 hover:text-yellow-500 font-semibold">Contact</li>
        </ul>
      </div>
      </nav>
    </nav>
  );
};

export default Navbar;