import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowLeft, FaLinkedin, FaInstagram } from "react-icons/fa";
import Ernest from "../assets/ernest.jpg";
import Zidan from "../assets/zidan.jpg";
import Amin from "../assets/amin.jpg";
import Herve from "../assets/herve.jpg";
import Ella from "../assets/ella.jpg";
import Zeden from "../assets/Zed6.jpg";

const AboutPage = () => {
  const [showAll, setShowAll] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const teamMembers = [
    { name: "Mr Reuben", position: "Founder", image: Ernest, linkedin: "https://www.linkedin.com/in/ernest-haguma-kwizera-709195241/", instagram: "https://www.instagram.com/squach_cj_zeden/" },
    { name: "Ernest HAGUMA KWIZERA", position: "CEO & Co-founder", image: Zidan, linkedin: "https://www.linkedin.com/in/ernest-haguma-kwizera-709195241/", instagram: "https://www.instagram.com/squach_cj_zeden/" },
    { name: "GATANAZI Amin", position: "Backend Developer", image: Amin, linkedin: "https://www.linkedin.com/", instagram: "https://www.instagram.com/" },
    { name: "IRADUKUNDA Ella Herve", position: "Frontend Developer", image: Herve, linkedin: "https://www.linkedin.com/", instagram: "https://www.instagram.com/" },
    { name: "IKIREZI Dina", position: "Full Stack Developer", image: Ella, linkedin: "https://www.linkedin.com/", instagram: "https://www.instagram.com/" },
    { name: "RUKUNDO BAZIGA Irene Serge", position: "DevOps Engineer", image: Zeden, linkedin: "https://www.linkedin.com/", instagram: "https://www.instagram.com/" },
  ];

  const testimonials = [
    { name: "John Doe", title: "CEO, Tech Innovators", image: Zidan, feedback: "DEVNEX Hi-Tech transformed our business with cutting-edge tech solutions." },
    { name: "Sarah K.", title: "Product Manager, NextGen Corp", image: Amin, feedback: "Their team is outstanding! Quick delivery, premium quality. Highly recommended!" },
    { name: "James O.", title: "CTO, Green Energy Solutions", image: Herve, feedback: "Reliable, skilled, and creative. DEVNEX Hi-Tech exceeded expectations!" },
  ];

  const nextTestimonial = () => setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length);

  const visibleMembers = showAll ? teamMembers : teamMembers.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#1a1f26] text-white">
      <div className="pt-[10%] bg-[#111518]/90 backdrop-blur-md py-12 border-b border-sky-500/20">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex items-center space-x-2 text-lg text-[#E7EBEE]">
            <span className="text-sky-500">/</span>
            <Link to="/" className="hover:text-sky-500">Homepage</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
          <div className="w-20 h-px bg-sky-500 my-4"></div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent text-center mt-8">
            Meet Our Team
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent mb-6">
            Who Are We?
          </h2>
          <p className="text-lg text-[#E7EBEE] leading-relaxed mb-6">
            DEVNEX Hi-Tech is more than just a tech company — we’re a powerhouse of innovation, 
            passion, and cutting-edge technology. Our mission is to empower businesses with transformative 
            digital solutions that drive growth, efficiency, and long-term success.
            <br /><br />
            We combine creativity with powerful coding to build web apps, mobile solutions, and future-proof software tailored for the modern world.
          </p>
          <p className="text-lg text-[#E7EBEE] leading-relaxed mb-6">
            With a team of talented developers and a vision for the future, we’re redefining technology — one line of code at a time.  
            Whether you’re a startup or an enterprise, our goal is to elevate your business to the next level with premium, user-centric solutions.
          </p>

          <div className="mt-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent mb-4">
              More About Our Team
            </h3>
            <p className="text-lg text-[#E7EBEE] leading-relaxed mb-6">
              Our team is a blend of <strong>creative young people</strong> and <strong>tech innovators</strong>, all focused on transforming Africa’s tech industry with impactful solutions. With a commitment to simplifying your digital challenges, we design intuitive experiences and build applications that drive growth. <strong>United by purpose</strong>, we strive to make a difference through every project.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-sky-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Build Something With Us
            </Link>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-8">
            {visibleMembers.map((member, index) => (
              <div
                key={index}
                className={`relative bg-[#111518]/90 backdrop-blur-md rounded-xl overflow-hidden border border-sky-500/20 shadow-lg transition-all duration-300 transform hover:scale-105 hover:z-10 group ${
                  index % 2 === 1 ? "mt-12" : ""
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover object-top transition-all duration-300 group-hover:scale-110 group-hover:opacity-50"
                />

                <div className="absolute inset-x-0 bottom-0 p-4 bg-black/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-[#E7EBEE] text-center">{member.name}</h3>
                  <p className="text-lg text-[#E7EBEE] text-center mb-2">{member.position}</p>
                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-500 hover:text-sky-600 transition duration-300"
                    >
                      <FaLinkedin className="h-6 w-6" />
                    </a>
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-500 hover:text-sky-600 transition duration-300"
                    >
                      <FaInstagram className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-sky-500 hover:text-sky-600 transition duration-300 flex items-center justify-center space-x-2 mx-auto"
            >
              <span className="text-lg font-semibold">
                {showAll ? "Close" : "Meet Our Whole Team"}
              </span>
              {!showAll && <FaArrowRight className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#111518]/90 py-16">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent mb-8 text-center">
          What Our Clients Say
        </h2>

        <div className="relative flex items-center justify-center gap-4">
          <FaArrowLeft className="text-sky-500 cursor-pointer text-3xl hover:scale-110" onClick={prevTestimonial} />

          <div className="w-[60%] bg-[#1a1f26] p-6 rounded-lg text-center shadow-md border border-sky-500/20 transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:border-sky-500/40">
            <img
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].name}
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-[#E7EBEE]">{testimonials[currentTestimonial].name}</h3>
            <p className="text-[#E7EBEE] italic">{testimonials[currentTestimonial].title}</p>
            <p className="text-lg text-[#E7EBEE] mt-4">{testimonials[currentTestimonial].feedback}</p>
          </div>

          <FaArrowRight className="text-sky-500 cursor-pointer text-3xl hover:scale-110" onClick={nextTestimonial} />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;