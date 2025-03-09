import { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

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

  return (
    <nav
      className={`fixed top-0 w-full bg-[#111518]/90 backdrop-blur-md z-50 transition-transform duration-500 ease-in-out ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-12 px-6 md:px-12 lg:px-20">
        <h1 className="text-white text-2xl font-bold">DEVNEX Hi-Tech</h1>
        <button
          className="text-white text-2xl md:hidden"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className="hidden md:flex gap-10 font-text-medium items-center">
          {[
            "HOME",
            "ABOUT US",
            "SERVICES",
            "PROJECTS",
          ].map((nav) => (
            <a
              href={`#${nav.toLowerCase().replace(" ", "")}`}
              className="text-[#E7EBEE] hover:text-sky-500 transition duration-300"
              key={nav}
            >
              {nav}
            </a>
          ))}

          <div className="relative" ref={dropdownRef}>
            <button
              className="text-[#E7EBEE] hover:text-sky-500 flex items-center gap-2 transition duration-300"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              OPPORTUNITIES <FaChevronDown />
            </button>

            {openDropdown && (
              <div className="absolute bg-[#111518]/90 backdrop-blur-md w-56 rounded-md shadow-lg mt-2 border border-sky-500/20">
                {["DEVNEX Academy", "Insights"].map((item) => (
                  <a
                    href="#"
                    className="block py-3 px-6 text-[#E7EBEE] hover:bg-sky-500 hover:text-white transition duration-300"
                    key={item}
                    onClick={closeDropdown}
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
        <button className="hidden md:block border border-sky-500 text-white px-8 py-3 rounded-full hover:bg-sky-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-semibold transform hover:scale-105">
          CONTACT US
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#111518]/90 backdrop-blur-md w-full px-6 pb-6">
          {[
            "HOME",
            "ABOUT US",
            "SERVICES",
            "PROJECTS",
          ].map((nav) => (
            <a
              href={`#${nav.toLowerCase().replace(" ", "")}`}
              className="block py-3 text-[#E7EBEE] hover:text-sky-500 transition duration-300"
              key={nav}
              onClick={toggleMobileMenu}
            >
              {nav}
            </a>
          ))}
          <div className="relative" ref={dropdownRef}>
            <button
              className="text-[#E7EBEE] hover:text-sky-500 flex items-center gap-2 transition duration-300 py-3"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              OPPORTUNITIES <FaChevronDown />
            </button>

            {openDropdown && (
              <div className="bg-[#111518]/90 backdrop-blur-md w-full rounded-md shadow-lg mt-2 border border-sky-500/20">
                {["DEVNEX Academy", "Insights"].map((item) => (
                  <a
                    href="#"
                    className="block py-3 px-6 text-[#E7EBEE] hover:bg-sky-500 hover:text-white transition duration-300"
                    key={item}
                    onClick={() => {
                      closeDropdown();
                      toggleMobileMenu();
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
          <button className="w-full border border-sky-500 text-white px-8 py-3 rounded-full hover:bg-sky-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-semibold transform hover:scale-105 mt-4">
            CONTACT US
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;