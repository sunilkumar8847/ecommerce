"use client"; // Ensure this is added at the top to mark this as a client-side component

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { fetchSingleProduct } from "@/lib/api"; // Ensure this API function is properly imported
import Image from "next/image";

// Define the type for the product data
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query; // Get dynamic parameter from the URL
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      const getProduct = async () => {
        const productDetails = await fetchSingleProduct(id as string);
        setProduct(productDetails);
      };
      getProduct();
    }
  }, [id]); // Re-fetch product details when the id changes

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <Image src={product.imageUrl} alt={product.name} width={500} height={500} />
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductPage;
