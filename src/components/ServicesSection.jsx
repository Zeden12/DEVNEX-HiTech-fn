import React from 'react';
import { FaCode, FaCloud, FaBug, FaChalkboardTeacher } from 'react-icons/fa';

const ServicesSection = () => {
  return (
    <section className="py-20 bg-[#222] text-white">
      {/* Sweet Paragraph */}
      <div className="container mx-auto text-center mb-16 px-6 md:px-12 lg:px-20">
        <p className="text-2xl md:text-3xl font-semibold text-[#E7EBEE] leading-relaxed">
          At DEVNEX HiTech, we specialize in delivering innovative solutions that empower your business to thrive in the digital age. Our services are designed to meet your unique needs and drive your success.
        </p>
      </div>

      {/* Header */}
      <div className="container mx-auto text-right mb-12 px-6 md:px-12 lg:px-20">
        <h2 className="text-5xl font-bold uppercase">
          <span className="bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
            Our Services
          </span>
        </h2>
        <div className="ml-auto w-2/5 mt-2 h-1.5 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full"></div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 lg:px-20">
        {[
          {
            icon: <FaCode size={40} className="text-sky-500" />,
            title: "Software Development",
            description:
              "We specialize in building custom software solutions tailored to your business needs. From web applications to mobile apps, our team ensures scalability, reliability, and innovation to help your business grow and stay ahead in the digital landscape.",
          },
          {
            icon: <FaCloud size={40} className="text-sky-500" />,
            title: "SaaS Solutions",
            description:
              "We deliver flexible and scalable cloud-based solutions designed to meet the unique demands of your business. Our SaaS offerings enable seamless integration, cost efficiency, and adaptability to help you thrive in a competitive market.",
          },
          {
            icon: <FaBug size={40} className="text-sky-500" />,
            title: "Testing",
            description:
              "Our comprehensive testing services ensure your applications are bug-free, secure, and perform at their best. We use advanced testing methodologies to deliver high-quality software that meets your business requirements and exceeds user expectations.",
          },
          {
            icon: <FaChalkboardTeacher size={40} className="text-sky-500" />,
            title: "DEVNEX Academy",
            description:
              "DEVNEX Academy is our initiative to empower the next generation of tech professionals. We offer training programs, workshops, and mentorship to help individuals and teams develop the skills needed to excel in the ever-evolving tech industry.",
          },
        ].map((service, idx) => (
          <div
            key={idx}
            className="relative p-8 border-b-2 border-r-2 border-sky-500/20 transform transition-all duration-300 hover:scale-105 hover:bg-[#1a1f26] hover:shadow-lg hover:border-sky-500 cursor-pointer group"
          >
            {/* Icon */}
            <div className="mb-6 transform transition-all duration-300 group-hover:scale-110">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-3xl font-semibold mb-6 transform transition-all duration-300 group-hover:text-sky-500">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-[#E7EBEE] text-lg leading-relaxed transform transition-all duration-300 group-hover:text-white">
              {service.description}
            </p>

            {/* Cross Separator */}
            {idx % 2 === 0 && (
              <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-transparent via-sky-500/20 to-transparent"></div>
            )}
            {idx < 2 && (
              <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-sky-500/20 to-transparent"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;