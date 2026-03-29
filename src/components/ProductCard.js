import React from 'react';
import './ProductCard.css';
import '../App.css'

const ProductCard = ({ product, index }) => {
  const isNew = index === 0;
  const isOutOfStock = index === 1;

  return (
    <div className="product-card">

      <div className="image-container">
        {isNew && <span className="badge-new">NEW PRODUCT</span>}

        {isOutOfStock && (
          <div className="out-of-stock-overlay">
            <span>OUT OF STOCK</span>
          </div>
        )}

        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-details">
        <h3 className="product-title">{product.title}</h3>

        <div className="card-footer">
          <p className="pricing-note">
            <span className="sign-in-link">Sign in</span> or Create an account to see pricing
          </p>

          <span className="heart-icon">♡</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;