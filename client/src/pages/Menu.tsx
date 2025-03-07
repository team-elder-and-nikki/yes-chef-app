
import { CartTable } from "../components/CartTable";
import { MenuItem } from "../components/MenuItemTest";
import MenuCategoryNav from "../components/ui/MenuCategoryNav";

export default function Menu() {
    return (
        <>
            <h1>Menu</h1>
            <MenuItem />
            <CartTable />
            <MenuCategoryNav onCategoryChange={() => {}} />
        </>
    )
}
       
       