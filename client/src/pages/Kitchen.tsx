import NavBar from "@/components/NavBar"
import KitchenCard from "@/components/KitchenCard";
import { ITicket } from "../models/Ticket";
import {
  Stars,
  AlertCircle,
  NotepadTextIcon,
  NotepadTextDashed,
} from "lucide-react";
import KitchenMenuToggle from "@/components/KitchenMenuToggle";
import { useState } from "react";

function KitchenStatus({ orders }: { orders: ITicket[] }) {
  const sortedDate = orders.sort((a, b) => {
    const dateA = a.ordered_at;
    const dateB = b.ordered_at;
    if (new Date(dateA) < new Date(dateB)) {
      return 1;
    } else {
      return -1;
    }
  });

  return sortedDate.sort((a: ITicket, b: ITicket) => {
    if (a.status === "In Progress") {
      return -1;
    } else if (a.status == "Unstarted") {
      return 1;
    } else {
      return 0;
    }
  });
}
        
export default function Kitchen() {

    const dummyTicketData: ITicket =
    {
        _id: "uniqueTicketId",
        ticket_number: 123,
        ordered_at: new Date(),
        menu_items: [
            {
                _id: "uniqueMenuItemId",
                name: "Burger",
                ingredients: [
                    {
                        _id: "uniqueIngredientId",
                        name: "Bun",
                        unitCost: 1,
                        quantity: 1,
                        thresholdLevel: 10,
                    },
                    {
                        _id: "uniqueIngredientId",
                        name: "Patty",
                        unitCost: 2,
                        quantity: 1,
                        thresholdLevel: 10,
                    },
                    {
                        _id: "uniqueIngredientId",
                        name: "Lettuce",
                        unitCost: 1,
                        quantity: 1,
                        thresholdLevel: 10,
                    },
                    {
                        _id: "uniqueIngredientId",
                        name: "Tomato",
                        unitCost: 1,
                        quantity: 1,
                        thresholdLevel: 10,
                    },
                    {
                        _id: "uniqueIngredientId",
                        name: "Cheese",
                        unitCost: 1,
                        quantity: 1,
                        thresholdLevel: 10,
                    },
                    {
                        _id: "uniqueIngredientId",
                        name: "Onion",
                        unitCost: 1,
                        quantity: 1,
                        thresholdLevel: 10,
                    },
                    {
                        _id: "uniqueIngredientId",
                        name: "Pickles",
                        unitCost: 1,
                        quantity: 1,
                        thresholdLevel: 10,
                    },
                ],
                quantity: 1,
                price: 10,
                prepTime: 15,
                Image: "burger.jpg",
                category: "Main",
            },
            {
                _id: "uniqueMenuItemId",
                name: "Fries",
                ingredients: [
                    {
                        _id: "uniqueIngredientId",
                        name: "Potato",
                        unitCost: 1,
                        quantity: 1,
                        thresholdLevel: 10,
                    },
                    {
                        _id: "uniqueIngredientId",
                        name: "Salt",
                        unitCost: 1,
                        quantity: 1,
                        thresholdLevel: 10,
                    },
                ],
                quantity: 1,
                price: 5,
                prepTime: 10,
                Image: "fries.jpg",
                category: "Side",
            },
        ],
        status: "Unstarted",
    }

    const multipleDummyTickets = [
        dummyTicketData,
        dummyTicketData,
        dummyTicketData,
        dummyTicketData,
    ]
    
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
            <div className="md:ml-21"/*bump everything to the right when NavBar is fixed to the left*/>
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
                <div className="flex flex-row gap-4 overflow-x-scroll">
                    {multipleDummyTickets.map((ticket) => (
                        <KitchenCard key={ticket._id} ticket={ticket} />
                    ))}
                </div>
            </div>
        </>
    )
}
