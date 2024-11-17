import { fetchSingleProduct } from "@/lib/api";
import Image from "next/image";

export default async function ProductDetails({
    params,
}: {
    params: { id: string };
}) {
    let product;
    try {
        product = await fetchSingleProduct(params.id);
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
                <div className="h-80 w-80">
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={400}
                        height={400}
                        className="w-full object-cover"
                        priority
                    />
                </div>
                <div className="ml-0 mt-2">
                    <h1 className="text-2xl font-bold">{product.title}</h1>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                    <p className="text-lg font-semibold mt-2">Price: ₹{product.price * 8}</p>
                    <p className="text-sm text-orange-500 font-bold mt-4">Category: {product.category}</p>
                    <div className="flex space-x-4 mt-6">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded transform transition duration-300 ease-in-out hover:scale-105">
                            Add to Cart
                        </button>

                        <button className="bg-green-500 text-white px-4 py-2 rounded transform transition duration-300 ease-in-out hover:scale-105">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
