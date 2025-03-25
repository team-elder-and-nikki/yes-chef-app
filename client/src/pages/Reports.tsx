import { useState, Suspense } from "react";
import { useNavigate } from 'react-router-dom';
import CategoryNav from "../components/CategoryNav";
import MenuCard from "@/components/MenuCard";
import  useFetchMenuItems  from "../hooks/useFetchMenu"; // Import from the combined file
import { IMenu } from "@/models/Menu";
import WasteTable from "@/components/WasteTable"
import FilteredMenuItems from "@/components/FilteredMenuItems";
import LoadingMenuItems from "@/components/Loading";


export default function Reports() {
    const { data: menuItems, isLoading, isError, error } = useFetchMenuItems();
    const [selectedCategory, setSelectedCategory] = useState("Appetizers");
    const navigate= useNavigate()

    //filters menu items by category
    const filteredMenuItems = menuItems.filter((item) => item.category === selectedCategory);
    const renderMetrics=(item: IMenu)=>{
        navigate(`metrics/${item._id}`)    

    }
    if (isLoading) return <p>Loading menu...</p>;
    if (isError) return <p>Error: {error.message}</p>;
    if (!menuItems) return <p>No menu items available.</p>;
    
    return (
        <div>
            <div>
                <CategoryNav 
                    onCategoryChange={setSelectedCategory} 
                    categories = {["Appetizers", "Pizza", "Pasta", "Entrees", "Desserts"]}
                />
                <div className="container mx-auto md:pl-24 px-0 md:px-4 py-16 md:py-8 flex flex-col lg:flex-row gap-8 ">
                    {/* Menu Items */}
                                   {/* Menu Items */}
                                   <Suspense fallback={<LoadingMenuItems />}>
                                       <FilteredMenuItems selectedCategory={selectedCategory} />
                                   </Suspense>
                        <WasteTable />
                </div>
            </div>

        </div>
    );
}

