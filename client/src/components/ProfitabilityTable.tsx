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


  export default function ProfitabilityTable({price, ingredientArr}: ProfitabilityComponentProps){
    const [loading, setLoading] = useState(true);
    const ingredients = ingredientArr.map((item) => item.ingredientName );
    const [datas, setIngredientss] = useState(ingredients);

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
  const menuItemTotal = datas.reduce((acc, item)=> acc+item.unitCost,0)
  const profit= price-menuItemTotal

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
      <TableFooter className=" ">
        <TableRow>
          <TableCell>Total Expense</TableCell>
          <TableCell className="text-right">{formatPrice(menuItemTotal)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Price of Dish</TableCell>
          <TableCell className="text-right">-{formatPrice(price)}</TableCell>
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