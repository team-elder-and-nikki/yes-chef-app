// components/DishProfitability.tsx
import React from "react";

interface Ingredient {
  ingredientName: string;
  ingredientId: string;
}

interface Dish {
  _id?: object;
  category: string;
  name: string;
  ingredients?: Ingredient[];
  quantity: string;
  price?: string;
  prepTime?: string;
}

interface DishProfitabilityProps {
  dishes: Dish[];
}

function DishProfitability({ dishes }: DishProfitabilityProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-xl font-bold mb-4">Dish Profitability</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dishes.map((dish, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-lg font-semibold mb-2">
              {dish.name} - ${dish.price}
            </h2>
            <ul className="text-sm mb-4">
              {dish.ingredients?.map((ingredient, i) => (
                <li key={i}>{ingredient.ingredientName}</li>
              ))}
            </ul>
            <div className="border-t pt-2">
              <p>Gross Profit: ${}</p>
              <p>Expense: ${}</p>
              <p>Net Profit: ${}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DishProfitability;
