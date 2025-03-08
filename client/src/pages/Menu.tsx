
import { CartTable } from "../components/CartTable";
import { MenuItem } from "../components/MenuItemTest";
import MenuCategoryNav from "../components/ui/MenuCategoryNav";
import NavBar from "@/components/NavBar";

export default function Menu() {
    return (
        <>
            <NavBar />
            <h1>Menu</h1>
            <MenuItem />
            <CartTable />
            <MenuCategoryNav onCategoryChange={() => {}} />
        </>
    )
}
