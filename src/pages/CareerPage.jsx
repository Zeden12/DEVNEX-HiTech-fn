import React from "react";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";

const CollaboratePage = () => {
  const handleScrollToForm = () => {
    const formSection = document.getElementById("collaborate-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1f26] text-white">
      {/* Breadcrumb Navigation */}
      <div className="pt-[10%] bg-[#111518]/90 backdrop-blur-md py-12 border-b border-sky-500/20">
        <div className="container mx-auto px-6 lg:px-20">
          {/* Breadcrumb on the Left with Horizontal Line */}
          <div className="flex items-center space-x-2 text-lg text-[#E7EBEE]">
            <span className="text-sky-500">/</span>
            <Link to="/" className="hover:text-sky-500">
              Homepage
            </Link>
            <span>/</span>
            <span>Careers</span>
          </div>
          <div className="w-20 h-px bg-sky-500 my-4"></div> {/* Horizontal Line */}

          {/* Centered Get in Touch and Send Message */}
          <div className="text-center mt-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
              Unlock New Career Opportunities <br /> at DEVNEX HiTech
            </h1>
            <div className="mt-8 flex flex-col items-center space-y-2">
              <p className="text-lg text-[#E7EBEE]">Book a demo/call</p>
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

      {/* Explanation Section */}
      <div className="container mx-auto px-6 lg:px-20 py-16">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent mb-8">
          How It Works
        </h2>
        <div className="space-y-6">
          <p className="text-lg text-[#E7EBEE]">
          At DEVNEX HiTech, we believe in empowering idea and project owners to take full control of their vision, ensuring that you remain the leader of your project every step of the way. When you collaborate with us, we provide the tools, expertise, and support to turn your ideas into reality, while you continue to earn directly from the success of your venture. We understand that your passion and hard work deserve recognition and reward, which is why we ensure you maintain ownership, control, and a continuous income stream from your project. With our partnership, you can unlock the full potential of your vision and transform it into a profitable, sustainable success that directly benefits you:
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative mt-12">
          {/* Vertical Line */}
          <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-sky-500/20 to-transparent"></div>

          {/* Cards */}
          <div className="space-y-16">
            {/* Card 1 */}
            <div className="flex items-center">
              {/* Left Side */}
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-2xl font-bold text-sky-500 mb-4">
                  1. Discuss Your Idea/Project With Us
                </h3>
                <p className="text-lg text-[#E7EBEE]">
                Begin by sharing your vision with us. We listen closely to understand your goals and aspirations for your project. You retain full control over the direction, making all key decisions, while we provide a dedicated team and the resources needed to turn your idea into a reality.
                </p>
              </div>

              {/* Circle Indicator */}
              <div className="relative w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>

              {/* Right Side (Empty) */}
              <div className="w-1/2"></div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center">
              {/* Left Side (Empty) */}
              <div className="w-1/2"></div>

              {/* Circle Indicator */}
              <div className="relative w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>

              {/* Right Side */}
              <div className="w-1/2 pl-8">
                <h3 className="text-2xl font-bold text-sky-500 mb-4">
                  2. You Lead, We Support
                </h3>
                <p className="text-lg text-[#E7EBEE]">
                Throughout the journey, you lead your project while we provide expert support, experienced Team To work with. With full transparency, you have direct access to every aspect of the project by knowing how it is going; its progress, finances, and decision-making. Our collaboration is built on trust and clear communication, ensuring that you always stay informed and in charge.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-center">
              {/* Left Side */}
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-2xl font-bold text-sky-500 mb-4">
                  3. Project Success And Long-Term Earnings
                </h3>
                <p className="text-lg text-[#E7EBEE]">
                As your project grows, so does your success. We ensure that your idea not only reaches its full potential but becomes a sustainable income source. As the project continues to thrive, you remain the beneficiary, earning directly from its long-term success and solidifying your vision as a profitable venture.
                </p>
              </div>

              {/* Circle Indicator */}
              <div className="relative w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>

              {/* Right Side (Empty) */}
              <div className="w-1/2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Book a Demo Section */}
      <div id="collaborate-form" className="bg-[#111518]/90 py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent mb-8 text-center">
            Book Demo if You Love it
          </h2>
          <div className="bg-[#1a1f26] p-8 rounded-lg shadow-lg border border-sky-500/20 max-w-5xl mx-auto">
            <form className="space-y-6">
              {/* First Name and Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-[#E7EBEE]">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="mt-1 w-full px-4 py-3 bg-[#111518]/90 border border-sky-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-white placeholder-[#E7EBEE]/50"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-[#E7EBEE]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="mt-1 w-full px-4 py-3 bg-[#111518]/90 border border-sky-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-white placeholder-[#E7EBEE]/50"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#E7EBEE]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 w-full px-4 py-3 bg-[#111518]/90 border border-sky-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-white placeholder-[#E7EBEE]/50"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#E7EBEE]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="mt-1 w-full px-4 py-3 bg-[#111518]/90 border border-sky-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-white placeholder-[#E7EBEE]/50"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-[#E7EBEE]">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="mt-1 w-full px-4 py-3 bg-[#111518]/90 border border-sky-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-white placeholder-[#E7EBEE]/50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-[#E7EBEE]">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    className="mt-1 w-full px-4 py-3 bg-[#111518]/90 border border-sky-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-white placeholder-[#E7EBEE]/50"
                    required
                  />
                </div>
              </div>

              {/* Leave a Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#E7EBEE]">
                  Leave Us a Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="mt-1 w-full px-4 py-3 bg-[#111518]/90 border border-sky-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-white placeholder-[#E7EBEE]/50"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Book a Demo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaboratePage;