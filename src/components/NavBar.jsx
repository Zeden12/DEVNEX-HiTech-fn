// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(false);

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

  return (
    <nav
      className={`fixed top-0 w-full bg-[#111518] z-50 transition-transform duration-500 ease-in-out ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-12 px-10">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold">DEVNEX Hi-Tech</h1>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-10 font-text-medium">
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

          {/* Dropdown Menu */}
          <div className="relative">
            <button
              className="text-[#E7EBEE] hover:text-sky-500 flex items-center gap-2"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              OPPORTUNITIES <FaChevronDown />
            </button>

            {openDropdown && (
              <div className="absolute bg-[#111518] w-40 rounded-md shadow-md mt-2">
                {["DEVNEX Academy", "Insights"].map((item) => (
                  <a
                    href="#"
                    className="block py-2 px-4 text-[#E7EBEE] hover:bg-sky-500 hover:text-white"
                    key={item}
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Contact Button */}
        <button className="border border-white text-[#E7EBEE] px-6 py-2 hover:bg-sky-500 transition">
          CONTACT US
        </button>
      </div>
    </nav>
  );
};

export default Navbar;