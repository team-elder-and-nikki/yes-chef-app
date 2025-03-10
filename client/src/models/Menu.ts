export interface IMenuIngredient {
    ingredientName: string;
    ingredientId: string;
}  

export interface IMenu extends Document {
    _id: string;
    name: string;
    category: string;
    ingredients: IMenuIngredient;
    quantity: number;
    price: number;
    prepTime: number;
    Image: string;
  }