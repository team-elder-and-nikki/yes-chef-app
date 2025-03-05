import { Route, Routes, BrowserRouter } from "react-router";
import "./App.css";
import Menu from "./pages/Menu";
import Inventory from "./pages/Inventory";
import Reports from "./pages/Reports";
import Orders from "./pages/Orders";
import Kitchen from "./pages/Kitchen";
// Example: import { Button } from "@/components/ui/button";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/kitchen" element={<Kitchen />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/reports" element={<Reports />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;