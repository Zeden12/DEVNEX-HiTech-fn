import React, { useEffect, useRef } from 'react';

const PartnersSection = () => {
  const partners = [
    { logo: new URL('../assets/devnex.jpg', import.meta.url).href, name: "Alexander Co." },
    { logo: new URL('../assets/SIE.jpg', import.meta.url).href, name: "Doruk Solutions" },
    { logo: new URL('../assets/skafftv.jpg', import.meta.url).href, name: "Alexander Co." },
    { logo: new URL('../assets/SIE.jpg', import.meta.url).href, name: "Doruk Solutions" },
    { logo: new URL('../assets/devnex.jpg', import.meta.url).href, name: "Alexander Co." },
    { logo: new URL('../assets/skafftv.jpg', import.meta.url).href, name: "Doruk Solutions" },
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const scrollSpeed = 1;
    const scrollContainer = containerRef.current;

    const moveLogos = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(moveLogos, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-[#111518] text-white">
      <div className="container mx-auto text-center mb-16 px-6 md:px-12 lg:px-10">
        <p className="text-2xl md:text-3xl font-semibold text-[#E7EBEE] leading-relaxed">
          At DEVNEX HiTech, we collaborate with industry leaders to deliver exceptional solutions that empower your business to thrive in the digital age.
        </p>
      </div>
      <div className="container mx-auto text-left mb-12 px-6 md:px-12 lg:px-10">
        <h2 className="text-3xl font-bold uppercase">
          <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
            Our Clients
          </span>
        </h2>
        <div className="w-2/5 mt-2 h-1 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full"></div>
      </div>
      <div className="container mx-auto px-6 md:px-12 lg:px-10 relative">
        <div
          ref={containerRef}
          className="flex space-x-8 overflow-x-hidden scrollbar-hide py-4 whitespace-nowrap"
        >
          {[...partners, ...partners].map((partner, idx) => (
            <div key={idx} className="flex-shrink-0 w-48 h-30 inline-block">
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
