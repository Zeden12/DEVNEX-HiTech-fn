// src/components/PartnersSection.jsx
import React from 'react';

const PartnersSection = () => {
  return (
    <section className="py-16 bg-[#111518] text-white text-center">
      <h2 className="text-4xl font-bold mb-8">Our Partners</h2>
      <div className="flex overflow-x-auto space-x-6">
        {["Partner1", "Partner2", "Partner3", "Partner4"].map((partner, idx) => (
          <img key={idx} src={`${partner}-logo.png`} alt={partner} className="h-16"/>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
