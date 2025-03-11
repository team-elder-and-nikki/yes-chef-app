import express from "express";
import { Collection } from "mongodb";
import { Client_Connect } from "../../config/config.ts";

import type { IIngredient } from "../../client/src/models/Ingredient.ts";

const router = express.Router();

router.get("/ingredients", async (req, res) => {
  try {
    //allows cors for front end api
    res.set('Access-Control-Allow-Origin', 'http://localhost:5173');
    
    // init db connection with MongoClient
    const client = await Client_Connect();


    // init db by name
    const db = client.db("Inventory");
    //init collection by name
    const collection: Collection<IIngredient> = db.collection("Ingredients");

    console.log("Starting fetching of ingredients");

    //Find collection and convert to array
    const ingredients = await collection.find({}).toArray();

    res.status(200).json(ingredients);
    console.log("Ingredients were successfully fetched!");
    client.close();
  } catch (err) {
    console.error("Failed to fetch ingredients: ", err);
    process.exit(1);
  }
});

export default router;
