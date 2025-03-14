import { useState } from "react";
import { CartTable } from "../components/CartTable";
import MenuCategoryNav from "../components/ui/CategoryNav";

import MenuCard from "@/components/MenuCard";
import { useCart } from "../context/CartContext";
import { useFetchMenu } from "../hooks/useFetchMenu"; // Import from the combined file
import { IMenu } from "@/models/Menu";

import NavBar from "@/components/NavBar";


export default function Menu() {
    const { menuItems, loading, error } = useFetchMenu();
    const [selectedCategory, setSelectedCategory] = useState("Appetizers");
    const { addToCart } = useCart();
    //filters menu items by category
    const filteredMenuItems = menuItems.filter((item) => item.category === selectedCategory);

    if (loading) return <p>Loading menu...</p>;
    if (error) return <p>Error: {error}</p>;

    const handleAddToCart = (item: IMenu) => {

        addToCart({
            id: item._id,
            menuItem: item.name,
            cartAmount: 1,
            price: item.price,
            ingredients: item.ingredients,
            quantity: item.quantity,

        });
    };

    return (

        <div className="">


            <div className="text-left py-4 bg-white shadow-md">
                <div className=" ml-2 text-xl font-bold text-gray-800"><h1>YES CHEF</h1></div>
            </div>



            <NavBar />
            <MenuCategoryNav onCategoryChange={setSelectedCategory} categories = {["Appetizers", "Pizza", "Pasta", "Entrees", "Desserts"]} />



            {/* Main Content */}
            <div className="container mx-auto md:pl-24 px-4 py-8 flex flex-col lg:flex-row gap-8 ">
                {/* Menu Items */}
                <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredMenuItems.map((item: IMenu) => (
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

                <div className="">
                    <CartTable />
                </div>

            </div>



        </div>
    );
}

