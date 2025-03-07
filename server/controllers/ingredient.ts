import express from 'express';
import Ingredient from '../models/Ingredient.ts';

const router = express.Router();

router.get('/ingredients', async (req, res)=>{
    try{
        console.log('Starting fetching of ingredients');

        const ingredients = await Ingredient.find();

        res.status(200).json(ingredients);
        console.log('Ingredients were successfully fetched!');
    }catch(err){
        console.error('Failed to fetch ingredients: ', err);
		process.exit(1);
    }
});

export default router;