"use client"

import { useState, useEffect } from 'react';

const products = [
  { id: 1, name: "Gaming Mouse", description: "High precision and durability.", imageUrl: "assets/2.png" },
  { id: 2, name: "Mechanical Keyboard", description: "Smooth and responsive keys.", imageUrl: "assets/key.png" },
  { id: 3, name: "Gaming Headset", description: "Surround sound and noise cancellation.", imageUrl: "assets/1.png" },
];

function ProductSelectorBanner() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        const currentIndex = products.findIndex(product => product.id === selectedProduct.id);
        const nextIndex = (currentIndex + 1) % products.length;
        setSelectedProduct(products[nextIndex]);
        setAnimate(true);
      }, 50);
    }, 2000); // Change product every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [selectedProduct]);

  return (
    <div className="relative bg-gradient-to-b from-black to-[#8B0000] mb-8">
      {/* Hero Section */}
      <div
        className={`relative w-full h-96 flex items-center justify-center bg-cover bg-center transition-transform duration-500 ${animate ? 'slide-left' : ''}`}
      >
        <div className="flex items-center text-white max-w-screen-xl mx-auto px-4">
          <div className="flex-shrink-0 w-1/2 md:w-1/3">
            <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="w-full h-auto object-contain" />
          </div>
          <div className="ml-8 text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{selectedProduct.name}</h1>
            <p className="text-lg md:text-xl mb-2">{selectedProduct.description}</p>
            <p className="text-2xl font-bold mb-4">GET 40% OFF!</p>
          </div>
        </div>
      </div>

      {/* Product Selector */}
      <div className="mx-auto px-8 py-4 flex justify-center gap-4 bg-gray-900 text-white">
        {products.map((product) => (
          <button
            key={product.id}
            onClick={() => {
              setSelectedProduct(product);
              setAnimate(true);
            }}
            className={`px-4 py-2 rounded-md transition ${selectedProduct.id === product.id ? 'bg-[#8B0000]' : ' hover:bg-gray-600'}`}
          >
            {product.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductSelectorBanner;
