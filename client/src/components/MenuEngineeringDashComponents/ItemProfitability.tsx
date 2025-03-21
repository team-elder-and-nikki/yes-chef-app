import { IMenu } from "@/models/Menu";
import ItemProfitabilityCard from "@/components/ItemProfitabilityCard";
import useFetchMenuItems from "@/hooks/useFetchMenu";
interface Ingredient {
    _id: string;
    name: string;
}

interface Item {
    id: string;
    menuItem: string;
    amount: number;
    price: number;
    ingredients: Ingredient[];
    quantity: number;
}

export default function ItemProfitability() {
    const { data: menuItems } = useFetchMenuItems();

    return (
        <div className="">
            {/* Main Content */}
            <div className="container mx-auto md:pl-24 px-4 py-8 flex flex-col lg:flex-row gap-8 ">
                {/* Menu Items */}
                <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {menuItems.map((item: IMenu) => (
                        <ItemProfitabilityCard
                            key={item._id}
                            menuName={item.name}
                            menuDescription={item.ingredients.map((i) => i.ingredientName).join(", ")}
                            menuPrice={`$${item.price.toFixed(2)}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}


