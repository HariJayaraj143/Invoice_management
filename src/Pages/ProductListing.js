import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import AddToCartModal from '../components/AddToCartModal';
import productsData from '../data'; // Mock data

const ProductListing = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(productsData.length / itemsPerPage);

  const currentProducts = productsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleViewProduct = (product) => {
    // Redirect to Thank You Page with product name
    window.location.href = `/thank-you?product=${product.name}`;
  };

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  return (
    <div className="product-listing">
      <div className="products-grid">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewProduct={handleViewProduct}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      <AddToCartModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default ProductListing;
