import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-primary p-16 text-center">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold mb-4">Welcome to My SaaS Platform</h1>
        <p className="text-lg mb-8 text-gray-300">
          Seamlessly integrate bank transfers into your payment solutions.
        </p>
        <a href="#contact" className="bg-accent hover:bg-accent-dark text-white font-bold py-3 px-6 rounded">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
