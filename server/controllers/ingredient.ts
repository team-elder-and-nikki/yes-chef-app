import express from "express";
import { MongoClient, Collection } from "mongodb";

const router = express.Router();

interface IIngredient extends Document {
  _id: string;
  name: string;
  unitCost: number;
  quantity: number;
  thresholdLevel: number;
}

export interface IMenuIngredient {
  ingredientName: string;
  ingredientId: string;
}

export interface IMenu extends Document {
  _id: string;
  name: string;
  category: string;
  ingredients: IMenuIngredient[];
  quantity: number;
  price: number;
  prepTime: number;
  Image: string;
  cartAmt?: number;
}

async function initIngredientFuncs() {
  // connect to DB
  const client: MongoClient = await MongoClient.connect(
    process.env.MONGO_URI!,
    {
      ssl: true,
      connectTimeoutMS: 30000,
      socketTimeoutMS: 45000,
    }
  );

  //init db by name
  const db = client.db("Inventory");
  //init collection by name
  const collection: Collection<IIngredient> = db.collection("Ingredients");

  router.get("/ingredients", async (req, res) => {
    try {
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
}

initIngredientFuncs();

router.put("/updateIngredientQuantity", async (req, res) => {
  try {
    if (req.body.status === "completed") {
      // connect to DB
      const client: MongoClient = await MongoClient.connect(
        process.env.MONGO_URI!,
        {
          ssl: true,
          connectTimeoutMS: 30000,
          socketTimeoutMS: 45000,
        }
      );

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
