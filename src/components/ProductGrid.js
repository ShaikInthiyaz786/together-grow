import React from "react";
import ProductCard from "./ProductCard";
import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.jpg";
import product3 from "../assets/images/product3.webp";

const products = [
  {
    id: 1,
    name: "Stay Strong - Black",
    originalPrice: 799,
    discountedPrice: 420,
    image: product1,
  },
  {
    id: 2,
    name: "Stay Strong - White",
    originalPrice: 799,
    discountedPrice: 420,
    image: product2,
  },
  {
    id: 3,
    name: "Stay Strong - Black",
    originalPrice: 799,
    discountedPrice: 420,
    image: product3,
  },
  {
    id: 4,
    name: "Stay Strong - White",
    originalPrice: 799,
    discountedPrice: 420,
    image: product2,
  },
  {
    id: 5,
    name: "Stay Strong - Black",
    originalPrice: 799,
    discountedPrice: 420,
    image: product1,
  },
  {
    id: 6,
    name: "Stay Strong - White",
    originalPrice: 799,
    discountedPrice: 420,
    image: product2,
  },
  {
    id: 7,
    name: "Stay Strong - Black",
    originalPrice: 799,
    discountedPrice: 420,
    image: product3,
  },
  {
    id: 8,
    name: "Stay Strong - White",
    originalPrice: 799,
    discountedPrice: 420,
    image: product1,
  },
];

const ProductGrid = () => (
  <section className="py-4">
    <h3 className="text-center fw-bold mb-4">COLLECTIONS</h3>
    <div className="container">
      <div className="row g-4">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="col-12 col-sm-6 col-md-4 col-lg-3"
          >
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductGrid;

