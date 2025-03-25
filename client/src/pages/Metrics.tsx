import TableComponent from "../components/MenuEngineeringDashComponents/Table";
import ProfitabilityTable from "../components/ProfitabilityTable";
import { useParams} from "react-router-dom"
import { ENDPOINT_URL } from '@/staticVar';
import { toast } from "sonner"
import axios from 'axios';
import { useEffect, useState } from 'react'
import { IIngredient } from "../models/Ingredient"
import { Badge } from "@/components/ui/badge";
import { ShoppingCartIcon } from "lucide-react";
import { IncrementingInput } from "@/components/ui/incrementingInput";

interface Ingredient {
  _id: string;
  name: string;
  unitCost: number;
  quantity: number;
  thresholdLevel: number;
  lastOrderDate: Date;
  orderQty: number;
  wasteToday: number
}


function MenuEngineeringDashboard() {
  //test data, can be deleted whenever
  const tableOneHeadings = [
    "Ingredient",
    "Wasted",
    "Dollars Wasted",
    "Update Waste"
  ];
  const tableOneRows = [
    ["Cheese", "5", "$5"],
    ["Cheese", "5", "$5"],
    ["Cheese", "5", "$5"],
    ["Cheese", "5", "$5"],
  ];

  const tableTwoHeadings = [
    "Ingredient",
    "Quantity Ordered",
    "Price Per Unit",
    "Order Total",
  ];
  const tableTwoRows = [
    ["Cheese", "15", "$1", "$15"],
    ["Cheese", "15", "$1", "$15"],
    ["Cheese", "15", "$1", "$15"],
    ["Cheese", "15", "$1", "$15"],
  ];

  const dishes = [
    {
      _id: { $oid: "67c9f05c703d7cadb36e26de" },
      category: "Appetizer",
      name: "Calamari",
      ingredients: [
        { ingredientName: "Squid", ingredientId: "6" },
        { ingredientName: "Flour", ingredientId: "7" },
        { ingredientName: "Eggs", ingredientId: "8" },
        { ingredientName: "Garlic Aioli", ingredientId: "9" },
        { ingredientName: "Lemon", ingredientId: "10" },
      ],
      quantity: "8",
      price: "12.99",
      prepTime: "12",
      image: "",
      grossProfit: 32,
      expense: 17,
      netProfit: 15,
    },
    {
      _id: { $oid: "67c9f05c703d7cadb36e26de" },
      category: "Appetizer",
      name: "Calamari",
      ingredients: [
        { ingredientName: "Squid", ingredientId: "6" },
        { ingredientName: "Flour", ingredientId: "7" },
        { ingredientName: "Eggs", ingredientId: "8" },
        { ingredientName: "Garlic Aioli", ingredientId: "9" },
        { ingredientName: "Lemon", ingredientId: "10" },
      ],
      quantity: "8",
      price: "12.99",
      prepTime: "12",
      image: "",
      grossProfit: 32,
      expense: 17,
      netProfit: 15,
    },
    {
      _id: { $oid: "67c9f05c703d7cadb36e26de" },
      category: "Appetizer",
      name: "Calamari",
      ingredients: [
        { ingredientName: "Squid", ingredientId: "6" },
        { ingredientName: "Flour", ingredientId: "7" },
        { ingredientName: "Eggs", ingredientId: "8" },
        { ingredientName: "Garlic Aioli", ingredientId: "9" },
        { ingredientName: "Lemon", ingredientId: "10" },
      ],
      quantity: "8",
      price: "12.99",
      prepTime: "12",
      image: "",
      grossProfit: 32,
      expense: 17,
      netProfit: 15,
    },
    {
      _id: { $oid: "67c9f05c703d7cadb36e26de" },
      category: "Appetizer",
      name: "Calamari",
      ingredients: [
        { ingredientName: "Squid", ingredientId: "6" },
        { ingredientName: "Flour", ingredientId: "7" },
        { ingredientName: "Eggs", ingredientId: "8" },
        { ingredientName: "Garlic Aioli", ingredientId: "9" },
        { ingredientName: "Lemon", ingredientId: "10" },
      ],
      quantity: "8",
      price: "12.99",
      prepTime: "12",
      image: "",
      grossProfit: 32,
      expense: 17,
      netProfit: 15,
    },
  ];
  //test data end
  const params= useParams()
  const [data, setIngredients] = useState<IIngredient[]>([]);
  
  
  const getData = async () => {
    try {
      const response = await axios.get(`${ENDPOINT_URL}/metrics/${params.id}`);
      const data = await response.data;
      setIngredients(data);
    } catch (error) {
      toast.error("Error fetching data: " + error);
    }
  };

 

  useEffect(() => {
    getData();
  }, []);
console.log(data)
 
  return (
    <div className="  lg:mx-20 md:mx-20 flex flex-col lg:flex-row gap-6 bg-gray-100 p-6">
      {/* <div className="flex-grow lg:w-3/4">
        <DishProfitability dishes={dishes} />
      </div> */}
    
    <ProfitabilityTable 
    menu={data}
    />
      <div className=" flex flex-col space-y-6 lg:mx-10 md:mx-20 lg:w-2/3">
        
        {/* <TableComponent 
          headings={tableOneHeadings} rows={tableOneRows} tableName={"Waste Metrics"}
         /> */}
        <TableComponent
         headings={tableTwoHeadings} rows={tableTwoRows} tableName={"Ingredient Cost Tracking"}
         />
      </div>
    </div>
    
  );
}

export default MenuEngineeringDashboard;
