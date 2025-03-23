import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import CategoryNav from "../components/CategoryNav";
import MenuCard from "@/components/MenuCard";
import { useFetchMenu } from "../hooks/useFetchMenu"; // Import from the combined file
import { IMenu } from "@/models/Menu";






export default function Reports() {
    const { menuItems, loading, error } = useFetchMenu();
    const [selectedCategory, setSelectedCategory] = useState("Appetizers");
    const navigate= useNavigate()

    //filters menu items by category
    const filteredMenuItems = menuItems.filter((item) => item.category === selectedCategory);
    const renderMetrics=(item: IMenu)=>{
        navigate(`metrics/${item._id}`)    

    }
    if (loading) return <p>Loading menu...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="">
            <CategoryNav 
                onCategoryChange={setSelectedCategory} 
                categories = {["Appetizers", "Pizza", "Pasta", "Entrees", "Desserts"]}
            />

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
                            onClickTrigger={() => renderMetrics(item)}

                        />
                    ))}
                </div>

            </div>

        </div>
    );
}

