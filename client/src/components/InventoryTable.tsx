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
  
  import { useEffect, useState } from 'react'

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
  const [data, setData] = useState<Ingredient[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(rowsPerPage);


  const getData = async () => {
    try {
      const response = await fetch('http://localhost:8000/ingredients', {mode:'cors'});
      const data = await response.json();
      console.log({data});
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    }
    useEffect(() => {
        getData();
      }, [])
  return(
      <>  
        <Table>
        <TableCaption>A list of inventory ingerdients.</TableCaption>
        <TableHeader>
            <TableRow>
            <TableHead className="w-[100px]">Ingredient</TableHead>
            <TableHead>Quanity</TableHead>
            <TableHead>Threshold</TableHead>
            <TableHead>Unit Cost</TableHead>
            <TableHead>Next order</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {data.slice(startIndex, endIndex).map((ingredient)=>{
                return <>
                <TableRow>
                <TableCell className="font-medium">{ingredient.name}</TableCell>
                <TableCell>{ingredient.quantity}</TableCell>
                <TableCell>{ingredient.thresholdLevel}</TableCell>
                <TableCell>{ingredient.unitCost}</TableCell>
                <TableCell>3/17/2025</TableCell>
                <TableCell className="text-right">{ingredient.unitCost*ingredient.quantity}</TableCell>
                </TableRow>
                </>
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