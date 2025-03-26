import React from "react";
import { Link } from "react-router-dom";

const OpportunitiesBanner = () => {
  const bannerImage = new URL("../assets/opportunities.jpg", import.meta.url).href;

  return (
    <div className="relative w-full h-auto min-h-[400px] md:h-[500px] flex items-center overflow-hidden py-12 md:py-0">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat backdrop-blur-sm"
        style={{ backgroundImage: `url(${bannerImage})` }}
      ></div>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-24 w-full max-w-7xl mx-auto text-center">
        <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 px-2">
          Have a Tech Idea? Bring it to Life, Your Way with DEVNEX HiTech
        </h2>

        <p className="font-poppins text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto px-4">
          Got a groundbreaking tech idea or project? At DEVNEX HiTech, you stay in charge — we empower you with a skilled, passionate team and essential resources. Lead your idea from vision to reality while becoming part of our family and sharing in the success.
        </p>

        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mt-6 px-4">
          <Link
            to="/career"
            className="font-poppins text-white text-sm sm:text-base border border-sky-500 px-4 sm:px-6 py-2 rounded-full hover:bg-sky-500 hover:text-white transition-all duration-300 whitespace-nowrap"
          >
            Book a Call/Demo
          </Link>

          <Link
            to="/career"
            className="font-poppins text-white text-sm sm:text-base border border-purple-500 px-4 sm:px-6 py-2 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 whitespace-nowrap"
          >
            Read More
          </Link>

          <Link
            to="/contact"
            className="font-poppins text-white text-sm sm:text-base border border-green-500 px-4 sm:px-6 py-2 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 whitespace-nowrap"
          >
            Leave a Message
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesBanner;