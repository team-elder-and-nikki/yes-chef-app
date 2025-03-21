import { useState, Suspense } from "react";
import { CartTable } from "../components/CartTable";

import FilteredMenuItems from "@/components/FilteredMenuItems";

import CategoryNav from "../components/CategoryNav";

import { IMenu } from "@/models/Menu";
import LoadingMenuItems from "@/components/Loading";

export default function Menu() {

    const [selectedCategory, setSelectedCategory] = useState("Appetizers");

    return (

        <div className="">
            <CategoryNav
                onCategoryChange={setSelectedCategory}
                categories={["Appetizers", "Pizza", "Pasta", "Entrees", "Desserts"]}
            />
            <div className="container mx-auto md:pl-24 px-4 py-8 flex flex-col lg:flex-row gap-8 ">
                {/* Menu Items */}
                <Suspense fallback={<LoadingMenuItems />}>
                    <FilteredMenuItems selectedCategory={selectedCategory} />
                </Suspense>
                <CartTable />

            </div>
        </div >
    );
}
