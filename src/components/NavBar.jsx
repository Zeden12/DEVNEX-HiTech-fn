import { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
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

  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full bg-[#111518]/90 backdrop-blur-md z-50 transition-transform duration-500 ease-in-out ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-12 px-6 md:px-12 lg:px-20">
        <Link to="/" className="text-white text-2xl font-bold">
          DEVNEX Hi-Tech
        </Link>
        <button
          className="text-white text-2xl md:hidden"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className="hidden md:flex gap-10 font-text-medium items-center">
          {/* Home */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-[#E7EBEE] hover:text-sky-500 transition duration-300"
          >
            HOME
          </button>

          {/* About Us */}
          <Link
            to="/about"
            className="text-[#E7EBEE] hover:text-sky-500 transition duration-300"
          >
            ABOUT US
          </Link>

          {/* Services */}
          <button
            onClick={() => scrollToSection('services')}
            className="text-[#E7EBEE] hover:text-sky-500 transition duration-300"
          >
            SERVICES
          </button>

          {/* Projects */}
          <Link
            to="/projects"
            className="text-[#E7EBEE] hover:text-sky-500 transition duration-300"
          >
            PROJECTS
          </Link>

          {/* Opportunities Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="text-[#E7EBEE] hover:text-sky-500 flex items-center gap-2 transition duration-300"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              OPPORTUNITIES <FaChevronDown />
            </button>

            {openDropdown && (
              <div className="absolute bg-[#111518]/90 backdrop-blur-md w-56 rounded-md shadow-lg mt-2 border border-sky-500/20">
                <Link
                  to="/devnex-academy"
                  className="block py-3 px-6 text-[#E7EBEE] hover:bg-sky-500 hover:text-white transition duration-300"
                  onClick={closeDropdown}
                >
                  DEVNEX Academy
                </Link>
                <Link
                  to="/insights"
                  className="block py-3 px-6 text-[#E7EBEE] hover:bg-sky-500 hover:text-white transition duration-300"
                  onClick={closeDropdown}
                >
                  Insights
                </Link>
              </div>
            )}
          </div>
        </div>
        <Link
          to="/contact"
          className="hidden md:block border border-sky-500 text-white px-8 py-3 rounded-full hover:bg-sky-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-semibold transform hover:scale-105"
        >
          CONTACT US
        </Link>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#111518]/90 backdrop-blur-md w-full px-6 pb-6">
          {/* Home */}
          <button
            onClick={() => {
              scrollToSection('hero');
              toggleMobileMenu();
            }}
            className="block py-3 text-[#E7EBEE] hover:text-sky-500 transition duration-300"
          >
            HOME
          </button>

          {/* About Us */}
          <Link
            to="/about"
            className="block py-3 text-[#E7EBEE] hover:text-sky-500 transition duration-300"
            onClick={toggleMobileMenu}
          >
            ABOUT US
          </Link>

          {/* Services */}
          <button
            onClick={() => {
              scrollToSection('services');
              toggleMobileMenu();
            }}
            className="block py-3 text-[#E7EBEE] hover:text-sky-500 transition duration-300"
          >
            SERVICES
          </button>

          {/* Projects */}
          <Link
            to="/projects"
            className="block py-3 text-[#E7EBEE] hover:text-sky-500 transition duration-300"
            onClick={toggleMobileMenu}
          >
            PROJECTS
          </Link>

          {/* Opportunities Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="text-[#E7EBEE] hover:text-sky-500 flex items-center gap-2 transition duration-300 py-3"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              OPPORTUNITIES <FaChevronDown />
            </button>

            {openDropdown && (
              <div className="bg-[#111518]/90 backdrop-blur-md w-full rounded-md shadow-lg mt-2 border border-sky-500/20">
                <Link
                  to="/devnex-academy"
                  className="block py-3 px-6 text-[#E7EBEE] hover:bg-sky-500 hover:text-white transition duration-300"
                  onClick={() => {
                    closeDropdown();
                    toggleMobileMenu();
                  }}
                >
                  DEVNEX Academy
                </Link>
                <Link
                  to="/insights"
                  className="block py-3 px-6 text-[#E7EBEE] hover:bg-sky-500 hover:text-white transition duration-300"
                  onClick={() => {
                    closeDropdown();
                    toggleMobileMenu();
                  }}
                >
                  Insights
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/contact"
            className="w-full border border-sky-500 text-white px-8 py-3 rounded-full hover:bg-sky-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-semibold transform hover:scale-105 mt-4"
          >
            CONTACT US
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;