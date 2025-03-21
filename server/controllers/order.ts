import express, { Router }  from "express";
import { Client_Connect } from "../../config/config.ts";
import type { ITicket } from "../../client/src/models/Ticket.ts";
import { Collection, ObjectId } from "mongodb";   

const router: Router = express.Router();

router.get("/orders", async (req, res) => {
 try {
   const client = await Client_Connect();
   const db = client.db("Point_of_sale_system");
   const collection = db.collection("Order");
   const orders = await collection.find().toArray();
   res.status(200).json(orders);
 } catch (err) {
   console.error(err);
   res.status(500).json({ error: 'Error fetching orders' });
 }
});


router.post("/orders", async (req, res) => {
 const { orderId, items, status } = req.body;

 try {
   const client = await Client_Connect();
   const db = client.db("Point_of_sale_system");
   const collection = db.collection("Order");
   const newOrder = await collection.insertOne({
     orderId, 
     items, 
     status,
     createdAt: new Date(),
     updatedAt: new Date()
   });
   res.status(201).json({ message: 'Order created successfully', order: newOrder });
 } catch (err) {
   console.error(err);
   res.status(400).json({ error: 'Error creating order' });
 }
});


router.patch("/orders/status", async (req, res) => {
 try {
   res.set('Access-Control-Allow-Origin', 'http://localhost:5173');

   const client = await Client_Connect();
   const db = client.db("Point_of_sale_system");
   const collection: Collection<ITicket> = db.collection("Order");

   const updatedOrder = await collection.findOneAndUpdate(
     { orderId: req.body.orderId},
     { $set: {status: req.body.status} },
   );

   res.status(200).json({ message: 'Order updated successfully', order: updatedOrder });
 } catch (err) {
   console.error(err);
   res.status(400).json({ error: 'Error updating order status' });
 }
});


export default router;