
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
  import { toast } from "sonner"
  import { ShoppingCartIcon } from "lucide-react";
  import { IncrementingInput } from "@/components/ui/IncrementingInput"
  import { Button } from "@/components/ui/button"
  import { Input } from "@/components/ui/input"
  import { useEffect, useState } from 'react'
  import { IIngredient } from "../models/Ingredient"
  import { ENDPOINT_URL } from '@/staticVar';

export default function InventoryTable() {
  const rowsPerPage = 15;
  const [data, setIngredients] = useState<IIngredient[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(rowsPerPage);
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});

  function formatPrice(price: number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(price);
  }
  function updateOrderQty(id: string, newOrderQty: number) {
    setIngredients((prevIngredients) =>
      prevIngredients.map((ingredient) =>
        ingredient._id === id
          ? { ...ingredient, orderQty: newOrderQty } // Add a new field for orderQty
          : ingredient,
      ),
    );
  }

  const getData = async () => {
    try {
      const response = await axios.get(`${ENDPOINT_URL}/ingredients`);
      const data = await response.data;
      console.log({ data });
      setIngredients(data);
    } catch (error) {
      toast.error("Error fetching data: " + error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInputChange = (id: string, value: string) => {
    if (parseInt(value) < 0) {
      toast.warning("Quantity cannot be negative");
    }
    setInputValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleUpdate = async (id: string) => {
    const quantity = inputValues[id];

    try {
      if (parseInt(quantity) < 0) {
        toast.error("Quantity cannot be negative");
        throw new Error("Quantity cannot be negative");
      } else if (quantity === "" || quantity === undefined) {
        toast.error("Quantity cannot be empty");
        throw new Error("Quantity cannot be empty");
      }
      const response = await axios.patch(
        `${ENDPOINT_URL}/ingredients/updateQuantity/${id}`,
        { quantity },
      );
      console.log(response);
      getData();
    } catch (error) {
      toast.error("Error updating data: " + error);
    }
  };
  

  function displayNextOrderDate(ingredient: IIngredient){

    let displayDate = "";

    const lastOrderedMonth = new Date(ingredient.lastOrderDate).getMonth()+1;
    const lastOrderedDate = new Date(ingredient.lastOrderDate).getDate()+1;
    const lastOrderedYear = new Date(ingredient.lastOrderDate).getFullYear();

    const date = new Date();
    const currentMonth= date.getMonth()+1;
    const currentDate= date.getDate();
    const currentYear= date.getFullYear();

    if ((lastOrderedYear <= currentYear) && (lastOrderedMonth <= currentMonth) && (lastOrderedDate <= currentDate)){

      let newMonth = lastOrderedMonth;
      let newDate = lastOrderedDate;
      let newYear = lastOrderedYear;

      newMonth += 1;

      switch(lastOrderedMonth){
        case 11:
        case 4:
        case 6:
        case 9:
          if(lastOrderedDate == 30){
            newMonth++;
            newDate = 1;
          }
        case 10:
        case 8:
        case 7:
        case 5:
        case 3:
        case 1:
          if(lastOrderedDate == 31){
            newMonth++;
            newDate = 1;
          }
        case 2:
          if(lastOrderedDate == 28 || lastOrderedDate == 29){
            newMonth++;
            newDate = 1;
          }
        case 12:
          if(lastOrderedDate == 31){
            newMonth++;
            newDate = 1;
            newYear++;
          }
      }

      displayDate = `${newMonth}/${newDate}/${newYear}`
    }else{
      displayDate = `${lastOrderedMonth}/${lastOrderedDate}/${lastOrderedYear}`
    }
    return <>{displayDate}</>
  }
  return (
    <>
      <Table className="bg-white">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Ingredient</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Update Stock</TableHead>
            <TableHead className="text-center">Threshold</TableHead>
            <TableHead className="text-center">Unit Cost(USD)</TableHead>
            <TableHead className="text-center">Next order</TableHead>
            <TableHead className="text-center">Order Now(Units)</TableHead>
            <TableHead className="text-right">Order Cost(USD)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.slice(startIndex, endIndex).map((ingredient) => {
            return (
              <TableRow key={ingredient._id}>
                <TableCell className="font-medium">{ingredient.name}</TableCell>
                <TableCell className="text-center">
                  {ingredient.quantity ? ingredient.quantity : "Out of Stock"}
                </TableCell>
                <TableCell>
                  <form className="flex">
                    <Input
                      className="max-w-18 cursor-pointer"
                      value={inputValues[ingredient._id]}
                      onChange={(e) =>
                        handleInputChange(ingredient._id, e.target.value)
                      }
                      type="submit"
                      min="0"
                    />
                    <Button 
                    onClick={(e) =>{
                      e.preventDefault();
                      handleUpdate(ingredient._id)}}
                    >
                      Update
                    </Button>
                  </form>
                </TableCell>

                <TableCell className="text-center">
                  {ingredient.thresholdLevel}
                </TableCell>
                <TableCell className="text-center">
                  {formatPrice(ingredient.unitCost)}
                </TableCell>
                <TableCell className="text-center">{displayNextOrderDate(ingredient)}</TableCell>
                <TableCell className="flex items-center justify-between">
                  <IncrementingInput
                    value={ingredient.orderQty || 0}
                    onChange={(newOrderQty) =>
                      updateOrderQty(ingredient._id, newOrderQty)
                    }
                  />
                  <Button>
                  <ShoppingCartIcon
                  ></ShoppingCartIcon>
                  </Button>

                </TableCell>
                <TableCell className="text-center">
                  {formatPrice(
                    (ingredient.unitCost * ingredient.orderQty || 0),
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={
                startIndex === 0 ? "pointer-events-none opacity-50" : "cursor-pointer"
              }
              onClick={() => {
                setStartIndex(startIndex - rowsPerPage);
                setEndIndex(endIndex - rowsPerPage);
              }}
            />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              className={
                endIndex === 100 ? "pointer-events-none opacity-50" : "cursor-pointer"
              }
              onClick={() => {
                setStartIndex(startIndex + rowsPerPage);
                setEndIndex(endIndex + rowsPerPage);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
