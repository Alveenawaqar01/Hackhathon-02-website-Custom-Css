import React from 'react';
import Image from 'next/image';
import  "../style/Sale.css"

const Sale = () => {
  return (
    <div className="sale-page">
      {/* Header Section */}
      <header className="sale-header">
        <h1>Classic Bags Collection - Limited Time Sale!</h1>
      </header>

      {/* Main Section */}
      <main className="sale-main">
        <div className="sale-grid">
          {/* Bag 1 */}
          <div className="sale-card">
            <Image 
              src="/sale1.jpg" 
              alt="Classic Leather Handbag"
              width={300} 
              height={300} 
              className="rounded-lg object-cover"
            />
            <h3>Black Elegant</h3>
            <div className="price">$129.99</div>
            <a href="#" className="buy-now">Buy Now</a>
          </div>

          {/* Bag 2 */}
          <div className="sale-card">
            <Image 
              src="/sale2.jpg" 
              alt="Vintage Messenger Bag" 
              width={300} 
              height={300} 
              className="rounded-lg object-cover"
            />
            <h3>Stylish Beige</h3>
            <div className="price">$99.99</div>
            <a href="#" className="buy-now">Buy Now</a>
          </div>

          {/* Bag 3 */}
          <div className="sale-card">
            <Image 
              src="/sale3.jpg" 
              alt="Chic Tote Bag" 
              width={300} 
              height={300} 
              className="rounded-lg object-cover"
            />
            <h3>Luxurious Perfect</h3>
            <div className="price">$149.99</div>
            <a href="#" className="buy-now">Buy Now</a>
          </div>

          {/* Bag 4 */}
          <div className="sale-card">
            <Image 
              src="/sale-4.JPG" 
              alt="Designer Shoulder Bag" 
              width={300} 
              height={300} 
              className="rounded-lg object-cover"
            />
            <h3>Olive Green</h3>
            <div className="price">$199.99</div>
            <a href="#" className="buy-now">Buy Now</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sale;
