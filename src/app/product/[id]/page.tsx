import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

interface ProductPageProps {
  id: string;
}

const ProductPage = ({ id }: ProductPageProps) => {
  const router = useRouter();

  // Make sure the page is loaded and the router is ready
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product {id}</h1>
      {/* Render your product details here */}
    </div>
  );
};

// You can use getServerSideProps or getStaticProps depending on your use case
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // Destructure the params to get the id
  const { id } = params as { id: string };

  // Fetch product data using id (e.g., from an API or database)
  // const product = await fetchProduct(id);

  return {
    props: {
      id,
      // product,  // Include other data you fetched
    },
  };
};

export default ProductPage;
