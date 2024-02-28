import { FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const HomeSectionFour = () => {
  return (
    <section className="bg-white py-16 px-16 max-w-screen-xl mx-auto">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Visit Our Showroom</h2>
        <p className="text-gray-700 mb-8">
          Experience the quality of our tiles in person and get personalized assistance at our showroom. Call us now to schedule your visit.
        </p>
        <div className="flex justify-center items-center space-x-2">
          <FaPhoneAlt className="text-blue-800" />
          <span className="text-blue-800 font-semibold text-lg">+1 647 970 1905</span>
        </div>
        <p className="text-gray-700 mt-4">
          Address: 123 Tile Street, Toronto, ON, Canada
        </p>
        <Link to="/contact" className="mt-6 inline-block bg-blue-800 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-900 transition-colors">
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default HomeSectionFour;
