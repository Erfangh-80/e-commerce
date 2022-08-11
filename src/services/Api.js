import axios from "axios";

const BASE_URL = "http://fakestoreapi.com";

const getProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};

const getProduct = async (id) => {
  const response = await axios.get(`${BASE_URL}/products/${id}`);
  return response.data;
};

const getLimtProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products?limit=5`);
  return response.data;
};

const getCategoryProducts = async (categoryName) => {
  const response = await axios.get(
    `${BASE_URL}/products/category/${categoryName}`
  );
  return response.data;
};

export { getProducts, getProduct, getLimtProducts, getCategoryProducts };
