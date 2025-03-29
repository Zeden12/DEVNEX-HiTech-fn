import React from 'react';
import { FaCode, FaCloud, FaHandsHelping, FaChalkboardTeacher } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  return (
    <section className="py-20 bg-[#222] text-white">
      <div className="container mx-auto text-center mb-16 px-6 md:px-12 lg:px-20">
        <p className="text-1xl md:text-1xl font-semibold text-[#E7EBEE] leading-relaxed">
          At DEVNEX HiTech, we specialize in delivering innovative solutions that empower your business to thrive in the digital age. Our services are designed to meet your unique needs and drive your success.
        </p>
      </div>

      <div className="container mx-auto text-right mb-12 px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold uppercase">
          <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
            Our Services
          </span>
        </h2>
        <div className="ml-auto w-2/5 mt-2 h-1 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full"></div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 lg:px-20">
        {[
          {
            icon: <FaCode size={40} className="text-sky-400" />,
            title: "Software Development",
            description:
              "We specialize in building custom software solutions tailored to your business needs. From web applications to mobile apps, our team ensures scalability, reliability, and innovation to help your business grow and stay ahead in the digital landscape.",
            details: [
              "Web Development",
              "Mobile App Development",
              "Custom Software Solutions",
            ],
          },
          {
            icon: <FaCloud size={40} className="text-sky-400" />,
            title: "SaaS Solutions",
            description:
              "We deliver flexible and scalable cloud-based solutions designed to meet the unique demands of your business. Our SaaS offerings enable seamless integration, cost efficiency, and adaptability to help you thrive in a competitive market.",
            details: [
              "Cloud-Based Applications",
              "Subscription Management",
              "Scalable Solutions",
            ],
          },
          {
            icon: <FaHandsHelping size={40} className="text-sky-400" />,
            title: "IT Support",
            description:
              "Reliable IT support services to ensure your systems run smoothly and efficiently. We provide 24/7 technical support, network maintenance, and troubleshooting to keep your business operations uninterrupted.",
            details: [
              "24/7 Technical Support",
              "Network Maintenance",
              "Troubleshooting",
            ],
          },
          {
            icon: <FaChalkboardTeacher size={40} className="text-sky-400" />,
            title: "DEVNEX Academy",
            description:
              "Empowering the next generation of developers with cutting-edge training and mentorship. Our programs include coding bootcamps, mentorship programs, and hands-on projects to help aspiring developers build successful careers in tech.",
            details: [
              "Software Development Bootcamps",
              "Internship Programs",
              "Hands-On Projects",
            ],
          },
        ].map((service, idx) => (
          <div
            key={idx}
            className="relative p-8 border-b-2 border-r-2 border-sky-500/20 transform transition-all duration-300 hover:scale-105 hover:bg-[#1a1f26] hover:shadow-lg hover:border-sky-500 cursor-pointer group"
          >
            <div className="mb-6 transform transition-all duration-300 group-hover:scale-110">
              {service.icon}
            </div>

            <h3 className="text-3xl font-semibold mb-6 transform transition-all duration-300 group-hover:text-sky-500">
              {service.title}
            </h3>

            <p className="text-[#E7EBEE] text-lg leading-relaxed transform transition-all duration-300 group-hover:text-white mb-4">
              {service.description}
            </p>

            <div className="space-y-2">
              {service.details.map((detail, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                  <p className="text-[#E7EBEE]">{detail}</p>
                </div>
              ))}
            </div>

            {idx % 2 === 0 && (
              <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-transparent via-sky-500/20 to-transparent"></div>
            )}
            {idx < 2 && (
              <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-sky-500/20 to-transparent"></div>
            )}
          </div>
        ))}
      </div>

      <div className="container mx-auto text-center mt-16">
        <Link
          to="/services"
          className="inline-flex items-center bg-gradient-to-r from-sky-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
        >
          View All Services
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;