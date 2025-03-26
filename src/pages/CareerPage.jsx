import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";

const CollaboratePage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    message: "",
    isSuccess: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (formStatus.message) {
      const timer = setTimeout(() => {
        setFormStatus({ message: "", isSuccess: false });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  const handleScrollToForm = () => {
    const formSection = document.getElementById("collaborate-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://devnex-hitech.onrender.com/api/demo/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          preferredDate: formData.date,
          preferredTime: formData.time,
          message: formData.message,
        }),
      });

      if (response.status === 201) {
        const data = await response.json();
        setFormStatus({
          message: data.message || "Demo request submitted successfully! we will reach out to you soon",
          isSuccess: true,
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit demo request");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus({
        message: error.message || "An error occurred while submitting the form",
        isSuccess: false,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1f26] text-white">
      <div className="pt-[10%] bg-[#111518]/90 backdrop-blur-md py-12 border-b border-sky-500/20">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex items-center space-x-2 text-lg text-[#E7EBEE]">
            <span className="text-sky-500">/</span>
            <Link to="/" className="hover:text-sky-500">
              Homepage
            </Link>
            <span>/</span>
            <span>Careers</span>
          </div>
          <div className="w-20 h-px bg-sky-500 my-4"></div>

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

      <div className="container mx-auto px-6 lg:px-10 py-16">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent mb-8">
          How It Works
        </h2>
        <div className="space-y-6">
          <p className="text-lg text-[#E7EBEE]">
            At DEVNEX HiTech, we believe in empowering idea and project owners to take full control of their vision, ensuring that you remain the leader of your project every step of the way. When you collaborate with us, we provide the tools, expertise, and support to turn your ideas into reality, while you continue to earn directly from the success of your venture. We understand that your passion and hard work deserve recognition and reward, which is why we ensure you maintain ownership, control, and a continuous income stream from your project. With our partnership, you can unlock the full potential of your vision and transform it into a profitable, sustainable success that directly benefits you:
          </p>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-sky-500/20 to-transparent"></div>

          <div className="space-y-16">
            <div className="flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-2xl font-bold text-sky-500 mb-4">
                  1. Discuss Your Idea/Project With Us
                </h3>
                <p className="text-lg text-[#E7EBEE]">
                  Begin by sharing your vision with us. We listen closely to understand your goals and aspirations for your project. You retain full control over the direction, making all key decisions, while we provide a dedicated team and the resources needed to turn your idea into a reality.
                </p>
              </div>

              <div className="relative w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>

              <div className="w-1/2"></div>
            </div>

            <div className="flex items-center">
              <div className="w-1/2"></div>

              <div className="relative w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>

              <div className="w-1/2 pl-8">
                <h3 className="text-2xl font-bold text-sky-500 mb-4">
                  2. You Lead, We Support
                </h3>
                <p className="text-lg text-[#E7EBEE]">
                  Throughout the journey, you lead your project while we provide expert support, experienced Team To work with. With full transparency, you have direct access to every aspect of the project by knowing how it is going; its progress, finances, and decision-making. Our collaboration is built on trust and clear communication, ensuring that you always stay informed and in charge.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-2xl font-bold text-sky-500 mb-4">
                  3. Project Success And Long-Term Earnings
                </h3>
                <p className="text-lg text-[#E7EBEE]">
                  As your project grows, so does your success. We ensure that your idea not only reaches its full potential but becomes a sustainable income source. As the project continues to thrive, you remain the beneficiary, earning directly from its long-term success and solidifying your vision as a profitable venture.
                </p>
              </div>

              <div className="relative w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>

              <div className="w-1/2"></div>
            </div>
          </div>
        </div>
      </div>

      <div id="collaborate-form" className="bg-[#111518]/90 py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent mb-8 text-center">
            Book Demo To Start You Journey
          </h2>
          <div className="bg-[#1a1f26] p-8 rounded-lg shadow-lg border border-sky-500/20 max-w-5xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-[#E7EBEE]">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
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
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 w-full px-4 py-3 bg-[#111518]/90 border border-sky-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-white placeholder-[#E7EBEE]/50"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#E7EBEE]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 w-full px-4 py-3 bg-[#111518]/90 border border-sky-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-white placeholder-[#E7EBEE]/50"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-[#E7EBEE]">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={formData.date}
                    onChange={handleChange}
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
                    value={formData.time}
                    onChange={handleChange}
                    className="mt-1 w-full px-4 py-3 bg-[#111518]/90 border border-sky-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-white placeholder-[#E7EBEE]/50"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#E7EBEE]">
                  Leave Us a Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 w-full px-4 py-3 bg-[#111518]/90 border border-sky-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-white placeholder-[#E7EBEE]/50"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-sky-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  {isSubmitting ? "Submitting..." : "Book a Demo"}
                </button>
              </div>
            </form>
            {formStatus.message && (
              <div
                className={`mt-6 p-4 text-white rounded-lg ${
                  formStatus.isSuccess ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {formStatus.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaboratePage;