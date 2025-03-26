import { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaBars, FaTimes, FaCheck } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeDropdown = () => {
    setOpenDropdown(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 w-full bg-[#111518]/90 backdrop-blur-md z-50 transition-transform duration-500 ease-in-out ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-9 px-5 md:px-12 lg:px-5">
        <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
          DevNex HiTech
        </Link>
        <button
          className="text-white text-2xl md:hidden"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className="hidden md:flex gap-8 font-text-medium items-center">
          <Link to="/" className="text-[#E7EBEE] hover:text-sky-500 transition duration-300 flex items-center gap-1">
            HOME {isActive('/') && <FaCheck className="text-sky-500" />}
          </Link>

          <Link to="/about" className="text-[#E7EBEE] hover:text-sky-500 transition duration-300 flex items-center gap-1">
            ABOUT US {isActive('/about') && <FaCheck className="text-sky-500" />}
          </Link>

          <Link to="/services" className="text-[#E7EBEE] hover:text-sky-500 transition duration-300 flex items-center gap-1">
            SERVICES {isActive('/services') && <FaCheck className="text-sky-500" />}
          </Link>

          <Link to="/career" className="text-[#E7EBEE] hover:text-sky-500 transition duration-300 flex items-center gap-1">
            CAREERS {isActive('/career') && <FaCheck className="text-sky-500" />}
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              className="text-[#E7EBEE] hover:text-sky-500 flex items-center gap-1 transition duration-300"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              OPPORTUNITIES <FaChevronDown className={`transition-transform ${openDropdown ? 'rotate-180' : ''}`} />
            </button>

            {openDropdown && (
              <div className="absolute bg-[#111518]/90 backdrop-blur-md w-56 rounded-md shadow-lg mt-2 border border-sky-500/20">
                <Link
                  to="/devnex-academy"
                  className="block py-3 px-6 text-[#E7EBEE] hover:bg-sky-500 hover:text-white transition duration-300 flex items-center gap-2"
                  onClick={closeDropdown}
                >
                  {isActive('/devnex-academy') && <FaCheck className="text-sky-500" />}
                  DevNex Academy
                </Link>
                <Link
                  to="/career"
                  className="block py-3 px-6 text-[#E7EBEE] hover:bg-sky-500 hover:text-white transition duration-300 flex items-center gap-2"
                  onClick={closeDropdown}
                >
                  {isActive('/career') && <FaCheck className="text-sky-500" />}
                  Shape Your Career
                </Link>
                <Link
                  to="/internships"
                  className="block py-3 px-6 text-[#E7EBEE] hover:bg-sky-500 hover:text-white transition duration-300 flex items-center gap-2"
                  onClick={closeDropdown}
                >
                  {isActive('/internships') && <FaCheck className="text-sky-500" />}
                  Internships
                </Link>
                <Link
                  to="/Jobs"
                  className="block py-3 px-6 text-[#E7EBEE] hover:bg-sky-500 hover:text-white transition duration-300 flex items-center gap-2"
                  onClick={closeDropdown}
                >
                  {isActive('/Jobs') && <FaCheck className="text-sky-500" />}
                  Jobs
                </Link>
              </div>
            )}
          </div>
        </div>
        <Link
          to="/contact"
          className="hidden md:block border border-sky-500 text-white px-6 py-2 rounded-full hover:bg-sky-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-semibold transform hover:scale-105"
        >
          CONTACT US
        </Link>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#111518]/90 backdrop-blur-md w-full px-6 pb-6">
          <Link to="/" className="block py-3 text-[#E7EBEE] hover:text-sky-500 transition duration-300 flex items-center gap-2" onClick={toggleMobileMenu}>
            {isActive('/') && <FaCheck className="text-sky-500" />}
            HOME
          </Link>

          <Link to="/about" className="block py-3 text-[#E7EBEE] hover:text-sky-500 transition duration-300 flex items-center gap-2" onClick={toggleMobileMenu}>
            {isActive('/about') && <FaCheck className="text-sky-500" />}
            ABOUT US
          </Link>

          <Link to="/services" className="block py-3 text-[#E7EBEE] hover:text-sky-500 transition duration-300 flex items-center gap-2" onClick={toggleMobileMenu}>
            {isActive('/services') && <FaCheck className="text-sky-500" />}
            SERVICES
          </Link>

          <Link to="/career" className="block py-3 text-[#E7EBEE] hover:text-sky-500 transition duration-300 flex items-center gap-2" onClick={toggleMobileMenu}>
            {isActive('/career') && <FaCheck className="text-sky-500" />}
            CAREERS
          </Link>

          <div className="relative py-3" ref={dropdownRef}>
            <button
              className="text-[#E7EBEE] hover:text-sky-500 flex items-center gap-2 transition duration-300"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              OPPORTUNITIES <FaChevronDown className={`transition-transform ${openDropdown ? 'rotate-180' : ''}`} />
            </button>

            {openDropdown && (
              <div className="bg-[#111518]/90 backdrop-blur-md w-full rounded-md shadow-lg mt-2 border border-sky-500/20">
                <Link
                  to="/devnex-academy"
                  className="block py-3 px-6 text-[#E7EBEE] hover:bg-sky-500 hover:text-white transition duration-300 flex items-center gap-2"
                  onClick={() => { closeDropdown(); toggleMobileMenu(); }}
                >
                  {isActive('/devnex-academy') && <FaCheck className="text-sky-500" />}
                  DEVNEX Academy
                </Link>
                <Link
                  to="/career"
                  className="block py-3 px-6 text-[#E7EBEE] hover:bg-sky-500 hover:text-white transition duration-300 flex items-center gap-2"
                  onClick={() => { closeDropdown(); toggleMobileMenu(); }}
                >
                  {isActive('/career') && <FaCheck className="text-sky-500" />}
                  Shape Your Career
                </Link>
                <Link
                  to="/internships"
                  className="block py-3 px-6 text-[#E7EBEE] hover:bg-sky-500 hover:text-white transition duration-300 flex items-center gap-2"
                  onClick={() => { closeDropdown(); toggleMobileMenu(); }}
                >
                  {isActive('/internships') && <FaCheck className="text-sky-500" />}
                  Internships
                </Link>
                <Link
                  to="/Jobs"
                  className="block py-3 px-6 text-[#E7EBEE] hover:bg-sky-500 hover:text-white transition duration-300 flex items-center gap-2"
                  onClick={() => { closeDropdown(); toggleMobileMenu(); }}
                >
                  {isActive('/Jobs') && <FaCheck className="text-sky-500" />}
                  Jobs
                </Link>
              </div>
            )}
          </div>

          <Link 
            to="/contact" 
            className="w-full border border-sky-500 text-white px-5 py-2 rounded-full hover:bg-sky-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-semibold transform hover:scale-105 mt-6 block text-center" 
            onClick={toggleMobileMenu}
          >
            CONTACT US
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;