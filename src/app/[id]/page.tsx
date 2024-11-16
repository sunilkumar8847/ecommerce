import React from "react";

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 object-contain"
        />
        <div className="md:ml-6">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold mb-4">₹{product.price}</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">
            Add to Cart
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
