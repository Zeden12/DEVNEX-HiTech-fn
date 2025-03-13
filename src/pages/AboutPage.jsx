import React, { useState } from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const [showAll, setShowAll] = useState(false);

  const teamMembers = [
    {
      name: "Ishimwe Kevin",
      position: "Backend Engineer",
      image: "/images/kevin.jpg", // Replace with actual image path
      linkedin: "https://www.linkedin.com/in/kevin-ishimwe",
    },
    {
      name: "Alice Johnson",
      position: "Frontend Developer",
      image: "/images/alice.jpg", // Replace with actual image path
      linkedin: "https://www.linkedin.com/in/alice-johnson",
    },
    {
      name: "Bob Brown",
      position: "UI/UX Designer",
      image: "/images/bob.jpg", // Replace with actual image path
      linkedin: "https://www.linkedin.com/in/bob-brown",
    },
    {
      name: "Jane Smith",
      position: "Project Manager",
      image: "/images/jane.jpg", // Replace with actual image path
      linkedin: "https://www.linkedin.com/in/jane-smith",
    },
    {
      name: "John Doe",
      position: "DevOps Engineer",
      image: "/images/john.jpg", // Replace with actual image path
      linkedin: "https://www.linkedin.com/in/john-doe",
    },
    {
      name: "Emily Davis",
      position: "Data Scientist",
      image: "/images/emily.jpg", // Replace with actual image path
      linkedin: "https://www.linkedin.com/in/emily-davis",
    },
    {
      name: "Michael Wilson",
      position: "Mobile Developer",
      image: "/images/michael.jpg", // Replace with actual image path
      linkedin: "https://www.linkedin.com/in/michael-wilson",
    },
    {
      name: "Sarah Lee",
      position: "QA Engineer",
      image: "/images/sarah.jpg", // Replace with actual image path
      linkedin: "https://www.linkedin.com/in/sarah-lee",
    },
  ];

  const visibleMembers = showAll ? teamMembers : teamMembers.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#1a1f26] text-white">
      {/* Header */}
      <div className="pt-[10%] bg-[#111518]/90 backdrop-blur-md py-12 border-b border-sky-500/20">
        <div className="container mx-auto px-6 lg:px-20">
          {/* Breadcrumb on the Left */}
          <div className="flex items-center space-x-2 text-lg text-[#E7EBEE]">
            <span className="text-sky-500">/</span>
            <Link to="/" className="hover:text-sky-500">
              Homepage
            </Link>
            <span>/</span>
            <span>About Us</span>
          </div>

          {/* Centered Title */}
          <h1 className="text-6xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent text-center mt-8">
            Welcome to the Room
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Team Description */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-lg text-[#E7EBEE] hover:translate-x-2 transition-transform duration-300">
              Our team is a blend of <strong>creative young people</strong> and{" "}
              <strong>tech innovators</strong>, all focused on transforming Africa’s tech industry with impactful solutions. With a commitment to simplifying your digital challenges, we design intuitive experiences and build applications that drive growth.{" "}
              <strong>United by purpose</strong>, we strive to make a difference through every project.
            </p>
            <p className="text-lg text-[#E7EBEE] hover:translate-x-2 transition-transform duration-300">
              Let’s bring your vision to life. We’re ready to assist.
            </p>

            {/* Contact Us Button */}
            <div className="mt-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-sky-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Let’s Build Something Amazing Together
              </Link>
            </div>
          </div>

          {/* Right Side - Team Members */}
          <div className="grid grid-cols-2 gap-8">
            {visibleMembers.map((member, index) => (
              <div
                key={index}
                className={`relative bg-[#111518]/90 backdrop-blur-md rounded-xl p-6 border border-sky-500/20 shadow-lg text-center transition-all duration-300 transform hover:scale-105 hover:z-10 ${
                  index % 2 === 1 ? "mt-12" : "" // Staggered layout
                }`}
                style={{ height: "auto" }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-[#E7EBEE]">{member.name}</h3>
                <p className="text-lg text-[#E7EBEE] mb-4">{member.position}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-500 hover:text-sky-600 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 inline-block"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Meet Our Whole Team */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sky-500 hover:text-sky-600 transition duration-300 flex items-center space-x-2"
          >
            <span className="text-lg font-semibold">
              {showAll ? "Close" : "Meet Our Whole Team"}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={showAll ? "M6 18L18 6M6 6l12 12" : "M17 8l4 4m0 0l-4 4m4-4H3"}
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;