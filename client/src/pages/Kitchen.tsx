import NavBar from "@/components/NavBar";
import KitchenCard from "@/components/KitchenCard";
import { ITicket } from "../models/Ticket";
import { IMenu } from "../models/Menu";
import {
  Stars,
  AlertCircle,
  NotepadTextIcon,
  NotepadTextDashed,
} from "lucide-react";
import KitchenMenuToggle from "@/components/KitchenMenuToggle";
import { useState } from "react";

export interface IRecommendation {
  name: string;
  quantity: number;
}

export interface ITimeBlocks {
  startTime: Date;
  endTime: Date;
  items: IRecommendation[];
}

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
  const dummyTicketData: ITicket = {
    _id: "uniqueTicketId",
    ticket_number: 123,
    ordered_at: new Date("2025-02-17T15:24:00"),
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
        ],
        quantity: 1,
        price: 10,
        prepTime: 15,
        Image: "burger.jpg",
        category: "Main",
      },
      {
        _id: "uniqueMenuItemId",
        name: "Lasagna",
        ingredients: [
          {
            _id: "uniqueIngredientId",
            name: "Potato",
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

  const dummyTicketData1: ITicket = {
    _id: "uniqueTicketId",
    ticket_number: 123,
    ordered_at: new Date("2025-02-17T18:24:00"),
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
        ],
        quantity: 1,
        price: 10,
        prepTime: 15,
        Image: "burger.jpg",
        category: "Main",
      },
      {
        _id: "uniqueMenuItemId",
        name: "Lasagna",
        ingredients: [
          {
            _id: "uniqueIngredientId",
            name: "Potato",
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

  const dummyTicketData2: ITicket = {
    _id: "uniqueTicketId",
    ticket_number: 123,
    ordered_at: new Date("2025-02-17T14:24:00"),
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
        ],
        quantity: 1,
        price: 10,
        prepTime: 15,
        Image: "burger.jpg",
        category: "Main",
      },
      {
        _id: "uniqueMenuItemId",
        name: "Lasagna",
        ingredients: [
          {
            _id: "uniqueIngredientId",
            name: "Potato",
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

  const dummyTicketData3: ITicket = {
    _id: "uniqueTicketId",
    ticket_number: 123,
    ordered_at: new Date("2025-02-13T12:24:00"),
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
        ],
        quantity: 1,
        price: 10,
        prepTime: 15,
        Image: "burger.jpg",
        category: "Main",
      },
      {
        _id: "uniqueMenuItemId",
        name: "Lasagna",
        ingredients: [
          {
            _id: "uniqueIngredientId",
            name: "Potato",
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

  const dummyTicketData4: ITicket = {
    _id: "uniqueTicketId",
    ticket_number: 123,
    ordered_at: new Date("2025-02-17T14:24:00"),
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
        ],
        quantity: 1,
        price: 10,
        prepTime: 15,
        Image: "burger.jpg",
        category: "Main",
      },
      {
        _id: "uniqueMenuItemId",
        name: "Lasagna",
        ingredients: [
          {
            _id: "uniqueIngredientId",
            name: "Potato",
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

  const dummyTicketData5: ITicket = {
    _id: "uniqueTicketId",
    ticket_number: 123,
    ordered_at: new Date("2025-02-17T08:24:00"),
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
        ],
        quantity: 1,
        price: 10,
        prepTime: 15,
        Image: "burger.jpg",
        category: "Main",
      },
      {
        _id: "uniqueMenuItemId",
        name: "Lasagna",
        ingredients: [
          {
            _id: "uniqueIngredientId",
            name: "Potato",
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

  const dummyTicketData6: ITicket = {
    _id: "uniqueTicketId",
    ticket_number: 123,
    ordered_at: new Date("2025-02-17T10:24:00"),
    menu_items: [
      {
        _id: "uniqueMenuItemId",
        name: "Pepperoni",
        ingredients: [
          {
            _id: "uniqueIngredientId",
            name: "Bun",
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
        name: "Bruschetta",
        ingredients: [
          {
            _id: "uniqueIngredientId",
            name: "Potato",
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
    dummyTicketData1,
    dummyTicketData2,
    dummyTicketData3,
    dummyTicketData4,
    dummyTicketData5,
    dummyTicketData6,
    dummyTicketData6,
    dummyTicketData6,
    dummyTicketData6,
    dummyTicketData6,
  ];

  function recommendPopularItems({
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

    // find average quantity among all the orders made
    const average = Math.floor(
      Object.values(menuOrderQuantity).reduce((a, b) => a + b, 0) /
        Object.values(menuOrderQuantity).filter((order) => order > 0).length
    );

    const popularMenuItems: string[] = [];

    // get all the menu items equaling or higher than the highest average
    for (let keys in menuOrderQuantity) {
      // if the value (menu total quantity) equals the highest average
      if (menuOrderQuantity[keys] > average) {
        //add to the list of popular menu items
        popularMenuItems.push(keys);
      }
    }

    const recommendations: {
      name: string;
      ordered_at: Date;
      quantity: number;
    }[] = [];

    //grab the most popular menu items with their order date
    completedTickets.forEach((ticket: ITicket) => {
      ticket.menu_items.forEach((menu: IMenu) => {
        if (popularMenuItems.includes(menu.name)) {
          recommendations.push({
            name: menu.name,
            ordered_at: ticket.ordered_at,
            quantity: menuOrderQuantity[menu.name],
          });
        }
      });
    });

    //static time blocks to represent daily work hours and store menu items
    const recommendationTimeBlocks: ITimeBlocks[] = [
      {
        startTime: new Date("1000-02-17T08:00:00"),
        endTime: new Date("3025-02-17T10:00:00"),
        items: [],
      },
      {
        startTime: new Date("1000-02-17T11:00:00"),
        endTime: new Date("3025-02-17T13:00:00"),
        items: [],
      },
      {
        startTime: new Date("1000-02-17T14:00:00"),
        endTime: new Date("3025-02-17T16:00:00"),
        items: [],
      },
      {
        startTime: new Date("1000-02-17T17:00:00"),
        endTime: new Date("3025-02-17T19:00:00"),
        items: [],
      },
    ];

    // go through each recommended menu item
    recommendations.forEach((item) => {
      // go through recommendation time blocks
      for (let i = 0; i < recommendationTimeBlocks.length; i++) {
        const firstTimeBlock = recommendationTimeBlocks[i].startTime;
        const secondTimeBlock = recommendationTimeBlocks[i].endTime;
        // check if item order time is greater than or equal to first time blcok
        // check if item order time is less than or equal to second time block
        if (
          item.ordered_at >= firstTimeBlock &&
          item.ordered_at <= secondTimeBlock
        ) {
          recommendationTimeBlocks[i].items.push({
            name: item.name,
            quantity: menuOrderQuantity[item.name],
          });
        }
      }
    });

    // check if item has already been added to static time blocks
    const removeDuplicates = recommendationTimeBlocks.map((block: ITimeBlocks) => {
      return {
        startTime: block.startTime,
        endTime: block.endTime,
        items: block.items.reduce(
          (acc: IRecommendation[], current: IRecommendation) => {
            const findItem = acc.find((item) => item.name === current.name);
            if (findItem) {
              return acc;
            }
            return acc.concat([current]);
          },
          []
        ),
      };
    });

    return removeDuplicates;
  }

  console.log(
    recommendPopularItems({ completedTickets: multipleDummyTickets })
  );

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

        <section className="flex flex-wrap md:flex-nowrap flex-col md:flex-row items-center md:items-start justify-between">
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
  );
}
