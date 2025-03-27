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
import { ENDPOINT_URL } from '@/staticVar';

interface ProfitabilityComponentProps {
  menu: any[];
  price: number;
  ingredientArr: [];
  ingredientName: string;
}


export default function ProfitabilityTable({ price, ingredientArr }: ProfitabilityComponentProps) {
  const [loading, setLoading] = useState(true);
  const ingredients = ingredientArr.map((item) => item.ingredientName);
  const [datas, setIngredientss] = useState(ingredients);

  const getData = async () => {
    try {
      const response = await axios.post(`${ENDPOINT_URL}/metrics`, { ing: ingredients });
      const datas = await response.data;
      setIngredientss(datas);
    } catch (error) {
      toast.error("Error fetching data: " + error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  function formatPrice(price: number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(price);
  }
  //total cost of all of the dishes 
  const menuItemTotal = datas.reduce((acc, item) => acc + item.unitCost, 0)
  const profit = price - menuItemTotal

  if (loading) {
    return <div>Loading...</div>;
  }
  if (datas.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <>

      <Table className="h-100 w-110 border-1 shadow-lg md:w-124 lg:w-150">
        <TableCaption>Dish Profitability and Expense Chart</TableCaption>
        <TableHeader>
          <TableRow className="">
            <TableHead className="w-3/4">Ingredient</TableHead>
            <TableHead className="text-right w-1/4">Cost</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* will use menu prop to interiate through ingredients */}
          {datas.map((ingredient, index) => {
            return (
              <TableRow
                key={ingredients._id}>
                <TableCell className="font-medium w-3/4 ">{ingredient.name}</TableCell>
                <TableCell className="font-medium text-right w-1/4 ">{index === 0 ? formatPrice(ingredient.unitCost) : "+" + formatPrice(ingredient.unitCost)}</TableCell>
              </TableRow>)
          })
          }

        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell className="font-semibold">
              <div className="my-10"></div>
              Total Expense
            </TableCell>
            <TableCell className="text-right font-semibold">
              <div className="my-10"></div>
              {formatPrice(menuItemTotal)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-semibold">Price of Dish</TableCell>
            <TableCell className="text-right font-semibold">-{formatPrice(price)}</TableCell>
          </TableRow>
          <TableRow className="font-semibold">
            <TableCell>Profit</TableCell>
            <TableCell className="text-right font-semibold">{formatPrice(profit)}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>


    </>
  )

}