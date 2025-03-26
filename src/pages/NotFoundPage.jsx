import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#1a1f26] text-white">
      <div className="pt-[10%] bg-[#111518]/90 backdrop-blur-md py-12 border-b border-sky-500/20">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex items-center space-x-2 text-lg text-[#E7EBEE]">
            <span className="text-sky-500">/</span>
            <Link to="/" className="hover:text-sky-500">
              Homepage
            </Link>
            <span>/</span>
            <span>404</span>
          </div>
          <div className="w-20 h-px bg-sky-500 my-4"></div>

          <div className="text-center mt-8">
            <h1 className="text-9xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
              404
            </h1>
            <p className="text-2xl text-[#E7EBEE] mt-4">
              Oops! The page you're looking for maybe doesn't exist.
            </p>
          </div>
        </div>
      </div>

      <div id="message-section" className="container mx-auto px-6 lg:px-10 py-16 text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent mb-8">
          Looks Like You're Lost
        </h2>
        <p className="text-lg text-[#E7EBEE] mb-8">
          Don't worry, you can always go back to the homepage or contact us for assistance.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="bg-gradient-to-r from-sky-500 to-purple-500 text-white px-7 py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Go to Homepage <FaArrowRight className="inline-block ml-2" />
          </Link>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-sky-500 to-purple-500 text-white px-7 py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Contact Us <FaArrowRight className="inline-block ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;