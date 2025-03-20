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
  import { toast } from "sonner"
  import { ShoppingCartIcon } from "lucide-react";
  import { Button } from "@/components/ui/button"
  import { Input } from "@/components/ui/input"
  import { useEffect, useState } from 'react'
  import { IIngredient } from "../models/Ingredient"

  //Pulled from server/model/ingredient interface
  interface Ingredient{
    _id: string;
    name: string;
    unitCost: number;
    quantity: number;
    thresholdLevel: number;
    orderQty: number;
}
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
  



  export default function ProfitabilityTable(){
    const [data, setIngredients] = useState<IIngredient[]>([]);
   
  
    return(
        <>  

    <Table>
      <TableCaption>Dish Profitability and expense chart</TableCaption>
      <TableHeader>
      <h2 className="">[Insert Name of Dish Here] Profitability</h2>
        <TableRow className="">
          <TableHead className="w-3/4">Ingredient</TableHead>
          <TableHead className="text-right w-1/4">Cost</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
      
        {ingredients.map((ingredient)=>{
            return(
            <TableRow key={ingredients}>
                <TableCell className="font-medium w-3/4">{ingredient.invoice}</TableCell>
                <TableCell className="font-medium text-right w-1/4">{ingredient.totalAmount}</TableCell>
            </TableRow>)
        })
        }
        
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Expense</TableCell>
          <TableCell className="text-right">$1000</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Profit</TableCell>
          <TableCell className="text-right">$1000</TableCell>
        </TableRow>
      </TableFooter>
    </Table>

 
 </>
 )

 }