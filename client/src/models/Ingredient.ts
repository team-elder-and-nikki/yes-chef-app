export interface IIngredient extends Document {
    _id: string;
    name: string;
    unitCost: number;
    quantity: number;
    thresholdLevel: number;
    lastOrderDate: Date;
    orderQty: number
}
