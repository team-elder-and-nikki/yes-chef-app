import "./App.css";
import { CartProvider } from "./context/CartContext";
import { CartTable, } from "./components/CartTable";
import { MenuItem } from "./components/MenuItemTest";



function App() {
  return (
    <CartProvider>
      <div className="App">
        <h1>POS System</h1>
        <MenuItem />
        <CartTable />
      </div>
    </CartProvider>
  );
}


export default App;
