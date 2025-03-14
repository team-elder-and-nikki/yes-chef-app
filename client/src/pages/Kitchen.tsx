import NavBar from "@/components/NavBar";
import KitchenCard from "@/components/KitchenCard";
import { ITicket } from "../models/Ticket";
import { IMenu } from "../models/Menu";

export default function Kitchen() {
  const dummyTicketData: ITicket = {
    _id: "uniqueTicketId",
    ticket_number: 123,
    ordered_at: new Date(),
    menu_items: [
      {
        _id: "uniqueMenuItemId",
        name: "BBQChicken",
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
        name: "Calamari",
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
  };

  const multipleDummyTickets = [
    dummyTicketData,
    dummyTicketData,
    dummyTicketData,
    dummyTicketData,
  ];

  function recommendItems({
    completedTickets,
  }: {
    completedTickets: ITicket[];
  }) {
    const menuOrderQuantity: { [key: string]: number } = {
      BBQChicken: 0,
      Bruschetta: 0,
      Calamari: 0,
      Cannoli: 0,
      Cheesecake: 0,
      ChickenParmesan: 0,
      ChocolateLavaCake: 0,
      EggplantParmesan: 0,
      FettuccineAlfredo: 0,
      FiletMignon: 0,
      GarlicBread: 0,
      Gelato: 0,
      GrilledSalmon: 0,
      Lasagna: 0,
      LemonHerbChicken: 0,
      Margherita: 0,
      MozzarellaSticks: 0,
      PenneArrabbiata: 0,
      Pepperoni: 0,
      PestoGnocchi: 0,
      SpaghettiCarbonara: 0,
      StuffedMushrooms: 0,
      Tiramisu: 0,
      VeggieSupreme: 0,
      WhitePizza: 0,
    };

    // update quantity of each menu item ordered
    completedTickets.forEach((ticket: ITicket) => {
      ticket.menu_items.forEach((menu: IMenu) => {
        if (menuOrderQuantity.hasOwnProperty(menu.name)) {
          menuOrderQuantity[menu.name]++;
        }
      });
    });

    // find highest quantity among all the orders made
    const highest = Math.max(...Object.values(menuOrderQuantity));

    const popularMenuItems: string[] = [];

    // get all the menu items equaling the highest quantity
    for (let keys in menuOrderQuantity) {
      // if the value (menu total quantity) equals the highest quantity
      if (menuOrderQuantity[keys] === highest) {
        //add to the list of popular menu items
        popularMenuItems.push(keys);
      }
    }

    const recommendedItems: { name: string; ordered_at: Date }[] = [];

    completedTickets.forEach((ticket: ITicket) => {
      ticket.menu_items.forEach((menu: IMenu) => {
        if (popularMenuItems.includes(menu.name)) {
          recommendedItems.push({
            name: menu.name,
            ordered_at: ticket.ordered_at,
          });
        }
      });
    });

    return recommendedItems;
  };

  return (
    <>
      <NavBar />
      <div
        className="md:ml-21" /*bump everything to the right when NavBar is fixed to the left*/
      >
        <div className="flex flex-row gap-4">
          {multipleDummyTickets.map((ticket) => (
            <KitchenCard key={ticket._id} ticket={ticket} />
          ))}
        </div>
      </div>
    </>
  );
}
