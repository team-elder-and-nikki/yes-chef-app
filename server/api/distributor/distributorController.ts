import express from 'express';
import { fetchIngredientData } from './distributorService.ts'; 
import { fallbackData } from './fallbackData.ts';

export const getDistributorIngredients = async (req, res) => {

  const { query } = req.params;
  try {
    //fetch ingredient data from service
    const data = await fetchIngredientData(query);

    //handle error and fallback logic
      if (!data.success || data.error) {
      return res.status(200).json({
        success: false,
        message: 'Failed to fetch data, showing fallback data',
        data: fallbackData.data 
      });
      }
      //successfully fetched data
      res.status(200).json({
        success: true,
        message: 'Data fetched successfully',
        data: data.data
      });
    
  } catch (error:any) {
    //set up response for network errors or API going offline
    if (error.code === 'ENOTFOUND' || error.response?.status === 503) {
      console.error('API is offline or unavailable:', error);
      return res.status(503).json({
        success: false,
        message: 'API is offline or unavailable',
        data: fallbackData.data
      });
      }
    //handle generic error response
    console.error('Error fetching distributor ingredients:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to fetch data' 
    });
  }
};