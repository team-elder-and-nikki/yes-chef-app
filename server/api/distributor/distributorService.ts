import axios from 'axios';
import { fallbackData } from './fallbackData.ts';

const BASE_URL = 'https://api.spoonacular.com';
const API_KEY = process.env.SPOONACULAR_API_KEY;

export const fetchIngredientData = async (query: string) => {
  try {
    //fetch data from Spoonacular API
    const response = await axios.get(`${BASE_URL}/food/ingredients/search`, {
      params: {
        query,
        apiKey: API_KEY,
        number: 1,
      },
    });
      //check if no results returned
      if (!response.data.results || response.data.results.length === 0) {
      return {
        success: false,
        error: true,
        message: `No ingredients found for query "${query}".`,
        data: fallbackData.data
      };
    }
    //return data if results are found
    return {
      success: true,
      data: response.data.results 
    };
 
  } catch (error) {
    console.error('Error fetching data:', error);
    
    //return fallback data in case of error
    return {
      success: false,
      fallback: true,
      data: fallbackData.data,
      message: 'Using backup data due to API error'
    }; 
  }
};