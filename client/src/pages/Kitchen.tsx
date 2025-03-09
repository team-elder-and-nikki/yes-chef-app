import NavBar from "@/components/NavBar"
import KitchenCard from "@/components/KitchenCard";
import { ITicket } from "../../../server/models/Ticket";

export default function Kitchen() {

    const dummyTicketData: ITicket = [
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
                }
            ],
            status: "Unstarted",
        }
    ];

    return (
        <>
            <NavBar />
            <div className="md:ml-21"/*bump everything to the right when NavBar is fixed to the left*/>
                {dummyTicketData.map((ticket) => (
                    <KitchenCard key={ticket._id} ticket={ticket} />
                ))}
            </div>
        </>
    )
}