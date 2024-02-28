import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-700">© 2024 Fabriqua. All rights reserved.</p>
            <p className="text-gray-700">Contact: +1 647 970 1905 | info@fabriqua.com</p>
          </div>
          <div className="flex items-center space-x-6">
            <a href="https://www.linkedin.com/company/fabriqua-tiles" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaLinkedinIn size="1.5em" />
            </a>
            <nav className="flex space-x-4">
              <a href="/products" className="text-gray-700 hover:text-blue-600">Products</a>
              <a href="/about" className="text-gray-700 hover:text-blue-600">About Us</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
