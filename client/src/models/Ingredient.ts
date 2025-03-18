export interface IIngredient {
    _id: string;
    name: string;
    unitCost: number;
    quantity: number;
    thresholdLevel: number;
    lastOrderDate: Date;
    orderQty: number
}
