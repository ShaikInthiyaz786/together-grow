import React from "react";

const ProductCard = ({ image, name, originalPrice, discountedPrice }) => (
  <div className="card text-center h-100">
    <img 
      src={image} 
      alt={name} 
      className="card-img-top" 
      style={{ height: "200px", objectFit: "cover" }} 
    />
    <div className="card-body d-flex flex-column justify-content-between">
      <h5 className="card-title">{name}</h5>
      <div>
        <p className="text-muted text-decoration-line-through mb-1">Rs. {originalPrice}</p>
        <p className="text-danger fw-bold">Rs. {discountedPrice}</p>
      </div>
    </div>
  </div>
);

export default ProductCard;

