import { Schema, model } from 'mongoose';
import { IIngredient } from '../../client/src/models/Ingredient';

const IngredientSchema: Schema = new Schema({
    _id: {type: String, required: true},
    name: {type: String, required: true},
    unitCost: {type: Number, required: true},
    quantity: {type: Number, required: true},
    thresholdLevel: {type: Number, required: true},
},{
    timestamps: true
});

export default model<IIngredient>('Ingredient', IngredientSchema);