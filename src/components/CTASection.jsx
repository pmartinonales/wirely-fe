import React from 'react';
import ContactForm from './ContactForm';

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-primary p-16 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-lg mb-8 text-gray-300">
          Contact us today to learn more about how our platform can help you.
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default CTASection;
