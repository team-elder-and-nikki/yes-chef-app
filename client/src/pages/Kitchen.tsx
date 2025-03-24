import NavBar from "@/components/NavBar";
import KitchenCard from "@/components/KitchenCard";
import { ITicket } from "../models/Ticket";
import { IMenu } from "../models/Menu";
import { Stars, NotepadTextIcon, NotepadTextDashed } from "lucide-react";
import KitchenMenuToggle from "@/components/KitchenMenuToggle";
import { useState, useEffect } from "react";
import RecommendationCard from "@/components/RecommendationCard";
import type { IMenuIngredient } from "@/models/Menu";
import axios from "axios";
import { ENDPOINT_URL } from "@/staticVar";

export interface IRecommendation {
  menuItem: string;
  quantity: number;
  ingredients: IMenuIngredient[];
}

export interface ITimeBlocks {
  startTime: Date;
  endTime: Date;
  items: IRecommendation[];
}

function KitchenStatus({ orders }: { orders: ITicket[] }) {
  const sortedDate = orders.sort((a, b) => {
    const dateA = a.createdAt;
    const dateB = b.createdAt;
    if (new Date(dateA) < new Date(dateB)) {
      return 1;
    } else {
      return -1;
    }
  });

  return sortedDate.sort((a: ITicket, b: ITicket) => {
    if (a.status === "started") {
      return -1;
    } else if (a.status == "unstarted") {
      return 1;
    } else {
      return 0;
    }
  });
}

export default function Kitchen() {
  useEffect(() => {
    async function getOrderData() {
      try {
        const response = await axios.get(`${ENDPOINT_URL}/orders`);
        setOrders(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getOrderData();
  }, []);

  const [orders, setOrders] = useState<ITicket[]>([]);
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
      ticket.items.forEach((menu: IMenu) => {
        if (menuOrderQuantity.hasOwnProperty(menu.menuItem) && ticket.status==="completed") {
          menuOrderQuantity[menu.menuItem]+=1*menu.cartAmount;
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
      menuItem: string;
      createdAt: Date;
      ingredients: IMenuIngredient[];
      quantity: number;
    }[] = [];

    //grab the most popular menu items with their order date
    completedTickets.forEach((ticket: ITicket) => {
      ticket.items.forEach((menu: IMenu) => {
        if (popularMenuItems.includes(menu.menuItem)) {
          recommendations.push({
            menuItem: menu.menuItem,
            createdAt: ticket.createdAt,
            quantity: menuOrderQuantity[menu.menuItem] - average,
            ingredients: menu.ingredients,
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
          new Date(item.createdAt) >= firstTimeBlock &&
          new Date(item.createdAt) <= secondTimeBlock
        ) {
          recommendationTimeBlocks[i].items.push({
            menuItem: item.menuItem,
            quantity: menuOrderQuantity[item.menuItem] - average,
            ingredients: item.ingredients,
          });
        } 
      }
    });

    // check if item has already been added to static time blocks
    const removeDuplicates = recommendationTimeBlocks.map(
      (block: ITimeBlocks) => {
        return {
          startTime: block.startTime,
          endTime: block.endTime,
          items: block.items.reduce(
            (acc: IRecommendation[], current: IRecommendation) => {
              const findItem = acc.find((item) => item.menuItem === current.menuItem);
              if (findItem) {
                return acc;
              }
              return acc.concat([current]);
            },
            []
          ),
        };
      }
    );

    return removeDuplicates;
          
  }

  const [toggleView, setToggleView] = useState("Open Tickets");

  const menuToggles = [
    { text: "Open Tickets", icon: <NotepadTextIcon /> },
    { text: "Closed Tickets", icon: <NotepadTextDashed /> },
    { text: "Predictions", icon: <Stars /> },
  ];
  return (
    <>
      <div
        className="md:ml-21" /*bump everything to the right when NavBar is fixed to the left*/
      >
        <section className="flex flex-wrap md:flex-nowrap flex-col md:flex-row items-center md:items-start justify-between">
          {menuToggles.map((menu) => (
            <KitchenMenuToggle
              toggleView={toggleView}
              key={menu.text}
              onClick={(e) => setToggleView(e)}
              text={menu.text}
              icon={menu.icon}
            />
          ))}
        </section>

        {toggleView === "Predictions" && (
          <div className="flex flex-row gap-4 overflow-x-scroll">
            {recommendPopularItems({
              completedTickets: orders,
            }).map((menu) => {
              return menu.items.map((item) => {
                return (
                  <RecommendationCard
                    key={item.menuItem}
                    recommendation={{
                      startTime: menu.startTime,
                      endTime: menu.endTime,
                      name: item.menuItem,
                      quantity: item.quantity,
                      ingredients: item.ingredients,
                    }}
                  />
                );
              });
            })}
          </div>
        )}

        {toggleView === "Closed Tickets" && (
          <div className="flex flex-row gap-4 overflow-x-scroll">
            {orders.map((ticket) => {
              if (ticket.status === "completed") {
                return <KitchenCard key={ticket._id} ticket={ticket} />;
              }
            })}
          </div>
        )}

        {toggleView === "Open Tickets" && (
          <div className="flex flex-row gap-4 overflow-x-scroll">
            {KitchenStatus({ orders: orders }).map((ticket) => {
              if (ticket.status !== "completed") {
                return <KitchenCard key={ticket._id} ticket={ticket}/>;
              }
            })}
          </div>
        )}
      </div>
    </>
  );
}
