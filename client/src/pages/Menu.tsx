
import { CartTable } from "../components/CartTable";
import { MenuItem } from "../components/MenuItemTest";
import MenuCategoryNav from "../components/ui/CategoryNav";
import NavBar from "@/components/NavBar";

export default function Menu() {
    return (
        <>
            <NavBar />
            <div className="md:ml-21"/*bump everything to the right when NavBar is fixed to the left*/>
                <MenuItem />
                <CartTable />
                <MenuCategoryNav onCategoryChange={() => {}} categories={["Appetizers", "Pizza", "Pasta", "Entrees", "Desserts"]}/>
            </div>
        </>
    )
}
