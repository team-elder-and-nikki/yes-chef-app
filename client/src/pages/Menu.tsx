import { useState, Suspense } from "react";
import { CartTable } from "../components/CartTable";
import MenuCategoryNav from "../components/MenuCategoryNav";
import FilteredMenuItems from "@/components/FilteredMenuItems";
// import { useFetchMenu } from "../hooks/useFetchMenu"; // Import from the combined file
import { IMenu } from "@/models/Menu";
import LoadingMenuItems from "@/components/Loading";

export default function Menu() {
    const [selectedCategory, setSelectedCategory] = useState("Appetizers");

    return (

        <div className="">
            <MenuCategoryNav onCategoryChange={setSelectedCategory} categories={["Appetizers", "Pizza", "Pasta", "Entrees", "Desserts"]} />
            {/* Main Content */}
            <div className="container mx-auto md:pl-24 px-4 py-8 flex flex-col lg:flex-row gap-8 ">
                {/* Menu Items */}
                <Suspense fallback={<LoadingMenuItems />}>
                    <FilteredMenuItems selectedCategory={selectedCategory} />
                </Suspense>
                <div className="">
                    <CartTable />
                </div>

            </div>

        </div >
    );
}

