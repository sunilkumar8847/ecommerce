import { fetchSingleProduct } from "@/lib/api";
import Image from "next/image";
import React, { useState, useEffect } from "react";

// Define the type for the product data
interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

// Define the component
export default function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  // Set state with appropriate types
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch product details function
  const fetchProductDetails = async () => {
    try {
      const productData = await fetchSingleProduct(id);  // Fetch the product based on id
      return productData;
    } catch (error) {
      return { error: true, message: (error as Error).message };
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      const result = await fetchProductDetails();
      if (result.error) {
        setError(result.message);
      } else {
        setProduct(result);
      }
      setLoading(false);
    };
    
    getProduct();
  }, [id]); // Dependency array now correctly includes 'id'

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-xl font-bold text-red-500">Error fetching product details</h1>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
          className="w-full object-cover"
          priority
        />
        <div className="ml-4 mt-2">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-lg font-semibold mt-2">Price: ₹{product.price * 8}</p>
          <p className="text-sm text-orange-500 font-bold mt-4">Category: {product.category}</p>
          <div className="flex space-x-4 mt-6">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
