import axios from 'axios';

const BASE_URL = 'https://api.spoonacular.com';
const API_KEY = process.env.SPOONACULAR_API_KEY;

//set up backup data for API going offline
const backupData = {
  fallback: true,
  data: [
    {
      id: 1,
      name: 'Product 1',
      description: 'Mock product 1',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Mock Product 2',
    },
  ],
};

export const fetchProductData = async (query: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/food/products/search`, {
      params: {
        query,
        apiKey: API_KEY,
        number: 1,
      },
    });
    
    return response.data.products;  
  } catch (error) {
    console.error('Error fetching data:', error);
    return backupData.data;  
  }
};
