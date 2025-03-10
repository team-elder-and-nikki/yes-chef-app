import express from 'express';
import { MongoClient, Collection } from 'mongodb';

const router = express.Router();

interface Ingredient extends Document {
  _id: string;
  name: string;
  unitCost: number;
  quantity: number;
  thresholdLevel: number;
}

// Keep the MongoClient instance persistent
let client: MongoClient;
let collection: Collection<Ingredient>;

async function initIngredientFuncs() {
  try {
    // Connect to MongoDB once when the server starts
    client = await MongoClient.connect(process.env.MONGO_URI!, {
      ssl: true,
      connectTimeoutMS: 30000,
      socketTimeoutMS: 45000,
    });

    // Init DB and collection
    const db = client.db('Inventory');
    collection = db.collection('Ingredients');
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
}

router.get('/ingredients', async (req, res) => {
  try {
    console.log('Starting fetching of ingredients');

    const ingredients = await collection.find({}).toArray();

    res.status(200).json(ingredients);
    console.log('Ingredients were successfully fetched!');
  } catch (err) {
    console.error('Failed to fetch ingredients: ', err);
    res.status(500).json({ error: 'Failed to fetch ingredients' });
  }
});

initIngredientFuncs();

export default router;
