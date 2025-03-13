import NavBar from "@/components/NavBar";
import {
  Stars,
  AlertCircle,
  NotepadTextIcon,
  NotepadTextDashed,
} from "lucide-react";
import KitchenMenuToggle from "@/components/KitchenMenuToggle";

export default function Kitchen() {
  return (
    <>
      <NavBar />
      <div
        className="md:ml-21" /*bump everything to the right when NavBar is fixed to the left*/
      >
        <h1>Kitchen</h1>

        <section className="flex items-start justify-between">
          <KitchenMenuToggle text={"Open Tickets"} icon={<NotepadTextIcon />} />

          <KitchenMenuToggle
            text={"Closed Tickets"}
            icon={<NotepadTextDashed />}
          />

          <KitchenMenuToggle text={"Predictions"} icon={<Stars />} />

          <KitchenMenuToggle text={"Alerts"} icon={<AlertCircle />} />
        </section>
      </div>
    </>
  );
}
