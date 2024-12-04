

import React from 'react';
import Image from 'next/image';
import "../style/Shop.css"

const Shop = () => {
  // Sample product images (Replace these with your actual image paths or URLs)
  const productImages = [
    '/Bag-01.jpg', // Replace with your product image URLs
    '/Bag-02.jpg',
    '/Bag-03.jpg',
    '/bag-04.jpg',
    '/Bag-05.jpg',
    '/Bag-06.jpg',
  ];

  return (
    <div className="shop-container">
      {/* Shop Title */}
      <h1 className="shop-title">
        Our Bags Collection
      </h1>

      {/* Product Grid */}
      <div className="product-grid">
        {productImages.map((src, index) => (
          <div key={index} className="product-card">
            <Image
              src={src}
              alt={`Product ${index + 1}`}
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
            <div className="product-card-overlay"></div>
            <div className="view-product-text">
              <span>View Product</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
