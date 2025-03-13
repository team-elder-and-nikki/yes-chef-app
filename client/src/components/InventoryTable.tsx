
import axios from 'axios';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"

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
}

export default function InventoryTable(){
  const rowsPerPage = 15;
  const [data, setData] = useState<IIngredient[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(rowsPerPage);
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});




  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/ingredients');
      const data = await response.data;
      console.log({data});
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

    useEffect(() => {
        getData();
      }, [])
  
  const handleInputChange = (id: string, value: string) => {
      setInputValues(prev => ({ ...prev, [id]: value }));
      
  };

  const handleUpdate = async (id: string) => {
    try {
        const quantity = inputValues[id];
        const response = await axios.patch(`http://localhost:8000/ingredients/updateQuantity/${id}`, { quantity });
        console.log(response);
        getData();
     }catch (error) {
      console.error('Error updating data:', error);
     }
    } ;

  return(
      <>  
        <Table>
        <TableCaption>A list of inventory ingerdients.</TableCaption>
        <TableHeader>
            <TableRow>
            <TableHead className="w-[100px]">Ingredient</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Update Stock</TableHead>
            <TableHead>Threshold</TableHead>
            <TableHead>Unit Cost</TableHead>
            <TableHead>Next order</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {data.slice(startIndex, endIndex).map((ingredient)=>{
                return(
                  <TableRow key={ingredient._id} value={ingredient._id}>
                    <TableCell className="font-medium">{ingredient.name}</TableCell>
                      <TableCell>
                        {ingredient.quantity ? ingredient.quantity:"Out of Stock" }
                      </TableCell>
                        <TableCell className=" flex align-items align-center">
                        <Input 
                          value={inputValues[ingredient._id]}
                          onChange={(e) => handleInputChange(ingredient._id, e.target.value)}
                          min="0"
                        />
                        <Button 
                          onClick={() => handleUpdate(ingredient._id)}>
                          Update
                        </Button>
                        </TableCell>
                        
                    <TableCell>{ingredient.thresholdLevel}</TableCell>
                    <TableCell>{ingredient.unitCost}</TableCell>
                    <TableCell>3/17/2025</TableCell>
                    <TableCell className="text-right">{Math.round(ingredient.unitCost*ingredient.quantity *100)/100}</TableCell>
                  </TableRow>
                )
            })}   
        </TableBody>
        </Table>
        <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={
                startIndex === 0 ? "pointer-events-none opacity-50" : undefined
              }
              onClick={() => {
                setStartIndex(startIndex - rowsPerPage);
                setEndIndex(endIndex - rowsPerPage);
              }} />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              className={
                endIndex === 100 ? "pointer-events-none opacity-50" : undefined
              }
              onClick={() => {
                setStartIndex(startIndex + rowsPerPage); 
                setEndIndex(endIndex + rowsPerPage); 
              }} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
    )
}


