import MarbleTexture from '../../assets/quartz.png';

const HomeSectionThree = () => {
  return (
    <section className="bg-blue-800 py-16 px-16 max-w-screen-xl mx-auto text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
            <p className="text-gray-200 mb-8">
              At Fabriqua, we are dedicated to providing exceptional service and unparalleled quality in every tile we offer. Our commitment to sustainability and innovation ensures that we meet the evolving needs of our clients while preserving the environment.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-blue-800 px-6 py-2 rounded-md font-semibold hover:bg-blue-900 hover:text-white transition-colors">
                Learn More
              </button>
              <button className="bg-transparent border border-white text-white px-6 py-2 rounded-md font-semibold hover:bg-white hover:text-blue-800 transition-colors">
                View Products
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={MarbleTexture}
              alt="Marble Texture"
              className="w-full max-w-md max-h-96 rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionThree;
