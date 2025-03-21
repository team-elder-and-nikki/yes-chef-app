import { Route, Routes, BrowserRouter } from "react-router";
import NavBar from "./components/NavBar";
import { Toaster } from "@/components/ui/sonner";
import Menu from "./pages/Menu";
import Inventory from "./pages/Inventory";
import Reports from "./pages/Reports";
import Kitchen from "./pages/Kitchen";
<<<<<<< HEAD
import { Toaster } from "@/components/ui/sonner";
import MenuEngineeringDashboard from "./pages/MenuEngineeringDashboard"
=======
>>>>>>> b9a011471a3f21d0ab4c66f5a2349c30e6436976
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
      <NavBar />
        <Toaster position="top-right"/>
        <Routes>
          <Route path="/" element={<Menu />}></Route>
          <Route path="/inventory" element={<Inventory />}></Route>
          <Route path="/kitchen" element={<Kitchen />}></Route>
          <Route path="/reports" element={<Reports />}></Route>
          <Route path="/metrics" element={<MenuEngineeringDashboard />}></Route>
        </Routes>
      </BrowserRouter>
      
    </CartProvider>
  );
}

export default App;
