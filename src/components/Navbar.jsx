import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My SaaS Platform</h1>
        <div>
          <a href="#contact" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
