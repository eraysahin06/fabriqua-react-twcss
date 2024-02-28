import HomeSectionOne from '../components/HomePage/HomeSectionOne';
import PropTypes from 'prop-types';
import HomeSectionTwo from '../components/HomePage/HomeSectionTwo';
import HomeSectionThree from '../components/HomePage/HomeSectionThree';
import HomeSectionFour from '../components/HomePage/HomeSectionFour';

const HomePage = () => {
  return (
    <div className="mx-auto">
      <HomeSectionOne
        title="Welcome to Fabriqua"
        text="As a global importer and nationwide distributor, we specialize in offering premium-quality porcelain tiles, ensuring unparalleled products and services to our clients."
      />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour />

    </div>
  );
};

HomePage.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  backgroundImageUrl: PropTypes.string.isRequired,
};

export default HomePage;
