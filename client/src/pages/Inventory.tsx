
import { MobileInventoryCard } from "@/components/MobileInventoryCard";
import InventoryTable from "../components/InventoryTable";
import NavBar from "@/components/NavBar"


export default function Inventory(){
    return(
        <>
         <NavBar />
            <div className="md:ml-21"/*bump everything to the right when NavBar is fixed to the left*/>
                <h1>Inventory</h1>
                {/* Mobile View: Show only on screens smaller than md (≤ 768px) */}
                <div className="block md:hidden">
                    <MobileInventoryCard />
                </div>

                {/* Tablet & Larger: Show only on screens md (≥ 768px) and up */}
                <div className="hidden md:block">
                    <InventoryTable />
                </div>
           </div>
        </>
    )
}