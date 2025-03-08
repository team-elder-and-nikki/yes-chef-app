import React from "react";
import { useCart } from "../context/CartContext";
import { Button } from "./ui/button";

const sampleItem1 = {
    id: 1,
    menuItem: "Taco",
    amount: 1,
    price: 10.0,
};

const sampleItem2 = {
    id: 2,
    menuItem: "Burger",
    amount: 1,
    price: 12.0,
};

export function MenuItem() {
    const { addToCart } = useCart();

    return (
        <div className="space-y-4 p-4 border">
            <div>
                <h2>Taco - $10.00</h2>
                <Button onClick={() => addToCart(sampleItem1)}>Add Taco</Button>
            </div>
            <div>
                <h2>Burger - $12.00</h2>
                <Button onClick={() => addToCart(sampleItem2)}>Add Burger</Button>
            </div>
        </div>
    );
}