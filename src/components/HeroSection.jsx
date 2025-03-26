import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const heroImage = new URL('../assets/hero2.jpg', import.meta.url).href;

  return (
    <section
      className="relative bg-cover bg-center min-h-[100vh]"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start px-5 md:px-12 lg:px-20 pt-32 pb-32">
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-6 uppercase transform transition-all duration-300 hover:scale-105">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
            DevNeX HiTech
          </span>
        </h1>

        <p className="text-white mb-8 text-xl md:text-2xl max-w-2xl leading-relaxed transform transition-all duration-300 hover:scale-105">
          Innovating the future through cutting-edge technology. We deliver
          scalable, reliable, and innovative solutions to empower your business.
        </p>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <Link
            to="/services"
            className="border border-sky-500 text-white px-6 py-2 rounded-full hover:bg-sky-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl text-lg md:text-xl font-semibold transform hover:scale-105"
          >
            Get Started
          </Link>
          <Link
            to="/contact"
            className="border border-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl text-lg md:text-xl font-semibold transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
