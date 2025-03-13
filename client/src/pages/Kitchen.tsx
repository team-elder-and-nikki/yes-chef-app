import NavBar from "@/components/NavBar";
import {
  Stars,
  AlertCircle,
  NotepadTextIcon,
  NotepadTextDashed,
} from "lucide-react";
import KitchenMenuToggle from "@/components/KitchenMenuToggle";
import { useState } from "react";

export default function Kitchen() {
  const [toggleView, setToggleView] = useState("Open Tickets");

  const menuToggles = [
    { text: "Open Tickets", icon: <NotepadTextIcon /> },
    { text: "Closed Tickets", icon: <NotepadTextDashed /> },
    { text: "Predictions", icon: <Stars /> },
    { text: "Alerts", icon: <AlertCircle /> },
  ];

  return (
    <>
      <NavBar />
      <div
        className="md:ml-21" /*bump everything to the right when NavBar is fixed to the left*/
      >
        <h1>Kitchen</h1>

        <section className="flex items-start justify-between">
          {menuToggles.map((menu) => (
            <KitchenMenuToggle
              key={menu.text}
              onClick={(e) => setToggleView(e)}
              text={menu.text}
              icon={menu.icon}
            />
          ))}
        </section>
      </div>
    </>
  );
}
