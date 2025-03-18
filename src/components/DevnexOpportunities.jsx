import React from "react";
import { Link } from "react-router-dom";

const OpportunitiesBanner = () => {
  const bannerImage = new URL("../assets/opportunities.jpg", import.meta.url).href;

  return (
    <div className="relative w-full h-[300px] md:h-[400px] flex items-center overflow-hidden">
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat backdrop-blur-sm"
        style={{ backgroundImage: `url(${bannerImage})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 w-full max-w-7xl mx-auto text-center">
        <h2 className="font-poppins text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Have a Tech Idea? Bring it to Life, Your Way with DEVNEX HiTech
        </h2>

        <p className="font-poppins text-white text-lg md:text-xl lg:text-2xl leading-relaxed">
          Got a groundbreaking tech idea or project? At DEVNEX HiTech, you stay in charge — we empower you with a skilled, passionate team and essential resources. Lead your idea from vision to reality while becoming part of our family and sharing in the success.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center mt-6">
          <Link
            to="/career"
            className="font-poppins text-white border border-sky-500 px-6 py-2 rounded-full hover:bg-sky-500 hover:text-white transition-all duration-300"
          >
            Book a Call/Demo
          </Link>

          <Link
            to="/career"
            className="font-poppins text-white border border-purple-500 px-6 py-2 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300"
          >
            Read More
          </Link>

          <Link
            to="/contact"
            className="font-poppins text-white border border-green-500 px-6 py-2 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300"
          >
            Leave a Message
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesBanner;
