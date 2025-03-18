import express from "express";
import {Client_Connect} from "../../config/config.ts";

const router = express.Router();

router.post("/addToKitchen", async (req, res) => {
  try {
    //connect to the db
    const client = await Client_Connect();
    //init db by name
    const db = client.db("Kitchen");
    //init collection by name
    const collection = db.collection("Cart");

    console.log("Starting to add to cart");

    //Find collection and convert to array
    const menuItem = await collection.insertOne({
      cartAmt: req.body.cartAmt,
      name: req.body.name,
      ingredients: req.body.ingredients,
      category: req.body.category,
      quantity: req.body.quantity,
      price: req.body.price,
      prepTime: req.body.prepTime,
      image: req.body.image,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    console.log(menuItem.insertedId);  // MongoDB's generated _id


    res.status(200).json({message: "Menu item was successfully added to the cart.", menuItem});
    client.close();
  } catch (err) {
    console.error("Failed to add to kitchen ", err);
    process.exit(1);
  }
});

export default router;