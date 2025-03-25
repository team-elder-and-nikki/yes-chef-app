import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableFooter
  } from "@/components/ui/table";
  import { useEffect, useState } from 'react'
  import { toast } from "sonner"
  import axios from 'axios';
  import { IIngredient } from "../models/Ingredient"
  import { ENDPOINT_URL } from '@/staticVar';



const ingredients = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]
  

  
  interface ProfitabilityComponentProps {
    menu: any[];
    price: number;
    ingredientArr: [];
    ingredientName: string;
  }


  export default function ProfitabilityTable({price, menu, ingredientArr, ingredientName}: ProfitabilityComponentProps){

    console.log(ingredientArr)
    const [loading, setLoading] = useState(true);
    const ingredients = ingredientArr.map((item) => item.ingredientName );
    const [datas, setIngredientss] = useState(ingredients);
    console.log("Map results",ingredients)

    
    
    const getData = async () => {
      try {
        const response = await axios.post(`${ENDPOINT_URL}/metrics`,{ing: ingredients });
        const datas = await response.data;
        setIngredientss(datas);
      } catch (error) {
        toast.error("Error fetching data: " + error);
      } finally {
        setLoading(false);
      }
    };
  console.log("this is the data", datas)
    useEffect(() => {
      getData();
    }, []);
   //total cost of all of the dishes 
  function formatPrice(price: number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(price);
  } 
  const dishTotalCost =   datas.reduce((acc, item)=> acc+item.unitCost,0)
  const profit= price-dishTotalCost



  if (loading) {
    return <div>Loading...</div>;
  }
  if (datas.length === 0) {
    return <div>No data available</div>;
  }
  
    return(
        <>  

    <Table>
      <TableCaption>Dish Profitability and expense chart</TableCaption>
      <TableHeader>
        <TableRow className="">
          <TableHead className="w-3/4">Ingredient</TableHead>
          <TableHead className="text-right w-1/4">Cost</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
      {/* will use menu prop to interiate through ingredients */}
        {datas.map((ingredient)=>{
            return(
            <TableRow key={ingredients._id}>
                <TableCell className="font-medium w-3/4">{ingredient.name}</TableCell>
                <TableCell className="font-medium text-right w-1/4">{formatPrice(ingredient.unitCost)}</TableCell>
            </TableRow>)
        })
        }
        
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total Expense</TableCell>
          <TableCell className="text-right">{formatPrice(dishTotalCost)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Dish Cost</TableCell>
          <TableCell className="text-right">{formatPrice(price)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Profit</TableCell>
          <TableCell className="text-right">{formatPrice(profit)}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>

 
 </>
 )

 }