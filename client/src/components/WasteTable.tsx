
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
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from 'react'
import { IIngredient } from "../models/Ingredient"
import { ENDPOINT_URL } from '@/staticVar';
import { CircleCheckBig } from 'lucide-react';

export default function WasteTable() {
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
      toast.warning("Waste cannot be negative");
    }
    setInputValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleUpdate = async (id: string) => {
    const wasteToday = inputValues[id];

    try {
      if (parseInt(wasteToday) < 0) {
        toast.error("Waste cannot be negative");
        throw new Error("Waste cannot be negative");
      } else if (wasteToday === "" || wasteToday === undefined) {
        toast.error("Waste cannot be empty");
        throw new Error("Waste cannot be empty");
      }
      console.log(`Updating waste at: ${ENDPOINT_URL}/ingredients/wasteToday/${id}`);

      const response = await axios.patch(

        `${ENDPOINT_URL}/ingredients/wasteToday/${id}`,
        { wasteToday },
      );
      console.log(response);
      getData();
    } catch (error) {
      toast.error("Error updating data: " + error);
    }
  };

  return (
    // <div className="md:space-y-4 md:h-[400px] w-[calc(100%+16px)] md:w-full lg:w-80 flex flex-col bg-gray-50">
    <div className="md:space-y-4  md:w-full flex flex-col bg-gray-50  ">

      <Table className="bg-white">
        <TableCaption>A list of inventory ingredients.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Ingredient</TableHead>
            <TableHead>Waste Today</TableHead>
            <TableHead>Update Waste</TableHead>
            <TableHead className="text-right">Waste Cost (USD)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.slice(startIndex, endIndex).map((ingredient) => {
            return (
              <TableRow key={ingredient._id}>
                <TableCell className="font-medium">{ingredient.name}</TableCell>
                <TableCell className="text-center">
                  {ingredient.wasteToday ? ingredient.wasteToday : "None"}
                </TableCell>
                <TableCell>
                  <form className="flex">
                    <Input
                      className="max-w-18"
                      value={inputValues[ingredient._id]}
                      onChange={(e) =>
                        handleInputChange(ingredient._id, e.target.value)
                      }
                      type="submit"
                      min="0"
                    />
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        handleUpdate(ingredient._id)
                      }}
                    >
                      <CircleCheckBig />
                    </Button>
                  </form>
                </TableCell>
                <TableCell className="text-center">
                  {formatPrice(
                    Math.round(ingredient.unitCost * ingredient.wasteToday || 0),
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
                startIndex === 0 ? "pointer-events-none opacity-50" : undefined
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
                endIndex === 100 ? "pointer-events-none opacity-50" : undefined
              }
              onClick={() => {
                setStartIndex(startIndex + rowsPerPage);
                setEndIndex(endIndex + rowsPerPage);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
