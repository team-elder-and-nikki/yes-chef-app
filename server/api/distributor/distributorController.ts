import express from 'express';
import { fetchProductData } from './distributorService.ts'; 

export const getProductData = async (req, res) => {
  try {
    const query = req.query.query as string || 'products';
    const products = await fetchProductData(query);
    res.json({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};