// src/components/PopularProducts.tsx

'use client'; // Add this at the top of the file

import { fetchLimitedProducts } from "@/lib/api"
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Import pagination icons

export default function PopularProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    fetchLimitedProducts(15).then(setProducts); // Fetch the products
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 5, 0)); // Handle previous button click
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 5, products.length - 5)); // Handle next button click
  };

  return (
    <div className="container mx-auto my-8">
      <div className="flex justify-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-500">Popular Products</h2>
      </div>
      <div className="relative">
        <div className="flex space-x-4">
          {products.slice(startIndex, startIndex + 5).map((product) => (
            <div key={product.id} className="border p-4 rounded-md shadow-md w-1/5">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain mb-2"
              />
              <h3 className="text-sm font-medium">{product.title}</h3>
              <p className="text-gray-600 mt-2">₹{product.price}</p>
            </div>
          ))}
        </div>
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-md"
        >
          <FiChevronLeft />
        </button>
        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-md"
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}
