import { Document, Schema, model } from 'mongoose';
import type { Ingredient } from './Ingredient.ts';

interface Item {
 id: string;
 menuItem: string;
 amount: number;
 price: number;
 ingredients: Ingredient[];
 quantity: number;
}


export interface IOrder extends Document {
 orderId: string;
 createdAt: Date;
 updatedAt: Date;
 items: Item[];
 status: "unstarted" | "in progress" | "completed"; 
}


const ItemSchema = new Schema<Item>({
 id: { type: String, required: true },
 menuItem: { type: String, required: true },
 amount: { type: Number, required: true },
 price: { type: Number, required: true },
 ingredients: { type: [String], required: true },
 quantity: { type: Number, required: true }
});


const OrderSchema = new Schema<IOrder>({
 orderId: { type: String, required: true },
 items: { type: [ItemSchema], required: true },
 status: {
    type: String,
    enum: ["unstarted", "in progress", "completed"],
    default: "unstarted"
  },
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() } 
});


export default model<IOrder>('Order', OrderSchema);
