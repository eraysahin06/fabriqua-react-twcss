import FabriquaLogo from '../../assets/fabriqua-logo.jpeg';
import Quartz from '../../assets/quartz.png';

const HomeSectionTwo = () => {
  return (
    <section className="bg-white py-16 px-16 max-w-screen-xl mx-auto">
      <div className="container mx-auto">
        {/* First Row: Text on the left, image on the right */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-4 max-w-md">About Fabriqua</h2>
            <p className="text-gray-700 max-w-md">
              Fabriqua is a leading provider of high-quality tiles for various construction and design projects. With a commitment to excellence and innovation, we offer a wide range of tiles to meet the diverse needs of our clients. Our modern and stylish tiles are designed to elevate the aesthetics of any space.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={FabriquaLogo}
              alt="fabriqua logo"
              className="w-full max-w-md max-h-96 rounded-md shadow-lg border-black border-xl border"
            />
          </div>
        </div>

        {/* Second Row: Text on the left, image on the right */}
        <div className="flex flex-col md:flex-row items-center mt-10">
          <div className="md:w-1/2 mb-4 md:mb-0 md:pr-8">
            {/* Adjusted padding for both small and medium/large screens */}
            <img
              src={Quartz}
              alt="fabriqua logo"
              className="w-full max-w-md max-h-96 rounded-md shadow-lg border-black border-xl border"
            />
          </div>
          <div className="md:w-1/2 mt-4">
            {/* Adjusted padding for both small and medium/large screens */}
            <h2 className="text-3xl font-bold mb-4 max-w-md">About Fabriqua</h2>
            <p className="text-gray-700 max-w-md mb-4">
              Fabriqua is a leading provider of high-quality tiles for various construction and design projects. With a commitment to excellence and innovation, we offer a wide range of tiles to meet the diverse needs of our clients. Our modern and stylish tiles are designed to elevate the aesthetics of any space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionTwo;
