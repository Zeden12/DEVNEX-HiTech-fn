// src/components/Footer.jsx
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { IoMailOutline } from 'react-icons/io5';
import { AiOutlinePhone } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-[#111518] text-white py-16 flex flex-col min-h-screen">
      {/* Top section with the big word */}
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold mb-4">Let's Turn Your Idea</h2>
        <h3 className="text-5xl font-bold text-sky-500 mb-8">Into Reality Together</h3>
        <div className="flex justify-center mb-12">
          <button className="bg-sky-500 text-white py-2 px-6 rounded-lg hover:bg-sky-600 transition-all duration-300">
            <span>Start Your Journey Here</span>
          </button>
        </div>
      </div>

      {/* Footer Columns */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-6 flex-grow">
        {/* First Column: Logo, Slogan, and Social Media Icons */}
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">DEVNEX Hi-Tech</h1>
          <p className="text-sm mb-4">Innovating the Future, One Solution at a Time</p>
          <div className="flex justify-center gap-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-white transition-all duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-white transition-all duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-white transition-all duration-300">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-white transition-all duration-300">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Second Column: Navigation */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-center">Navigate</h4>
          <ul className="text-center">
            {["HOME", "ABOUT US", "SERVICES", "PROJECTS"].map((item) => (
              <li key={item} className="mb-2">
                <a href={`#${item.toLowerCase().replace(" ", "")}`} className="text-[#E7EBEE] hover:text-sky-500 transition-all duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Third Column: Contact */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-center">Contact</h4>
          <ul className="text-center">
            <li className="flex items-center justify-center mb-2">
              <IoMailOutline className="mr-2 text-sky-500" />
              <span>info@devnexhitech.com</span>
            </li>
            <li className="flex items-center justify-center mb-2">
              <AiOutlinePhone className="mr-2 text-sky-500" />
              <span>+250 781 963 232</span>
            </li>
          </ul>
        </div>

        {/* Fourth Column: Address */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-center">Address</h4>
          <ul className="text-center">
            <li className="flex items-center justify-center">
              <HiOutlineLocationMarker className="mr-2 text-sky-500" />
              <span>KG 2435ST, Kigali Gisozi, Total Energy Building 2nd Floor</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section with a distinct background color */}
      <div className="bg-[#0d1217] py-4 mt-auto">
        <div className="container mx-auto text-center text-sm text-[#E7EBEE]">
          <p>&copy; 2025 DEVNEX Hi-Tech. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
