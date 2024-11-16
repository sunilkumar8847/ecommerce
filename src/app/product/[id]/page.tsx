import { fetchSingleProduct } from "@/lib/api";
import Image from 'next/image';

export default async function ProductDetails({ params }: { params: { id: string } }) {
  const product = await fetchSingleProduct(params.id);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Image
          src={product.image}
          alt={product.title}
          width={500} // Adjust width as needed
          height={500} // Adjust height as needed
          className="w-full object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-lg font-semibold">Price: ${product.price}</p>
          <div className="flex space-x-4 mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
