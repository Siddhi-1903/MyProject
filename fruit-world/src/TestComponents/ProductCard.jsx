import React, { useState } from "react";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(0);

  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <div className="product-card">
      <div className="product-media">
        <img
          src={product.image}
          alt={product.name}
          className="product-img"
        />
        <div className="delivery-chip">10 MINS</div>
    
      </div>

      <div className="product-body">
        <div className="row">
          <h3 className="product-title">{product.name}</h3>
          {product.variant && (
            <span className="variant-badge">{product.variant}</span>
          )}
        </div>

        {product.subtext && (
          <p className="product-subtext">{product.subtext}</p>
        )}

        {product.label && (
          <div className="value-label">{product.label}</div>
        )}

        <div className="weight-row">
          <label className="weight">Select weight:</label>
          <select className="weight-select">
            {product.weights && product.weights.map((w, i) => (
              <option key={i} value={w}>{w}</option>
            ))}
          </select>
        </div>

        <div className="price-row">
          <div className="price">
            <span className="currency"><b>₹</b></span>{product.price}
            
          </div>
        </div>

        {quantity === 0 ? (
          <button className="add-btn" onClick={increaseQty}>Add</button>
        ) : (
          <div className="qty-stepper">
            <button className="qty-btn" onClick={decreaseQty}>-</button>
            <div className="qty-value">{quantity}</div>
            <button className="qty-btn" onClick={increaseQty}>+</button>
          </div>
        )}
      </div>
    </div>
  );
}