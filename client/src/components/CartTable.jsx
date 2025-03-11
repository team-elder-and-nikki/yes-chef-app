
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

export function CartTable() {
    const { cart, clearCart } = useCart();
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
        <div className="space-y-4">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Amount</TableHead>
                        <TableHead>Menu Item</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead className="text-right">Total</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {cart.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.cartAmount}</TableCell>
                            <TableCell>{item.menuItem}</TableCell>
                            <TableCell>${item.price.toFixed(2)}</TableCell>
                            <TableCell className="text-right">${(item.price * item.cartAmount).toFixed(2)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>SubTotal</TableCell>
                        <TableCell className="text-right">${subTotal.toFixed(2)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={3}>Tax</TableCell>
                        <TableCell className="text-right">${tax.toFixed(2)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">${total.toFixed(2)}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
            <div className="flex justify-end gap-4">
                <Button variant="destructive" onClick={clearCart}>
                    Clear All
                </Button>
                <Button onClick={sendOrder}>Send</Button>
            </div>
        </div>
    );
}