import Product from '../components/ProductsPage/Product';
import products from '../data/products';

const ProductsPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 mt-20">
      <h2 className="text-3xl font-bold mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Product key={product.code} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
