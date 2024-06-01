import axios from 'axios';

const API_URL = process.env.API_URL;

export const fetchProducts = async (category, company) => {
  try {
    const response = await axios.get(`${API_URL}/products`, {
      params: { category, company },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
