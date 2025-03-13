import NavBar from "@/components/NavBar";
import type { IOrder } from "@/models/Order";

function KitchenStatus({ orders }: { orders: IOrder[] }) {
  const sortedDate = orders.sort((a, b) => {
    const dateA = a.timestamp.split("T")[0];
    const dateB = b.timestamp.split("T")[0];
    if (new Date(dateA) < new Date(dateB)) {
      return 1;
    } else {
      return -1;
    }
  });

  return sortedDate.sort((a: IOrder, b: IOrder) => {
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
  return (
    <>
      <NavBar />
      <div
        className="md:ml-21" /*bump everything to the right when NavBar is fixed to the left*/
      >
        <h1>Kitchen</h1>
      </div>
    </>
  );
}
