import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type for cart items
type CartItem = {
    id: string;
    menuItem: string;
    amount: number;
    price: number;
};

// Define the type for the context
type CartContextType = {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    clearCart: () => void;
};

// Create the context with an initial empty value
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, amount: cartItem.amount + 1 }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, amount: 1 }];
            }
        });
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook for using the context
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};