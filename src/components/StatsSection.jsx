// src/components/StatsSection.jsx
import React from 'react';

const StatsSection = () => {
  return (
    <section className="py-16 bg-[#1a1f26] text-white text-center">
      <h2 className="text-4xl font-bold mb-8">Our Stats</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6">
        {[
          { stat: "150+", title: "Projects Completed" },
          { stat: "300+", title: "Happy Customers" },
          { stat: "24/7", title: "Support Availability" },
          { stat: "10+", title: "Years of Experience" }
        ].map((item, idx) => (
          <div key={idx} className="bg-[#222] p-6 rounded-md shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">{item.stat}</h3>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
