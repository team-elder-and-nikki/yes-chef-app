import { Route, Routes, BrowserRouter } from "react-router";
import "./App.css";
import NavBar from "./components/NavBar";
import Menu from "./pages/Menu";
import Inventory from "./pages/Inventory";
import Reports from "./pages/Reports";
import Kitchen from "./pages/Kitchen";
import { Toaster } from "@/components/ui/sonner";
import MenuEngineeringDashboard from "./pages/MenuEngineeringDashboard"
import ReportsDashboard from "./pages/ReportsDashboard"

import { CartProvider } from "./context/CartContext";

// Example: import { Button } from "@/components/ui/button";

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
          <Route path="/MenuEngineeringDashboard" element={<MenuEngineeringDashboard />}></Route>
          <Route path="/ReportsDashboard" element={<ReportsDashboard />}></Route>

        </Routes>
      <div className="bg-[url('/YesChefBackground.png')] bg-cover bg-center bg-no-repeat min-h-screen bg-fixed md:bg-cover md:bg-center sm:bg-contain sm:bg-top">
        <div className="m-6">
          <NavBar />
          <div className="md:ml-4">
          <Toaster position="top-right"/>
          <Routes>
            <Route path="/" element={<Menu />}></Route>
            <Route path="/inventory" element={<Inventory />}></Route>
            <Route path="/kitchen" element={<Kitchen />}></Route>
            <Route path="/reports" element={<Reports />}></Route>
          </Routes>
          </div>
        </div>
      </div>
      </BrowserRouter>
      
    </CartProvider>
  );
}

export default App;
