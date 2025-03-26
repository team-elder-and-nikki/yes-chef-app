import express from "express";
import { Collection, ObjectId} from "mongodb";
import { Client_Connect } from "../../config/config.ts";
import type {IMenu} from "../../client/src/models/Menu.ts";
import type {IIngredient} from "../../client/src/models/Ingredient.ts";



const router = express.Router();


//metrics for menu items
router.get("/metrics/:id", async (req, res) => {
  try {
    //store item id into variable
    const id = new ObjectId(req.params.id)
    
    // init db connection with MongoClient
    const client = await Client_Connect();
    //init db by name
    const db = client.db("Point_of_sale_system");
    //init collection by name
    const collection: Collection<IMenu> = db.collection("Menu");

    console.log("Starting fetching of ingredients");

    const ingredients = await collection.find({_id: id}).toArray();

    res.status(200).json(ingredients);
    console.log("Ingredients were successfully fetched!");
  } catch (err) {
    console.error("Failed to fetch ingredients: ", err);
    process.exit(1);
  }
});
router.post("/metrics", async (req, res) => {
    try {
        const ingredientNames=req.body.ing
        // init db connection with MongoClient
     const client = await Client_Connect();

      // init db by name
      const db = client.db("Inventory");
      //init collection by name
      const collection: Collection<IIngredient> = db.collection("Ingredients");
      //query for all of the idgredient objects
      const newIngredients = await collection.find({
        name: { $in: ingredientNames }
      }).toArray();
      //returns array of bjects
      res.json(newIngredients)
      } catch (err) {
        console.error("Failed to fetch ingredients: ", err);
        process.exit(1);
      }
    });


export default router;