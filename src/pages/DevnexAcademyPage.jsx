import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCode, FaProjectDiagram, FaUserGraduate, FaRocket, FaVideo, FaMicrophone } from "react-icons/fa";

const DevnexAcademyPage = () => {
  return (
    <div className="min-h-screen bg-[#1a1f26] text-white">
      {/* Navigation Path */}
      <div className="pt-[10%] bg-[#111518]/90 backdrop-blur-md py-12 border-b border-sky-500/20">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex items-center space-x-2 text-lg text-[#E7EBEE]">
            <span className="text-sky-500">/</span>
            <Link to="/" className="hover:text-sky-500">Homepage</Link>
            <span>/</span>
            <Link to="/opportunities" className="hover:text-sky-500">Opportunities</Link>
            <span>/</span>
            <span>Devnex Academy</span>
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent text-center mt-8">
            Devnex Academy is Here!
          </h1>
          <p className="text-xl text-[#E7EBEE] mt-4 text-center">
            Empowering the Next Generation of Developers Through the <strong>SIE Program</strong>
          </p>
        </div>
      </div>

      {/* Sponsorship Section */}
      <div className="container mx-auto px-6 lg:px-20 py-16">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent mb-8">
          Sponsoring the SIE Software Development Program
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#111518]/90 backdrop-blur-md rounded-xl p-6 border border-sky-500/20 shadow-lg">
            <h3 className="text-2xl font-bold text-[#E7EBEE] mb-4">What is the SIE Program?</h3>
            <p className="text-lg text-[#E7EBEE]">
              The <strong>SIE Program</strong> is a transformative initiative designed to equip young developers with the skills needed to thrive in the tech industry. Through hands-on training, mentorship, and real-world projects, participants gain the expertise to build impactful software solutions.
            </p>
            <p className="text-lg text-[#E7EBEE] mt-4">
              <strong>DEVNEX Hi-Tech</strong> proudly sponsors the <strong>SIE Software Development Program</strong>, one of the flagship programs under the SIE umbrella. This program focuses on cutting-edge technologies and industry-relevant skills, preparing participants for successful careers in software development.
            </p>
            <Link
              to="https://sieprogram.com" // Replace with the official SIE Program link
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-sky-500 hover:text-sky-600 transition duration-300"
            >
              Learn more about the SIE Program <FaArrowRight className="inline-block ml-2" />
            </Link>
          </div>
          <div className="bg-[#111518]/90 backdrop-blur-md rounded-xl p-6 border border-sky-500/20 shadow-lg">
            <h3 className="text-2xl font-bold text-[#E7EBEE] mb-4">What You’ll Learn</h3>
            <p className="text-lg text-[#E7EBEE]">
              The <strong>SIE Software Development Program</strong> covers a wide range of technologies and skills, including:
            </p>
            <ul className="text-lg text-[#E7EBEE] list-disc list-inside mt-2">
              <li><strong>Frontend Development</strong>: HTML, CSS, JavaScript, React</li>
              <li><strong>Backend Development</strong>: Node.js, APIs, Databases (MySQL, MongoDB)</li>
              <li><strong>DevOps</strong>: CI/CD, Docker, Kubernetes</li>
              <li><strong>Mobile Development</strong>: Flutter, React Native</li>
              <li><strong>Version Control</strong>: Git, GitHub</li>
            </ul>
            <p className="text-lg text-[#E7EBEE] mt-4">
              By the end of the program, you’ll have the skills to build, deploy, and maintain modern software applications.
            </p>
          </div>
        </div>
      </div>

      {/* Other Programs Offered by DEVNEX Hi-Tech */}
      <div className="bg-[#111518]/90 py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent mb-8">
            Other Programs We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#1a1f26] p-6 rounded-lg shadow-md border border-sky-500/20">
              <FaVideo className="text-sky-500 text-4xl mb-4" />
              <h3 className="text-2xl font-bold text-[#E7EBEE]">Video Production</h3>
              <p className="text-lg text-[#E7EBEE] mt-2">
                Learn the art of video production, from scripting to editing, and create professional-quality videos.
              </p>
            </div>
            <div className="bg-[#1a1f26] p-6 rounded-lg shadow-md border border-sky-500/20">
              <FaMicrophone className="text-sky-500 text-4xl mb-4" />
              <h3 className="text-2xl font-bold text-[#E7EBEE]">Audio Production</h3>
              <p className="text-lg text-[#E7EBEE] mt-2">
                Master audio production techniques, including recording, mixing, and sound design.
              </p>
            </div>
            <div className="bg-[#1a1f26] p-6 rounded-lg shadow-md border border-sky-500/20">
              <FaCode className="text-sky-500 text-4xl mb-4" />
              <h3 className="text-2xl font-bold text-[#E7EBEE]">Web Development</h3>
              <p className="text-lg text-[#E7EBEE] mt-2">
                Build responsive and dynamic websites using modern web technologies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-6 lg:px-20 py-16 text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent mb-8">
          Ready to Join the SIE Program?
        </h2>
        <p className="text-lg text-[#E7EBEE] mb-8">
          Take the first step toward a successful career in software development. Apply now and become part of the next generation of tech innovators.
        </p>
        <Link
          to="https://sieprogram.com/apply" // Replace with the official SIE Program application link
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