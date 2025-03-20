import { useState, Suspense } from "react";
import { CartTable } from "../components/CartTable";
import MenuCategoryNav from "../components/MenuCategoryNav";
import FilteredMenuItems from "@/components/FilteredMenuItems";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
export default function Menu() {
    const [selectedCategory, setSelectedCategory] = useState("Appetizers");

    return (

        <div className="">
            <Header />
            <NavBar />
            <MenuCategoryNav onCategoryChange={setSelectedCategory} categories={["Appetizers", "Pizza", "Pasta", "Entrees", "Desserts"]} />
            {/* Main Content */}
            <div className="container mx-auto md:pl-24 px-4 py-8 flex flex-col lg:flex-row gap-8 ">
                {/* Menu Items */}
                <Suspense fallback={<div className="text-red-500">kill me please...</div>}>
                    <FilteredMenuItems selectedCategory={selectedCategory} />
                </Suspense>
                <div className="">
                    <CartTable />
                </div>

            </div>

        </div>
    );
}

