import { Schema, model } from 'mongoose';
import { Document } from 'mongoose';

export interface Ingredient extends Document {
    _id: string;
    name: string;
    unitCost: number;
    quantity: number;
    thresholdLevel: number;
    lastOrderDate: Date;
}

const IngredientSchema: Schema = new Schema({
    _id: {type: String, required: true},
    name: {type: String, required: true},
    unitCost: {type: Number, required: true},
    quantity: {type: Number, required: true},
    thresholdLevel: {type: Number, required: true},
    lastOrderDate:  {type: Date, required: true},
},{
    timestamps: true
});

export default model<Ingredient>('Ingredient', IngredientSchema);