import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { IoMailOutline } from 'react-icons/io5';
import { AiOutlinePhone } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#111518] text-white flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col justify-center items-center px-5 py-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
          LET'S TURN YOUR IDEA
        </h2>
        <h4 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent mb-8 text-center">
          INTO REALITY
        </h4>
        <div className="flex justify-center">
          <Link to="/contact" className="bg-gradient-to-r from-sky-500 to-purple-500 text-white px-8 py-3 rounded-full hover:from-sky-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-semibold transform hover:scale-105">
            START A PROJECT
          </Link>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-5 py-12">
        <div className="text-center sm:text-left">
          <h4 className="text-2xl font-bold mb-4">NAVIGATION</h4>
          <ul>
            {[
              { label: "About Us", link: "/about" },
              { label: "Services", link: "/services" },
              { label: "Careers", link: "/career" },
              { label: "DevNex Academy", link: "/devnex-academy" },
            ].map((item) => (
              <li key={item.label} className="mb-2">
                <Link
                  to={item.link}
                  className="text-[#E7EBEE] hover:text-sky-500 transition-all duration-300 text-lg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h4 className="text-2xl font-bold mb-4">CONTACT</h4>
          <ul>
            <li className="flex items-center justify-center sm:justify-start mb-2">
              <AiOutlinePhone className="mr-2 text-sky-500" />
              <span>+250788338877</span>
            </li>
            <li className="flex items-center justify-center sm:justify-start mb-2">
              <AiOutlinePhone className="mr-2 text-sky-500" />
              <span>+250781963232</span>
            </li>
            <li className="flex items-center justify-center sm:justify-start mb-2">
              <IoMailOutline className="mr-2 text-sky-500" />
              <span>info@devnexhitech.com</span>
            </li>
            <li className="flex items-center justify-center sm:justify-start mb-2">
              <IoMailOutline className="mr-2 text-sky-500" />
              <span>support@devnexhitech.com</span>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h4 className="text-2xl font-bold mb-4">ADDRESS</h4>
          <ul>
            <li className="flex items-center justify-center sm:justify-start">
              <HiOutlineLocationMarker className="mr-2 text-sky-500" />
              <span>KG 2435ST, Kigali Gisozi,</span>
            </li>
            <li className="flex items-center justify-center sm:justify-start">
              <HiOutlineLocationMarker className="mr-2 text-sky-500 opacity-0" />
              <span>Total Energy Building 2nd Floor</span>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold mb-2">DevNeX HiTech</h1>
          <p className="text-lg mb-4 text-[#E7EBEE]">Empowering Your Digital World.</p>
          <div className="flex justify-center sm:justify-start gap-4">
            <a href="https://www.linkedin.com/company/devnex-hitech" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-white transition-all duration-300">
              <FaLinkedin size={30} />
            </a>
            <a href="https://x.com/DevNex_Hi_Tech?s=09" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-white transition-all duration-300">
              <FaTwitter size={30} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61574176208420" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-white transition-all duration-300">
              <FaFacebook size={30} />
            </a>
            <a href="https://www.instagram.com/devnex_hi_tech?igsh=MjB1NmIzaHQ4b3Fz" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-white transition-all duration-300">
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#0d1217] py-10 mt-auto">
        <div className="container mx-auto text-center text-lg text-[#E7EBEE]">
          <p>&copy; 2025 DEVNEX Hi-Tech. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;