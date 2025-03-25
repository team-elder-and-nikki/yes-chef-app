import { createContext, useContext, useState, ReactNode } from "react";

// Define the type for cart items
type CartItem = {
  id: string;
  menuItem: string;
  cartAmount: number;
  price: number;
  ingredients: { ingredientName: string; ingredientId: string }[];
  quantity: number;
  category: string;
};

// Define the type for the context
type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  addOneToExistingItem: (id: string) => void;
  subtractOneFromExistingItem: (id: string) => void;
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
            ? { ...cartItem, cartAmount: cartItem.cartAmount + 1 }
            : cartItem,
        );
      } else {
        return [...prevCart, { ...item, cartAmount: 1 }];
      }
    });
  };
  // ! remove items:
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id)); // Remove item by id
  };

  const clearCart = () => {
    setCart([]);
  };

  // Add one to the cartAmount of an existing item
  const addOneToExistingItem = (id: string) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, cartAmount: cartItem.cartAmount + 1 }
          : cartItem,
      ),
    );
  };

  // Subtract one from the cartAmount of an existing item
  const subtractOneFromExistingItem = (id: string) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === id
          ? {
              ...cartItem,
              cartAmount: cartItem.cartAmount > 1 ? cartItem.cartAmount - 1 : 1, // Ensure cartAmount doesn't go below 1
            }
          : cartItem,
      ),
    );
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        addOneToExistingItem,
        subtractOneFromExistingItem,
      }}
    >
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
