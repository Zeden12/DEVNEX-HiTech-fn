import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";

const DevnexAcademyPage = () => {
  const handleScrollToApply = () => {
    const applySection = document.getElementById("apply-section");
    if (applySection) {
      applySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1f26] text-white">
      <div className="pt-[10%] bg-[#111518]/90 backdrop-blur-md py-12 border-b border-sky-500/20">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex items-center space-x-2 text-lg text-[#E7EBEE]">
            <span className="text-sky-500">/</span>
            <Link to="/" className="hover:text-sky-500">Homepage</Link>
            <span>/</span>
            <Link to="/opportunities" className="hover:text-sky-500">Opportunities</Link>
            <span>/</span>
            <span>Devnex Academy</span>
          </div>
          <div className="w-55 h-px bg-sky-500 my-4"></div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent text-center mt-8">
            Devnex Academy is Here!
          </h1>
          <p className="text-xl text-[#E7EBEE] mt-4 text-center">
            We're Empowering the Next Generation of Developers Through the <strong>SIE Programme</strong>
          </p>
          <div className="mt-8 flex flex-col items-center space-y-2">
            <p className="text-lg text-[#E7EBEE]">Apply Now</p>
            <button
                onClick={handleScrollToApply}
                className="text-sky-500 hover:text-sky-600 animate-bounce"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                  />
                </svg>
              </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-10 py-16">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent mb-8">
          About the SIE Programme
        </h2>
        <div className="space-y-8">
          <p className="text-lg text-[#E7EBEE]">
            The <strong>SIE Programme</strong> is a transformative initiative designed to equip young developers with the skills needed to thrive in the tech industry. Through hands-on training, mentorship, and real-world projects, participants gain the expertise to build impactful software solutions.
          </p>
          <p className="text-lg text-[#E7EBEE]">
            <strong>DEVNEX Hi-Tech</strong> proudly sponsors the <strong>SIE Software Development Program</strong>, one of the flagship programs under the SIE umbrella. This program focuses on cutting-edge technologies and industry-relevant skills, preparing participants for successful careers in software development.
          </p>
          <p className="text-lg text-[#E7EBEE]">
            Our program doesn’t just stop at training. We also help our learners find internships and connect them with available job opportunities in the tech industry. Our goal is to ensure that every participant has the tools and support they need to succeed.
          </p>
          <Link
            to="https://sieprogram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-sky-500 hover:text-sky-600 transition duration-300"
          >
            Learn more about the SIE Programme <FaArrowRight className="inline-block ml-2" />
          </Link>
        </div>
      </div>

      <div id="apply-section" className="container mx-auto px-6 lg:px-10 py-16 text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent mb-8">
          Ready to Join the SIE Software Development Program?
        </h2>
        <p className="text-lg text-[#E7EBEE] mb-8">
          Take the leap into your tech future with the power of <strong>DEVNEX Hi-Tech</strong> behind you! Our program offers not only hands-on learning but also exclusive mentorship and career opportunities to ensure you grow into an industry-ready software developer. Apply now and start building your career under the guidance of experienced professionals, turning your passion into a lifelong, rewarding skillset.
        </p>
        <Link
          to="https://sieprogram.com/apply"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-sky-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 inline-block"
        >
          Apply Now <FaArrowRight className="inline-block ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default DevnexAcademyPage;
