import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const heroImage = new URL('../assets/hero2.jpg', import.meta.url).href;

  return (
    <section
      className="relative bg-cover bg-center min-h-[70vh] md:min-h-[100vh]"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start px-4 md:px-12 lg:px-20 pt-32 md:pt-48 pb-16">
        <div className="mt-8 md:mt-16">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 uppercase">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
              DevNex HiTech
            </span>
          </h1>

          <p className="text-white mb-6 md:mb-8 text-base sm:text-lg md:text-2xl max-w-2xl leading-relaxed">
            Innovating the future through cutting-edge technology. We deliver
            scalable, reliable, and innovative solutions to empower your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-8 w-full sm:w-auto">
            <Link
              to="/services"
              className="border border-sky-500 text-white px-4 py-1 sm:px-5 sm:py-1.5 md:px-6 md:py-2 rounded-full hover:bg-sky-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-xl font-semibold transform hover:scale-105 text-center"
            >
              Get Started
            </Link>
            <Link
              to="/contact"
              className="border border-purple-500 text-white px-4 py-1 sm:px-5 sm:py-1.5 md:px-6 md:py-2 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-xl font-semibold transform hover:scale-105 text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;