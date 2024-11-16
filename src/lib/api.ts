// src/lib/api.ts
const BASE_URL = 'https://fakestoreapi.com/products';

export const fetchAllProducts = async () => {
  const response = await fetch(`${BASE_URL}`);
  return response.json();
};

export const fetchSingleProduct = async (id: string | number) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  return response.json();
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
