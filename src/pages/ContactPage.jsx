import React from "react";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const handleScrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1f26] text-white">
      {/* Header */}
      <div className="pt-[10%] bg-[#111518]/90 backdrop-blur-md py-12 border-b border-sky-500/20">
        <div className="container mx-auto px-6 lg:px-20">
          {/* Breadcrumb on the Left with Horizontal Line */}
          <div className="flex items-center space-x-2 text-lg text-[#E7EBEE]">
            <span className="text-sky-500">/</span>
            <Link to="/" className="hover:text-sky-500">
              Homepage
            </Link>
            <span>/</span>
            <span>Contact</span>
          </div>
          <div className="w-20 h-px bg-sky-500 my-4"></div> {/* Horizontal Line */}

          {/* Centered Get in Touch and Send Message */}
          <div className="text-center mt-8">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
              Get in touch!
            </h1>
            <div className="mt-8 flex flex-col items-center space-y-2">
              <p className="text-lg text-[#E7EBEE]">Send us a message</p>
              <button
                onClick={handleScrollToForm}
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
      </div>

      {/* Map Section */}
      <div className="w-full h-[500px] lg:h-[600px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.520588349048!2d30.123456789012345!3d-1.9876543210123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwNTknMTUuNiJTIDMwwrAwNyc0Mi4xIkU!5e0!3m2!1sen!2sus!4v1633031234567!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div id="contact-form" className="container mx-auto px-6 lg:px-20 py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[#E7EBEE] mb-8 text-center">
            Let's Talk
          </h2>
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#E7EBEE]"
              >
                WHAT'S YOUR NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="mt-1 w-full px-4 py-3 bg-[#1a1f26] border border-sky-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-white placeholder-[#E7EBEE]/50"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#E7EBEE]"
              >
                YOUR EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 w-full px-4 py-3 bg-[#1a1f26] border border-sky-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-white placeholder-[#E7EBEE]/50"
                required
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-[#E7EBEE]"
              >
                YOUR PHONE NUMBER
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className="mt-1 w-full px-4 py-3 bg-[#1a1f26] border border-sky-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-white placeholder-[#E7EBEE]/50"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#E7EBEE]"
              >
                TELL US ABOUT YOUR PROJECT
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                className="mt-1 w-full px-4 py-3 bg-[#1a1f26] border border-sky-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-white placeholder-[#E7EBEE]/50"
                required
              ></textarea>
            </div>

            {/* Privacy Note */}
            <p className="text-sm text-[#E7EBEE]">
              * We promise not to disclose your personal information to third parties.
            </p>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-sky-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;