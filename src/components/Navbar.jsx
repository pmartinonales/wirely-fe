import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-primary p-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">My SaaS Platform</h1>
        <div>
          <a href="#contact" className="text-white font-semibold py-2 px-4 rounded hover:text-accent">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
