// src/components/ServicesSection.jsx
import React from 'react';

const ServicesSection = () => {
  return (
    <section className="py-16 bg-[#222] text-white text-center">
      <h2 className="text-4xl font-bold mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
        {["Web Development", "App Development", "Cloud Solutions"].map((service, idx) => (
          <div key={idx} className="bg-[#111] p-6 rounded-md shadow-lg hover:bg-sky-500 transition">
            <h3 className="text-xl font-semibold mb-4">{service}</h3>
            <p className="text-[#E7EBEE] mb-4">Learn how we can assist you with {service}.</p>
            <button className="bg-sky-500 text-white px-6 py-3 rounded-full">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
