import PropTypes from 'prop-types';
import Quartz from '../../assets/quartz.png';
import { BsChevronDown } from 'react-icons/bs';

const HomeSectionOne = ({ title, text }) => {
  const handleScrollDown = () => {
    const scrollTarget = document.getElementById('scroll-target');
    window.scrollTo({
      top: scrollTarget.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${Quartz})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-blue-800 opacity-60"></div>
      <div className="text-center mx-auto max-w-[600px] h-full flex flex-col justify-center items-center relative z-10 text-white px-4">
        <h2 className="text-6xl font-bold mb-6">{title}</h2>
        <p className="text-xl">{text}</p>
        <button
          className="mt-8 flex items-center"
          onClick={handleScrollDown}
        >
          <BsChevronDown className="w-8 h-8 animate-bounce" />
        </button>
      </div>
      <div id="scroll-target"></div>
    </section>
  );
};

HomeSectionOne.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default HomeSectionOne;
