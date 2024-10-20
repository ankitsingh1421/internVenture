import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll'
import './Nav.css';

const Nav = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const [menuOpen, setMenuOpen] = useState(false); // State to handle mobile menu visibility
  const [screenWidth, setScreenWidth] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen); // Toggle menu open/close
  };

  return (
    <nav
    // style={{top:"-70px"}}
      className={ `  fixed top-0 left-0 w-full  transition-all duration-300 z-50 ${theme === 'light' ? 'bg-white' : 'bg-black'
        } ${menuOpen ? 'bg-opacity-70 backdrop-blur-lg' : 'bg-transparent'} `}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div
          className={`text-xl font-bold transition-colors duration-300 ${theme === 'light' ? 'text-black' : 'text-white'
            }`}
        >
          Logo
        </div>

        {/* Links */}
        <div
          className={`md:flex md:space-x-8 items-center absolute md:static top-16 left-0 right-0 bg-gray-900 md:bg-transparent ${menuOpen ? 'flex flex-col services' : 'hidden'
            } md:flex md:flex-row transition-all duration-300 bg-opacity-70 backdrop-blur-md`}
        >
          <a href="/verify" className="hover:text-gray-500 text-center py-2 nav-services cursor-pointer">
            Verify
          </a>
          <Link to="internship" smooth={true} duration={100} className="hover:text-gray-500 text-center py-2 nav-services cursor-pointer">
            Internship
          </Link>

          {/* Dropdown for Services */}
          <div className="relative group cursor-pointer">
            <Link to="services"smooth={true} duration={100} className="hover:text-gray-500 text-center py-2 nav-link" >
              Services
            </Link>
            {/* <div class=" absolute w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-[#333] ml-8 custom-triangle"></div>
            <div className="absolute hidden group-hover:flex flex-col bg-[#333] text-white p-4 rounded-lg mt-2 dropdown-content">
              <a href="#" className="hover:bg-gray-700 py-1 px-2">Service 1</a>
              <a href="#" className="hover:bg-gray-700 py-1 px-2">Service 2</a>
            </div> */}
          </div>


          <Link to="about" smooth={true} duration={100} className="hover:text-gray-500 text-center py-2 nav-services cursor-pointer">
            About
          </Link>
          <Link to="contact" smooth={true} duration={100} className="hover:text-gray-500 text-center py-2 nav-services cursor-pointer">
            Contact
          </Link>
        </div>

        {/* Menu icon for mobile */}
        <div className="flex items-center">
          <button
            className={`text-2xl md:hidden transition-colors duration-300 ${theme === 'light' ? 'text-black' : 'text-white'
              }`}
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Theme toggle icon */}
          <button
            className={`ml-4 text-2xl transition-colors duration-300 ${theme === 'light' ? 'text-black' : 'text-white'
              }`}
            onClick={handleToggle}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
