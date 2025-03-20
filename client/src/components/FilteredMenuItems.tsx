import { useQuery } from "@tanstack/react-query";
import MenuCard from "@/components/MenuCard";
import { useCart } from "../context/CartContext";
import { IMenu } from "@/models/Menu";
import useFetchMenuItems from "@/hooks/useFetchMenu";

export default function FilteredMenuItems({ selectedCategory }: { selectedCategory: string }) {
    const { data: menuItems } = useFetchMenuItems();
    const filteredMenuItems = menuItems.filter((item) => item.category === selectedCategory);
    const { addToCart } = useCart();

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

    )
}