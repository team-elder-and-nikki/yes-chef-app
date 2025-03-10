import express from "express";
import { MongoClient, Collection } from "mongodb";

const router = express.Router();

router.post("/addToKitchen", async (req, res) => {
  try {
    const client: MongoClient = await MongoClient.connect(
      process.env.MONGO_URI!,
      {
        ssl: true,
        connectTimeoutMS: 30000,
        socketTimeoutMS: 45000,
      }
    );

    //init db by name
    const db = client.db("Kitchen");
    //init collection by name
    const collection: Collection = db.collection("Cart");

    console.log("Starting to add to cart");

    console.log(req.body);
    //Find collection and convert to array
    const menuItem = await collection.insertOne({
      name: req.body.name,
      ingredients: req.body.ingredients,
      category: req.body.category,
      quantity: req.body.quantity,
      price: req.body.price,
      prepTime: req.body.prepTime,
      image: req.body.image,
    });

    res.status(200).json({message: "Menu item was successfully added to the cart.", menuItem});
    client.close();
  } catch (err) {
    console.error("Failed to add to kitchen ", err);
    process.exit(1);
  }
});

export default router;