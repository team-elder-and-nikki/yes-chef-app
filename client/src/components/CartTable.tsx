import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import {
  Table,
  TableBody,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { v4 as uuidv4 } from "uuid";
import { CircleX } from "lucide-react";
import { CirclePlus } from "lucide-react";
import { CircleMinus } from "lucide-react";
import axios from "axios";
import { ENDPOINT_URL } from "../staticVar";
import { IIngredient } from "@/models/Ingredient";
import FloatingCard from "./ui/floatingCard";
import {toast} from "sonner";

export function CartTable() {
  const {
    cart,
    clearCart,
    removeFromCart,
    addOneToExistingItem,
    subtractOneFromExistingItem,
  } = useCart();
  const [isLoading, setIsLoading] = React.useState(false);
  const [ingredients, setIngredients] = useState<IIngredient[]>([]);

  const getData = async () => {
    try {
      const response = await axios.get(`${ENDPOINT_URL}/ingredients`);
      const data = await response.data;
      setIngredients(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  const handleUpdate = async ({id, quantity}:{id:string, quantity: number}) => {
    try {
        if (quantity < 0) {
          toast.error("Quantity cannot be negative");
          throw new Error("Quantity cannot be negative");
        } else if (quantity === null || quantity === undefined) {
          toast.error("Quantity cannot be empty");
          throw new Error("Quantity cannot be empty");
        }
          const response = await axios.patch(`${ENDPOINT_URL}/ingredients/updateQuantity/${id}`, { quantity });
          console.log("Items were updated " + response);
          getData();
    } catch (error) {
        console.error('Error updating data:', error);
    }
  } ;

  const sendOrder = async () => {
    const orderId = uuidv4(); // Generate a unique ID
    const timestamp = new Date().toISOString(); // Get the current timestamp

    const orderDetails = {
      orderId,
      timestamp,
      items: cart,
      status: "unstarted", // Default status
    };

    try {
      setIsLoading(true); // Set loading state
      const response = await axios.post(`${ENDPOINT_URL}/orders`, orderDetails); // Use Axios
      console.log("Order sent successfully:", response.data);

      orderDetails.items.forEach((menu) => {
       menu.ingredients.forEach((ingredient) => {
          const findIngredient: IIngredient | undefined = ingredients.find((inventory:IIngredient)=>inventory.name === ingredient.ingredientName);
          if(findIngredient){
            if(findIngredient.quantity-menu.cartAmount <= findIngredient.thresholdLevel){
                handleUpdate({id: findIngredient._id, quantity: menu.cartAmount * findIngredient.thresholdLevel * 2});
            };
          }
        });
      });

      toast.success("Order has been sent!");
      clearCart(); // Clear the cart after successful submission
    } catch (error) {
      console.error("Error sending order:", error);
      toast.error("Failed to send order. Please try again." + error);
    } finally {
      setIsLoading(false); // Reset loading state
      console.log(orderDetails);
    }
  };

  const subTotal = cart.reduce(
    (sum, item) => sum + item.cartAmount * item.price,
    0,
  );
  const tax = subTotal * 0.06;
  const total = subTotal + tax;

  return (
    <div className="md:space-y-4 md:h-[400px] w-[calc(100%+16px)] md:w-full lg:w-80 flex flex-col bg-gray-50">
    <FloatingCard className="space-y-4 h-[400px] flex flex-col bg-gray-50">
      <div className="flex-1 overflow-y-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Qty</TableHead>
              <TableHead>Item</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="">
            {cart.map((item) => (
              <TableRow key={item.id}>
                <TableCell >
                  <CirclePlus
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-4 lg:h-4 text-xs sm:text-md lg:text-xs m-1 cursor-pointer hover:text-red-500"
                    onClick={() => addOneToExistingItem(item.id)}
                  ></CirclePlus>
                  <CircleMinus
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-4 lg:h-4 m-1 cursor-pointer hover:text-red-500"
                    onClick={() => subtractOneFromExistingItem(item.id)}
                  ></CircleMinus>
                  <CircleX
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-4 lg:h-4 m-1 cursor-pointer hover:text-red-500"
                    onClick={() => removeFromCart(item.id)}
                  ></CircleX>
                </TableCell>
                <TableCell>{item.cartAmount}</TableCell>
                <TableCell className="w-12 md:w-48 lg:w-12 break-words whitespace-normal">{item.menuItem}</TableCell>
                <TableCell>${item.price.toFixed(2)}</TableCell>
                <TableCell className="text-right">
                  ${(item.price * item.cartAmount).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="bottom-0">
        <Table>
          <TableFooter className="bg-gray-100">
            <TableRow>
              <TableCell colSpan={4}>SubTotal</TableCell>
              <TableCell className="text-right">
                ${subTotal.toFixed(2)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={4}>Tax</TableCell>
              <TableCell className="text-right">${tax.toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={4}>Total</TableCell>
              <TableCell className="text-right">${total.toFixed(2)}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        <div className="flex justify-end gap-4 p-4">
          <Button
            variant="destructive"
            onClick={clearCart}
            disabled={cart.length === 0}
          >
            Clear All
          </Button>
          <Button onClick={sendOrder} disabled={cart.length === 0 || isLoading}>
            {isLoading ? "Sending..." : "Send"}
          </Button>
        </div>
      </div>
    </FloatingCard>
    </div>
  );
}
