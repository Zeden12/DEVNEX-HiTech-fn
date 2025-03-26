import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="pt-[10%] bg-[#111518]/90 backdrop-blur-md py-12 border-b border-sky-500/20">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex items-center space-x-2 text-lg text-[#E7EBEE]">
            <span className="text-sky-500">/</span>
            <Link to="/" className="hover:text-sky-500">Homepage</Link>
            <span>/</span>
            <span>Services</span>
          </div>
          <div className="w-20 h-px bg-sky-500 my-4"></div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent text-center mt-8">
            Our Services
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-10 py-16">
        <div className="mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
            Explore All the Services We Offer You
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Website Development
              </h2>
              <p className="text-lg text-gray-300 mb-4">
                Transform your online presence with our high-performance websites. Whether you need a static website, a dynamic platform, or an e-commerce solution, we deliver user-friendly designs that drive engagement and growth. We also offer website renovation services to modernize your existing site.
              </p>
              <div className="space-y-4">
                <div className="w-full h-px bg-sky-500/30"></div> 
                <div className="text-gray-300">Static Website</div>
                <div className="w-full h-px bg-sky-500/30"></div> 
                <div className="text-gray-300">Dynamic Website</div>
                <div className="w-full h-px bg-sky-500/30"></div> 
                <div className="text-gray-300">E-commerce Website</div>
                <div className="w-full h-px bg-sky-500/30"></div> 
                <div className="text-gray-300">Website Renovation</div>
                <div className="w-full h-px bg-sky-500/30"></div>
              </div>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center bg-gradient-to-r from-sky-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition duration-300"
              >
                Contact Us <FaArrowRight className="ml-2" />
              </Link>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                SaaS Solutions
              </h2>
              <p className="text-lg text-gray-300 mb-4">
                We provide scalable and secure Software as a Service (SaaS) solutions tailored to your business needs. From cloud-based applications to subscription management systems, our solutions are designed to grow with your business and ensure seamless operations.
              </p>
              <div className="space-y-4">
                <div className="w-full h-px bg-sky-500/30"></div>
                <div className="text-gray-300">Cloud-Based Applications</div>
                <div className="w-full h-px bg-sky-500/30"></div>
                <div className="text-gray-300">Subscription Management</div>
                <div className="w-full h-px bg-sky-500/30"></div>
              </div>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center bg-gradient-to-r from-sky-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition duration-300"
              >
                Contact Us <FaArrowRight className="ml-2" />
              </Link>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Branding and UI/UX Design
              </h2>
              <p className="text-lg text-gray-300 mb-4">
                We specialize in creating impactful brands and seamless user experiences. Our team of designers and strategists work closely with you to craft a unique identity that resonates with your audience. From UX audits to wireframing and design thinking, we ensure your brand stands out in a competitive market.
              </p>
              <div className="space-y-4">
                <div className="w-full h-px bg-sky-500/30"></div>
                <div className="text-gray-300">UX Audits</div>
                <div className="w-full h-px bg-sky-500/30"></div> 
                <div className="text-gray-300">Design Thinking</div>
                <div className="w-full h-px bg-sky-500/30"></div> 
                <div className="text-gray-300">Wireframing</div>
                <div className="w-full h-px bg-sky-500/30"></div> 
              </div>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center bg-gradient-to-r from-sky-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition duration-300"
              >
                Contact Us <FaArrowRight className="ml-2" />
              </Link>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Support/Sponsor Your Ideas/Projects
              </h2>
              <p className="text-lg text-gray-300 mb-4">
                Have a great idea or project but lack the resources or team to bring it to life? We provide support and sponsorship for innovative ideas and projects. We’ll work with you to develop your concept, provide the necessary resources, and help you earn from your idea or project.
              </p>
              <div className="space-y-4">
                <div className="w-full h-px bg-sky-500/30"></div> 
                <div className="text-gray-300">Resource Provision</div>
                <div className="w-full h-px bg-sky-500/30"></div> 
                <div className="text-gray-300">Team Collaboration</div>
                <div className="w-full h-px bg-sky-500/30"></div> 
                <div className="text-gray-300">Revenue Sharing</div>
                <div className="w-full h-px bg-sky-500/30"></div> 
              </div>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center bg-gradient-to-r from-sky-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition duration-300"
              >
                Contact Us <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Mobile & Software Applications
              </h2>
              <p className="text-lg text-gray-300 mb-4">
                We develop custom mobile and software applications tailored to your business needs. Our solutions are designed to enhance operational efficiency, improve user engagement, and drive growth. Whether you need a mobile app for your customers or a robust software system for internal use, we’ve got you covered.
              </p>
              <div className="space-y-4">
                <div className="w-full h-px bg-sky-500/30"></div> 
                <div className="text-gray-300">Mobile Apps</div>
                <div className="w-full h-px bg-sky-500/30"></div> 
                <div className="text-gray-300">Software Systems</div>
                <div className="w-full h-px bg-sky-500/30"></div> 
              </div>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center bg-gradient-to-r from-sky-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition duration-300"
              >
                Contact Us <FaArrowRight className="ml-2" />
              </Link>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Digital Proficiency Development
              </h2>
              <p className="text-lg text-gray-300 mb-4">
                Equip your team with the skills they need to thrive in a digital world. We offer training programs in project management, cybersecurity, file management, and digital collaboration tools. Our goal is to empower your workforce to use digital tools efficiently and effectively.
              </p>
              <div className="space-y-4">
                <div className="w-full h-px bg-sky-500/30"></div> 
                <div className="text-gray-300">
                  Project Management and Agile Workflow
                </div>
                <div className="w-full h-px bg-sky-500/30"></div> 
                <div className="text-gray-300">Cybersecurity Awareness</div>
                <div className="w-full h-px bg-sky-500/30"></div> 
                <div className="text-gray-300">File Management</div>
                <div className="w-full h-px bg-sky-500/30"></div> 
                <div className="text-gray-300">Digital Collaboration Tools</div>
                <div className="w-full h-px bg-sky-500/30"></div> 
              </div>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center bg-gradient-to-r from-sky-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition duration-300"
              >
                Contact Us <FaArrowRight className="ml-2" />
              </Link>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">IT Support</h2>
              <p className="text-lg text-gray-300 mb-4">
                Reliable IT support services to ensure your systems run smoothly and efficiently. We provide 24/7 technical support, network maintenance, and troubleshooting to keep your business operations uninterrupted.
              </p>
              <div className="space-y-4">
                <div className="w-full h-px bg-sky-500/30"></div> 
                <div className="text-gray-300">24/7 Technical Support</div>
                <div className="w-full h-px bg-sky-500/30"></div> 
                <div className="text-gray-300">Network Maintenance</div>
                <div className="w-full h-px bg-sky-500/30"></div> 
              </div>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center bg-gradient-to-r from-sky-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition duration-300"
              >
                Contact Us <FaArrowRight className="ml-2" />
              </Link>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                DEVNEX Academy
              </h2>
              <p className="text-lg text-gray-300 mb-4">
                Empowering the next generation of developers with cutting-edge training and mentorship. Our programs include coding bootcamps, mentorship programs, and hands-on projects to help aspiring developers build successful careers in tech.
              </p>
              <div className="space-y-4">
                <div className="w-full h-px bg-sky-500/30"></div> 
                <div className="text-gray-300">Software Development Bootcamps</div>
                <div className="w-full h-px bg-sky-500/30"></div> 
                <div className="text-gray-300">Internship Programs</div>
                <div className="w-full h-px bg-sky-500/30"></div> 
                <div className="text-gray-300">Real-world projects</div>
                <div className="w-full h-px bg-sky-500/30"></div> 
              </div>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center bg-gradient-to-r from-sky-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition duration-300"
              >
                Contact Us <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent mb-8">
            Our Targeted Cliental
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Individual Seeking Growth</h3>
              <p className="text-lg text-gray-300">
                Solutions to help businesses grow and succeed.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprises (Public & Private)</h3>
              <p className="text-lg text-gray-300">
                Scalable solutions for enterprises of all sizes.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Telco’s</h3>
              <p className="text-lg text-gray-300">
                Innovative solutions for telecommunications companies.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Financial Institutions</h3>
              <p className="text-lg text-gray-300">
                Robust systems for banks and financial organizations.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Super Markets</h3>
              <p className="text-lg text-gray-300">
                Streamlined systems for retail and supermarket chains.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">NGOs & Diplomat Offices</h3>
              <p className="text-lg text-gray-300">
                Tailored solutions for non-profits and diplomatic missions.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Manufacturing Industries</h3>
              <p className="text-lg text-gray-300">
                Efficient systems for manufacturing and production.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Anyone Comply to Regulations</h3>
              <p className="text-lg text-gray-300">
                Solutions for businesses that prioritize compliance.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;