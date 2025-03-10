import express from "express";
import { Collection } from "mongodb";
import { Client_Connect } from "../../config/config.ts";
import {IMenu} from "../../client/src/models/Menu.ts";

const router = express.Router();

router.get("/menu", async (req, res) => {
  try {
    // init db connection with MongoClient
    const client = await Client_Connect();
    //init db by name
    const db = client.db("Point_of_sale_system");
    //init collection by name
    const collection: Collection<IMenu> = db.collection("Menu");

    console.log("Starting fetching of ingredients");

    const ingredients = await collection.find({}).toArray();

    res.status(200).json(ingredients);
    console.log("Ingredients were successfully fetched!");
  } catch (err) {
    console.error("Failed to fetch ingredients: ", err);
    process.exit(1);
  }
});

export default router;
