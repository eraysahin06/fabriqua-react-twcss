import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === '/';

  const navbarStyle = {
    height: scrolling ? '80px' : '120px',
    backgroundColor: isHomePage ? (scrolling ? 'rgba(255, 255, 255, 0.8)' : 'transparent') : 'white',
    boxShadow: scrolling && isHomePage ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
    borderRadius: !scrolling && isHomePage ? '20px' : '0',
  };

  const getLinkStyle = (path) => {
    const isActive = location.pathname === path;
    const baseStyle = isHomePage ? (scrolling ? 'text-gray-700 hover:text-black' : 'text-gray-200 hover:text-black') : 'text-gray-700 hover:text-black';
    return isActive ? `${baseStyle} font-bold text-black` : baseStyle;
  };

  const handleToggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="flex items-center justify-center z-20 fixed top-0 left-0 right-0" style={navbarStyle}>
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center h-full">
          <Link to="/" className={`text-xl font-semibold ${getLinkStyle('/')} mr-4 rounded-full`} onClick={closeMobileMenu}>
            F A B R I Q U A
          </Link>
          <div className="md:hidden">
            {mobileMenuOpen ? (
              <FaTimes className={`text-xl cursor-pointer ${getLinkStyle('/')}`} onClick={handleToggleMenu} />
            ) : (
              <FaBars className={`text-xl cursor-pointer ${getLinkStyle('/')}`} onClick={handleToggleMenu} />
            )}
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/products" className={getLinkStyle('/products')} onClick={closeMobileMenu}>
              Products
            </Link>
            <Link to="/about" className={getLinkStyle('/about')} onClick={closeMobileMenu}>
              About Us
            </Link>
            <Link to="/contact" className={getLinkStyle('/contact')} onClick={closeMobileMenu}>
              Contact
            </Link>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-16 right-4 bg-gray-700 text-white p-4 rounded-md">
              <div className="flex flex-col items-center justify-center">
                <Link to="/products" className="hover:text-gray-300" onClick={closeMobileMenu}>
                  Products
                </Link>
                <Link to="/about" className="hover:text-gray-300" onClick={closeMobileMenu}>
                  About Us
                </Link>
                <Link to="/contact" className="hover:text-gray-300" onClick={closeMobileMenu}>
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
