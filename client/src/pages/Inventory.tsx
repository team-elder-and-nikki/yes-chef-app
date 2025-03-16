

import { MobileInventoryCard } from "@/components/MobileInventoryCard";
import InventoryTable from "../components/InventoryTable";

export default function Inventory(){
    return(
        <>
            <div className="md:ml-21"/*bump everything to the right when NavBar is fixed to the left*/>
                <h1 className="text-center text-2xl my-4">Inventory</h1>
                {/* Mobile View: Show only on screens smaller than md (≤ 768px) */}
                <div className="block md:hidden mx-4">
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