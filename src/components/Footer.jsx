import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { IoMailOutline } from 'react-icons/io5';
import { AiOutlinePhone } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-[#111518] text-white flex flex-col min-h-screen">
      {/* Top section with the big word and button */}
      <div className="flex-grow flex flex-col justify-center items-center py-16">
        <h2 className="text-5xl sm:text-6xl font-bold mb-4 text-center">
          LET'S BUILD SOMETHING
        </h2>
        <h3 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent mb-8 text-center">
          AMAZING TOGETHER
        </h3>
        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-sky-500 to-purple-500 text-white px-8 py-3 rounded-full hover:from-sky-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-semibold transform hover:scale-105">
            START A PROJECT
          </button>
        </div>
      </div>

      {/* Footer Columns */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 py-12">
        {/* First Column: Navigation */}
        <div className="text-center sm:text-left">
          <h4 className="text-xl font-bold mb-4">NAVIGATION</h4>
          <ul>
            {["HOME", "ABOUT", "CONTACT"].map((item) => (
              <li key={item} className="mb-2">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-[#E7EBEE] hover:text-sky-500 transition-all duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Second Column: Contact */}
        <div className="text-center sm:text-left">
          <h4 className="text-xl font-bold mb-4">CONTACT</h4>
          <ul>
            <li className="flex items-center justify-center sm:justify-start mb-2">
              <AiOutlinePhone className="mr-2 text-sky-500" />
              <span>+250 781 963 232</span>
            </li>
            <li className="flex items-center justify-center sm:justify-start mb-2">
              <IoMailOutline className="mr-2 text-sky-500" />
              <span>info@devnexhitech.com</span>
            </li>
          </ul>
        </div>

        {/* Third Column: Address */}
        <div className="text-center sm:text-left">
          <h4 className="text-xl font-bold mb-4">ADDRESS</h4>
          <ul>
            <li className="flex items-center justify-center sm:justify-start">
              <HiOutlineLocationMarker className="mr-2 text-sky-500" />
              <span>KG 2435ST, Kigali Gisozi, Total Energy Building 2nd Floor</span>
            </li>
          </ul>
        </div>

        {/* Fourth Column: Logo, Description, and Social Media Icons */}
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold mb-2">DEVNEX Hi-Tech</h1>
          <p className="text-sm mb-4 text-[#E7EBEE]">Innovating the Future, One Solution at a Time</p>
          <div className="flex justify-center sm:justify-start gap-4">
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
      </div>

      {/* Copyright Section at the very bottom */}
      <div className="bg-[#0d1217] py-10 mt-auto">
        <div className="container mx-auto text-center text-sm text-[#E7EBEE]">
          <p>&copy; 2025 DEVNEX Hi-Tech. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;