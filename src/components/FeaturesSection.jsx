import React from 'react';

const features = [
  {
    title: 'API-first Platform',
    description: 'Easily integrate our APIs to manage bank transfers.',
  },
  {
    title: 'Europe and LATAM Banks',
    description: 'Connect with almost all banks in Europe and LATAM.',
  },
  {
    title: 'Secure and Reliable',
    description: 'Our platform ensures secure and reliable transactions.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="p-16 bg-primary">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-secondary p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
