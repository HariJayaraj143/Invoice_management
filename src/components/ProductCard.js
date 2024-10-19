import React from 'react'

const ProductCard = ({product, onViewProduct, onAddToCart}) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => onViewProduct(product)}>View Product</button>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  )
}

export default ProductCard
