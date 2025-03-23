export interface IMenuIngredient {
    ingredientName: string;
    ingredientId: string;
}

export interface IMenu {
    _id: string;
    name: string;
    category: string;
    ingredients: IMenuIngredient[];
    quantity: number;
    price: number;
    prepTime: number;
    cartAmount: number;
    image: string;
}
