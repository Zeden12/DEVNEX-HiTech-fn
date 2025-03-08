import React, { useRef } from 'react';

const PartnersSection = () => {
  // Dynamically load images using new URL
  const partners = [
    { logo: new URL('../assets/alexander.jpg', import.meta.url).href, name: "Alexander Co." },
    { logo: new URL('../assets/doruk.jpg', import.meta.url).href, name: "Doruk Solutions" },
    { logo: new URL('../assets/krish.jpg', import.meta.url).href, name: "Krish Enterprises" },
    { logo: new URL('../assets/moritz.jpg', import.meta.url).href, name: "Moritz Group" },
    { logo: new URL('../assets/alexander.jpg', import.meta.url).href, name: "Alexander Co." },
    { logo: new URL('../assets/doruk.jpg', import.meta.url).href, name: "Doruk Solutions" },
    { logo: new URL('../assets/krish.jpg', import.meta.url).href, name: "Krish Enterprises" },
    { logo: new URL('../assets/moritz.jpg', import.meta.url).href, name: "Moritz Group" },
  ];

  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-[#111518] text-white">
      {/* Sweet Paragraph */}
      <div className="container mx-auto text-center mb-16 px-6 md:px-12 lg:px-20">
        <p className="text-2xl md:text-3xl font-semibold text-[#E7EBEE] leading-relaxed">
          At DEVNEX HiTech, we collaborate with industry leaders to deliver exceptional solutions that empower your business to thrive in the digital age.
        </p>
      </div>

      {/* Header on the Left */}
      <div className="container mx-auto text-left mb-12 px-6 md:px-12 lg:px-20">
        <h2 className="text-5xl font-bold uppercase">
          <span className="bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
            Our Clients
          </span>
        </h2>
        {/* Gradient Line */}
        <div className="w-2/5 mt-2 h-1.5 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full"></div>
      </div>

      {/* Partner Logos with Navigation Arrows */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#1a1f26] p-3 rounded-full shadow-lg hover:bg-[#2a2f36] transition-all duration-300 z-10"
        >
          &larr;
        </button>

        {/* Logos Container */}
        <div
          ref={containerRef}
          className="flex space-x-8 overflow-x-auto scrollbar-hide py-4"
        >
          {partners.map((partner, idx) => (
            <div key={idx} className="flex-shrink-0 w-48 h-48 flex justify-center items-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#1a1f26] p-3 rounded-full shadow-lg hover:bg-[#2a2f36] transition-all duration-300 z-10"
        >
          &rarr;
        </button>
      </div>
    </section>
  );
};

export default PartnersSection;