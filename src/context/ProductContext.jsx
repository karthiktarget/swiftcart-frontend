import axios from 'axios';

const API_URL = 'http://localhost:8080/api/products';

export const fetchProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchProductsByCategory = async (category, page = 0) => {
  const response = await axios.get(`${API_URL}/category`, {
    params: {
      type: category,
      page: page,
    },
  });
  return response.data;
};
