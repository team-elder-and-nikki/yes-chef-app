import express from 'express';
import { getDistributorIngredients } from './distributorController.ts';

const router = express.Router();

// router.get('/api/distributor', getDistributorIngredients);
router.get('/api/distributor/search/:query', getDistributorIngredients);

export default router;