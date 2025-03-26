import React from 'react';
import { FaLaptop, FaCloud, FaHeadphones, FaRocket, FaGraduationCap } from 'react-icons/fa';

const IconBoxSection = () => {
  return (
    <section className="py-12 bg-[#1a1f26]">
      <div className="container mx-auto px-4 md:px-8 lg:px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {[
            {
              icon: <FaLaptop size={28} />, 
              title: "Software Development", 
              description: "Custom software tailored to your needs." 
            },
            { 
              icon: <FaCloud size={28} />, 
              title: "SaaS Solutions", 
              description: "Flexible and scalable cloud solutions." 
            },
            { 
              icon: <FaHeadphones size={28} />, 
              title: "24/7 Support", 
              description: "Always here to help, any time, anywhere." 
            },
            { 
              icon: <FaGraduationCap size={28} />, 
              title: "DevNex Academy", 
              description: "Advance your tech skills with our training programs." 
            },
            { 
              icon: <FaRocket size={28} />, 
              title: "Your Wish", 
              description: "Your wish is our priority." 
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg border border-white/20 transition-all duration-300 hover:scale-[1.02] hover:border-sky-500 hover:text-sky-500 cursor-pointer transform-gpu"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="text-sky-500">{item.icon}</div>
                <h3 className="text-white text-base md:text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="text-[#E7EBEE] text-sm md:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconBoxSection;