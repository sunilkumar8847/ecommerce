'use client';

import { fetchLimitedProducts } from "@/lib/api";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

export default function PopularProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    fetchLimitedProducts(15).then(setProducts);
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 5, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 5, products.length - 5));
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
              <Link href={`/product/${product.id}`}>
                <Image 
                  src={product.image} 
                  alt={product.title} 
                  width={300} 
                  height={300} 
                  className="w-full h-40 object-contain mb-2" 
                />
                <h3 className="text-sm font-medium">{product.title}</h3>
                <p className="text-gray-600 mt-2">₹{product.price * 8}</p>
              </Link>
            </div>
          ))}
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-md"
        >
          <FiChevronLeft />
        </button>
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
