import { useState } from "react";
import { CartTable } from "../components/CartTable";
import MenuCategoryNav from "../components/MenuCategoryNav";

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

        <div>
            <NavBar />
            <MenuCategoryNav onCategoryChange={setSelectedCategory} />
            <div className="flex flex-wrap justify-center mt-4">
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
                <CartTable />
            </div>
        </div>
    );
}

