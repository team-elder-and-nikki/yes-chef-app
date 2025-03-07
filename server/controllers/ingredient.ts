import express from 'express';
import {MongoClient, Collection} from "mongodb";

const router = express.Router();

interface IIngredient extends Document {
    _id: string;
    name: string;
    unitCost: number;
    quantity: number;
    thresholdLevel: number;
}

async function initIngredientFuncs(){

    // connect to DB
    const client: MongoClient = await MongoClient.connect(process.env.MONGO_URI!, {
        ssl: true, 
        connectTimeoutMS: 30000,
        socketTimeoutMS: 45000,
    });

    //init db by name
    const db = client.db("Inventory");
    //init collection by name
    const collection:Collection<IIngredient> = db.collection("Ingredients");

    router.get('/ingredients', async (req, res)=>{
        try{
            console.log('Starting fetching of ingredients');
    
            //Find collection and convert to array
            const ingredients = await collection.find({}).toArray();
    
            res.status(200).json(ingredients);
            console.log('Ingredients were successfully fetched!');
            client.close();
        }catch(err){
            console.error('Failed to fetch ingredients: ', err);
            process.exit(1);
        }
    });

}

initIngredientFuncs()

export default router;