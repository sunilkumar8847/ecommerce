'use client';

import { fetchCategories } from "@/lib/api";
import { useEffect, useState } from "react";

export default function PopularCategories() {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  return (
    <div className="container mx-auto my-8">
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-500">Popular Categories</h1>
      </div>
      <div className="flex justify-between space-x-4 mx-16 my-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="w-40 h-40 bg-blue-100 flex items-center justify-center rounded-full shadow-md"
          >
            <p className="text-center capitalize text-sm font-semibold">{category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
