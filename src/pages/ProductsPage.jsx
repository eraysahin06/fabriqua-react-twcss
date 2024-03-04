import { useState } from 'react';
import { motion } from 'framer-motion';
import Product from '../components/ProductsPage/Product';
import products from '../data/products';
import { FaTimes } from 'react-icons/fa';
import QuartzImage from '../assets/products.jpg';

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

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  const filteredProducts = products.filter((product) => {
    return filterType ? product.type.toLowerCase() === filterType.toLowerCase() : true;
  });

  const filterButtonClass = (type) => {
    return filterType === type
      ? 'bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700'
      : 'bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded-md font-semibold hover:bg-blue-500 hover:text-white';
  };

  return (
    <div className='mt-[100px]'>
      <div className="bg-cover bg-center h-[500px] flex items-center justify-center" style={{ backgroundImage: `url(${QuartzImage})` }}>
        <h1 className="text-black text-6xl font-bold">Our Products</h1>
      </div>
      <div className="max-w-screen-xl mx-auto p-8 mt-8">
        <div className="mb-6 flex justify-center space-x-4">
          <button className={filterButtonClass('')} onClick={() => handleFilterChange('')}>All</button>
          <button className={filterButtonClass('Matte')} onClick={() => handleFilterChange('Matte')}>Matte</button>
          <button className={filterButtonClass('Polished')} onClick={() => handleFilterChange('Polished')}>Polished</button>
          <button className={filterButtonClass('Semi')} onClick={() => handleFilterChange('Semi')}>Semi</button>
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
    </div>
  );
};

export default ProductsPage;
