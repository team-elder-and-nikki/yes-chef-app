import express from 'express';
import {MongoClient, Collection} from "mongodb";

interface IMenuIngredient{
    ingredientName: string;
    ingredientId: string;
}

const router = express.Router();

interface IMenu extends Document {
    _id: string;
    name: string;
    ingredients: IMenuIngredient;
    quantity: number;
    price: number;
    prepTime: number;
    Image: string
}

async function initMenuFuncs(){

    // connect to DB
    const client: MongoClient = await MongoClient.connect(process.env.MONGO_URI!, {
        ssl: true, 
        connectTimeoutMS: 30000,
        socketTimeoutMS: 45000,
    });

    //init db by name
    const db = client.db("Point_of_sale_system");
    //init collection by name
    const collection:Collection<IMenu> = db.collection("Menu");

    router.get('/menu', async (req, res)=>{
        try{
            console.log('Starting fetching of ingredients');
    
            const ingredients = await collection.find({}).toArray();
    
            res.status(200).json(ingredients);
            console.log('Ingredients were successfully fetched!');
        } catch (err) {
            console.error('Failed to fetch ingredients: ', err);
            process.exit(1);
        }
    });

}

initMenuFuncs()

export default router;