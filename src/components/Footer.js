import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-2">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy;DIGIWHIZ 2019.</p>
        <ul className="flex space-x-4">
          <li className="bg-gray-800 text-white p-2">Home</li>
          <li className="bg-gray-800 text-white p-2">About Us</li>
          <li className="bg-gray-800 text-white p-2">Features</li>
          <li className="bg-gray-800 text-white p-2">Project</li>
          <li className="bg-gray-800 text-white p-2">Pages</li>
          <li className="bg-gray-800 text-white p-2">Contact</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
