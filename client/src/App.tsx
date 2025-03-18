import { Route, Routes, BrowserRouter } from "react-router";
import "./App.css";
import Menu from "./pages/Menu";
import Inventory from "./pages/Inventory";
import Reports from "./pages/Reports";
import Kitchen from "./pages/Kitchen";

import { CartProvider } from "./context/CartContext";

// Example: import { Button } from "@/components/ui/button";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />}></Route>
          <Route path="/inventory" element={<Inventory />}></Route>
          <Route path="/kitchen" element={<Kitchen />}></Route>
          <Route path="/reports" element={<Reports />}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
