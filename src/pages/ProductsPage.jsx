import { useState } from 'react';
import { motion } from 'framer-motion';
import Product from '../components/ProductsPage/Product';
import products from '../data/products';
import { FaTimes } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
};

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filterType, setFilterType] = useState('');

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return filterType ? product.type.toLowerCase() === filterType.toLowerCase() : true;
  });

  return (
    <div className="max-w-screen-xl mx-auto p-8 mt-[100px]">
      <h2 className="text-3xl font-bold mb-6">Our Products</h2>
      <div className="mb-6">
        <select
          className="border border-gray-300 rounded-md p-2"
          value={filterType}
          onChange={handleFilterChange}
        >
          <option value="">All</option>
          <option value="Matte">Matte</option>
          <option value="Polished">Polished</option>
          <option value="Semi">Semi</option>
        </select>
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredProducts.map((product) => (
          <motion.div key={product.code} variants={itemVariants} whileHover="hover">
            <Product product={product} onView={handleViewProduct} />
          </motion.div>
        ))}
      </motion.div>

      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white p-10 rounded-md shadow-lg relative max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-2xl text-black bg-transparent border-none cursor-pointer"
              onClick={handleCloseModal}
            >
              <FaTimes />
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-2xl py-4 font-bold">{selectedProduct.name}</h3>
            <p className="mb-2">
              Code:{' '}
              <span className="border border-purple-300 rounded px-2">
                {selectedProduct.code}
              </span>
            </p>
            <p className="mb-2">Type: {selectedProduct.type}</p>
            <p>Details: {selectedProduct.details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
