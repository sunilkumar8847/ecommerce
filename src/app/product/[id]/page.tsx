import { fetchSingleProduct } from "@/lib/api";
import Image from "next/image";

// Mark the function as async to handle params correctly
export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  // Await params before destructuring it
  const { id } = await params;

  // Fetch the product details
  let product;
  try {
    product = await fetchSingleProduct(id);
  } catch (error) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-xl font-bold text-red-500">Error fetching product details</h1>
        <p className="text-gray-600">{(error as Error).message}</p>
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
