import express from 'express';
import { getProductData } from './distributorController.ts';

const router = express.Router();

router.get('/products', getProductData);

export default router;
