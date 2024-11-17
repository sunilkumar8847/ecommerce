const BASE_URL = 'https://fakestoreapi.com/products';

export const fetchAllProducts = async () => {
  const response = await fetch(`${BASE_URL}`);
  return response.json();
};

export const fetchSingleProduct = async (id: string | number) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch product with id ${id}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};


export const fetchLimitedProducts = async (limit: number) => {
  const response = await fetch(`${BASE_URL}?limit=${limit}`);
  return response.json();
};

export const fetchCategories = async () => {
  const response = await fetch(`${BASE_URL}/categories`);
  return response.json();
};

export const fetchProductsByCategory = async (category: string) => {
  const response = await fetch(`${BASE_URL}/category/${category}`);
  return response.json();
};
