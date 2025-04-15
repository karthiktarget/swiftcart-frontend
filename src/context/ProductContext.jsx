import axios from 'axios';

const API_URL = 'http://localhost:8080/api/products';

export const fetchProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
export const fetchProductsByCategory = async (category) => {
    const res = await axios.get(`http://localhost:8080/api/products/category/${category}`);
    return res.data;
  };
