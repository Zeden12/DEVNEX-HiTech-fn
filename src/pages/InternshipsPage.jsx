import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const InternshipsPage = () => {
  return (
    <div className="min-h-screen bg-[#1a1f26] text-white">
      <div className="pt-[10%] bg-[#111518]/90 backdrop-blur-md py-12 border-b border-sky-500/20">
        <div className="container mx-auto px-5 lg:px-5">
          <div className="flex items-center space-x-2 text-lg text-[#E7EBEE]">
            <span className="text-sky-500">/</span>
            <Link to="/" className="hover:text-sky-500">
              Homepage
            </Link>
            <span>/</span>
            <span>Internships</span>
          </div>
          <div className="w-20 h-px bg-sky-500 my-4"></div>
          <div className="text-center mt-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
              Internship Opportunities
            </h1>
            <p className="text-lg text-[#E7EBEE] mt-4">
              Stay Tuned for Future Opportunities
            </p>
          </div>
        </div>
      </div>

      <div id="message-section" className="container mx-auto px-6 lg:px-20 py-16 text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent mb-8">
          Oops! Looks Like No Available Internships Right Now
        </h2>
        <p className="text-lg text-[#E7EBEE] mb-8">
          We currently don’t have any internship opportunities available. However, stay tuned by visiting us regularly for future opportunities. We’re always looking for talented individuals to join our team!
        </p>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-sky-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 inline-block"
        >
          Contact Us for More Info <FaArrowRight className="inline-block ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default InternshipsPage;