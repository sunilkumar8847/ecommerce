"use client"; // Add this line at the top

import { fetchSingleProduct } from "@/lib/api";
import Image from "next/image";
import React, { useState, useEffect } from "react";

// Define the type for the product data
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

const ProductPage = () => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const getProduct = async () => {
      const productDetails = await fetchSingleProduct();
      setProduct(productDetails);
    };
    getProduct();
  }, []);

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
