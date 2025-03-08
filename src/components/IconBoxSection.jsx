import React from 'react';
import { FaLaptop, FaCloud, FaHeadphones, FaRocket } from 'react-icons/fa';

const IconBoxSection = ({ heroBackgroundImage }) => {
  return (
    <section
      className="py-12"
      style={{
        backgroundImage: `url(${heroBackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div
          className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 transition-all duration-300 hover:scale-102 transform-gpu"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { 
                icon: <FaLaptop size={32} />, 
                title: "Software Development", 
                description: "Custom software tailored to your needs." 
              },
              { 
                icon: <FaCloud size={32} />, 
                title: "SaaS Solutions", 
                description: "Flexible and scalable cloud solutions." 
              },
              { 
                icon: <FaHeadphones size={32} />, 
                title: "24/7 Support", 
                description: "Always here to help, any time, anywhere." 
              },
              { 
                icon: <FaRocket size={32} />, 
                title: "Your Wish", 
                description: "Your wish is our priority." 
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-lg p-5 rounded-lg border border-white/20 transition-all duration-300 hover:scale-102 hover:border-sky-500 hover:text-sky-500 cursor-pointer transform-gpu"
              >
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="text-sky-500">{item.icon}</div>
                  <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-[#E7EBEE] text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IconBoxSection;