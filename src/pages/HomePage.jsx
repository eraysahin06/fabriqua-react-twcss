import HomeSectionOne from '../components/HomePage/HomeSectionOne';
import PropTypes from 'prop-types';
import HomeSectionTwo from '../components/HomePage/HomeSectionTwo';

const HomePage = () => {
  return (
    <div className="mx-auto">
      <HomeSectionOne
        title="Welcome to Fabriqua"
        text="Explore our high-quality tiles for your construction and design needs. Discover the perfect tiles for your projects."
      />
      <HomeSectionTwo />

    </div>
  );
};

HomePage.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  backgroundImageUrl: PropTypes.string.isRequired,
};

export default HomePage;
