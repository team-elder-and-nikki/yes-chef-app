// components/DishProfitability.tsx
import React from "react";
import { useFetchMenu } from "../../hooks/useFetchMenu" //Import from the combined file
import { IMenu } from "@/models/Menu";
import MenuCard from "@/components/MenuCard";



interface Ingredient {
  _id: string;
  name: string;
}

// interface Dish {
//   _id?: object;
//   category: string;
//   name: string;
//   ingredients?: Ingredient[];
//   quantity: string;
//   price?: string;
//   prepTime?: string;
// }

interface Item {
  id: string;
  menuItem: string;
  amount: number;
  price: number;
  ingredients: Ingredient[];
  quantity: number;
 }

interface ItemProfitabilityProps {
  item: Item[];
}

// function ItemProfitability({ items }: ItemProfitabilityProps) {
//   console.log(items); // Log the items prop

//   return (
//     <div className="bg-white shadow-lg rounded-lg p-6">
//       <h1 className="text-xl font-bold mb-4">Dish Profitability</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className="bg-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
//           >
//             <h2 className="text-lg font-semibold mb-2">
//               {item.name} - ${item.price}
//             </h2>
//             <ul className="text-sm mb-4">
//               {item.ingredients?.map((ingredient, i) => (
//                 <li key={i}>{ingredient.ingredientName}</li>
//               ))}
//             </ul>
//             <div className="border-t pt-2">
//               <p>Gross Profit: ${}</p>
//               <p>Expense: ${}</p>
//               <p>Net Profit: ${}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ItemProfitability;

export default function ItemProfitability() {
  const { menuItems, loading, error } = useFetchMenu();

  if (loading) return <p>Loading menu...</p>;
  if (error) return <p>Error: {error}</p>;

  // const handleAddToCart = (item: IMenu) => {

  //     addToCart({
  //         id: item._id,
  //         menuItem: item.name,
  //         cartAmount: 1,
  //         price: item.price,
  //         ingredients: item.ingredients,
  //         quantity: item.quantity,

  //     });
  // };

  return (
      <div className="">
          <div className="text-left py-4 bg-white shadow-md">
              <div className=" ml-2 text-xl font-bold text-gray-800"><h1>YES CHEF</h1></div>
          </div>
          {/* Main Content */}
          <div className="container mx-auto md:pl-24 px-4 py-8 flex flex-col lg:flex-row gap-8 ">
              {/* Menu Items */}
              <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {menuItems.map((item: IMenu) => (
                      <MenuCard
                          key={item._id}
                          menuName={item.name}
                          menuDescription={item.ingredients.map((i) => i.ingredientName).join(", ")}
                          menuPrice={`$${item.price.toFixed(2)}`}
                          image={item.image}
                          imageAlt={item.name}
                          onClickTrigger={() => handleAddToCart(item)}
                      />
                  ))}
              </div>
          </div>
      </div>
  );
}


