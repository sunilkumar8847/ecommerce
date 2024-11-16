// src/components/RecentlyViewed.tsx

'use client'; // Add this at the top of the file

import { fetchLimitedProducts } from "@/lib/api";
import { useEffect, useState } from "react";

export default function RecentlyViewed() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchLimitedProducts(10).then(setProducts);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Recently Viewed</h2>
      <div className="grid grid-cols-5 gap-4">
        {products.map((product: any) => (
          <div key={product.id} className="p-4 bg-white shadow-md rounded-lg">
            <img src={product.image} alt={product.title} className="w-full h-32 object-cover" />
            <h3 className="text-sm mt-2">{product.title}</h3>
            <p className="text-sm text-gray-600 mt-2">₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
