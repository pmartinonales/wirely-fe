import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-500 p-16 text-center">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold mb-4">Welcome to Wirely</h1>
        <p className="text-lg mb-8">
          Seamlessly integrate bank transfers into your payment solutions.
        </p>
        <a href="#contact" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
