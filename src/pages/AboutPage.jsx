import QuartzImage from '../assets/quartz.png';

const AboutPage = () => {
  return (
    <div className='mt-[100px]'>
      <div className="bg-cover bg-center h-[500px] flex items-center justify-center" style={{ backgroundImage: `url(${QuartzImage})` }}>
        <h1 className="text-black text-6xl font-bold">About Us</h1>
      </div>
      <div className="max-w-screen-xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              Our mission is to provide high-quality, innovative tile solutions that enhance the beauty and functionality of any space. We are committed to sustainability, design excellence, and customer satisfaction.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg leading-relaxed">
              Integrity, creativity, and excellence are at the core of our values. We believe in building long-lasting relationships with our clients and partners, and we strive to exceed expectations in every aspect of our business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
