
import React from "react";
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
import { v4 as uuidv4 } from 'uuid';
import { CircleX } from 'lucide-react';

export function CartTable() {
    const { cart, clearCart, removeFromCart } = useCart();
    const [isLoading, setIsLoading] = React.useState(false);
    const sendOrder = () => {

        const orderId = uuidv4(); // Generate a unique ID
        const timestamp = new Date().toISOString(); // Get the current timestamp

        const orderDetails = {
            orderId,
            timestamp,
            items: cart,
        };

        console.log(`Order sent: ${JSON.stringify(orderDetails, null, 2)}`);
        alert("Order has been sent!");
        clearCart()
        console.log(cart)
    };

    const subTotal = cart.reduce((sum, item) => sum + item.cartAmount * item.price, 0);
    const tax = subTotal * 0.06;
    const total = subTotal + tax;

    return (
        <div className="space-y-4 h-[400px] flex flex-col bg-gray-50">
            <div className="flex-1 overflow-y-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Actions</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Menu Item</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead className="text-right">Total</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="">
                        {cart.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>
                                    <CircleX
                                        className="m-1 cursor-pointer hover:text-red-500"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                    </CircleX>
                                </TableCell>
                                <TableCell>{item.cartAmount}</TableCell>
                                <TableCell>{item.menuItem}</TableCell>
                                <TableCell>${item.price.toFixed(2)}</TableCell>
                                <TableCell className="text-right">${(item.price * item.cartAmount).toFixed(2)}</TableCell>
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
                            <TableCell className="text-right">${subTotal.toFixed(2)}</TableCell>
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
                    <Button variant="destructive" onClick={clearCart} disabled={cart.length === 0}>
                        Clear All
                    </Button>
                    <Button onClick={sendOrder} disabled={cart.length === 0 || isLoading}>{isLoading ? "Sending..." : "Send"}</Button>
                </div>
            </div>
        </div>

    );
}