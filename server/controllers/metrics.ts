import express from "express";
import { Collection, ObjectId} from "mongodb";
import { Client_Connect } from "../../config/config.ts";
import type {IMenu} from "../../client/src/models/Menu.ts";
//will use in later iteration for ingredients
import type {IIngredient} from "../../client/src/models/Ingredient.ts";



const router = express.Router();


//metrics for menu items
router.get("/metrics/:id", async (req, res) => {
  try {
    //store item id into variable
    const id = new ObjectId(req.params.id)
    console.log("This is the menu itemID:",id, typeof id)
    // init db connection with MongoClient
    const client = await Client_Connect();
    //init db by name
    const db = client.db("Point_of_sale_system");
    //init collection by name
    const collection: Collection<IMenu> = db.collection("Menu");

    console.log("Starting fetching of ingredients");

    const ingredients = await collection.find({_id: id}).toArray();
    console.log(ingredients)
    res.status(200).json(ingredients);
    console.log("Ingredients were successfully fetched!");
  } catch (err) {
    console.error("Failed to fetch ingredients: ", err);
    process.exit(1);
  }
});
router.post("/metrics", async (req, res) => {
  console.log("it is on the post route")
      try {
        const ingredientNames=req.body.ing
        // init db connection with MongoClient
    const client = await Client_Connect();


    // init db by name
    const db = client.db("Inventory");
    //init collection by name
    const collection: Collection<IIngredient> = db.collection("Ingredients");

    console.log("Starting fetching of ingredients");

    //Find collection and convert to array
    // const ingredients = await collection.find({}).toArray();
    const newIngredients = await collection.find({
      name: { $in: ingredientNames }
    }).toArray();
      console.log("new", newIngredients)

        // console.log("Array of ing obj",ingredients)
  
      res.json(newIngredients)
  
      } catch (err) {
        console.error("Failed to fetch ingredients: ", err);
        process.exit(1);
      }
    });


export default router;