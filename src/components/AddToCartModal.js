import React from 'react'

const AddToCartModal = ({product, isOpen, onClose}) => {
  if (!isOpen) return null

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        <button onClick={onClose}>Confirm Add to Cart</button>
      </div>
    </div>
  )
}

export default AddToCartModal
