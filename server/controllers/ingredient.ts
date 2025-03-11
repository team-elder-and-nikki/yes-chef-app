import express from "express";
import { Collection } from "mongodb";
import { Client_Connect } from "../../config/config.ts";
import type { IIngredient } from "../../client/src/models/Ingredient.ts";
import type { IMenu, IMenuIngredient } from "../../client/src/models/Menu.ts";

const router = express.Router();

router.get("/ingredients", async (req, res) => {
  try {
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

router.put("/updateIngredientQuantity", async (req, res) => {
  try {
    if (req.body.status === "completed") {
      // init db connection with MongoClient
      const client = await Client_Connect();

      //init db by name
      const db = client.db("Inventory");
      //init collection by name
      const collection: Collection<IIngredient> = db.collection("Ingredients");

      // go through each order
      req.body.items.map((item: IMenu) => {
        // go through each ingredient
        item.ingredients.map(async (ingredient: IMenuIngredient) => {
          await collection.updateOne(
            //filter by the ingredient name in the dish
            { name: ingredient.ingredientName },
            //increase by negative one (decrease by 1)
            { $inc: { quantity: -1 * (item.cartAmt ?? 1) } }
          );
        });
      });

      res.status(200).json("Ingredients quantities were successfully updated");
    } else {
      res.status(200).json("Order needs to be completed");
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});

export default router;
