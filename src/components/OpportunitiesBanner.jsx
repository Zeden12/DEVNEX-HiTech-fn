import React from 'react';

const OpportunitiesBanner = () => {
  // Dynamic path for the image
  const bannerImage = new URL('../assets/baner.jpg', import.meta.url).href;

  return (
    <div
      className="relative w-full h-[300px] md:h-[400px] flex items-center overflow-hidden"
    >
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat backdrop-blur-sm"
        style={{ backgroundImage: `url(${bannerImage})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 w-full max-w-7xl mx-auto">
        {/* Text */}
        <p className="font-poppins text-white text-lg md:text-xl lg:text-2xl leading-relaxed">
          At DEVNEX HiTech, we believe in creating opportunities for growth and innovation. Join us to unlock your potential and shape the future of technology.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="font-poppins text-white border border-sky-500 px-6 py-2 rounded-full hover:bg-sky-500 hover:text-white transition-all duration-300">
            Gain Opportunities
          </button>
          <button className="font-poppins text-white border border-purple-500 px-6 py-2 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300">
            Work With Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesBanner;