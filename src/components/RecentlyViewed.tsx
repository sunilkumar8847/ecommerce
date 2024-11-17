'use client';

import { fetchLimitedProducts } from "@/lib/api";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

export default function RecentlyViewed() {
  const [products, setProducts] = useState<Product[]>([]); // Use Product type

  useEffect(() => {
    fetchLimitedProducts(10).then(setProducts);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Recently Viewed</h2>
      <div className="grid grid-cols-5 gap-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 bg-white shadow-md rounded-lg">
            <Link href={`/product/${product.id}`}>
              <Image 
                src={product.image} 
                alt={product.title} 
                width={300} 
                height={300} 
                className="w-full h-40 object-contain mb-2" 
              />
              <h3 className="text-sm mt-2">{product.title}</h3>
              <p className="text-sm text-gray-600 mt-2">₹{product.price * 8}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
