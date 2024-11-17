import { fetchSingleProduct } from "@/lib/api";
import Image from "next/image";

// Remove async here, just use params directly
export default function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;  // Destructure params directly

  // Fetch the product details (this part is async, so this function remains async)
  const fetchProductDetails = async () => {
    try {
      const product = await fetchSingleProduct(id);  // Fetch product based on id
      return product;
    } catch (error) {
      return { error: true, message: (error as Error).message };
    }
  };

  // Call the async function to fetch product details
  const [product, setProduct] = React.useState<any>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
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
  }, [id]);

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
