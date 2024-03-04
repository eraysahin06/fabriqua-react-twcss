import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Product = ({ product, onView }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <LazyLoadImage
        src={product.image}
        alt={product.name}
        effect="blur"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600">
          Code:{" "}
          <span className="border border-purple-300 rounded px-2">
            {product.code}
          </span>
        </p>
        <p className="text-sm text-gray-600">Type: {product.type}</p>
        <button
          className="mt-2 px-4 py-2 border border-black text-black bg-white rounded-md"
          onClick={() => onView(product)}
        >
          Details
        </button>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  onView: PropTypes.func.isRequired,
};

export default Product;
