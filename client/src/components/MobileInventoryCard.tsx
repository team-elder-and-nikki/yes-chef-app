import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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
}

export function MobileInventoryCard() {
  const rowsPerPage = 6;
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(rowsPerPage);

  function fetchIngredients() {
    fetch("http://localhost:8000/ingredients")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setIngredients(data);
      })
      .catch(function (error) {
        console.error("Error fetching ingredients:", error);
      });
  }

  useEffect(function () {
    fetchIngredients();
  }, []);

  function updateQuantity(id: string, newQuantity: number) {
    setIngredients((prevIngredients) =>
      prevIngredients.map((ingredient) =>
        ingredient._id === id
          ? { ...ingredient, quantity: newQuantity }
          : ingredient
      )
    );
  }

  function updateOrderQty(id: string, newOrderQty: number) {
    setIngredients((prevIngredients) =>
      prevIngredients.map((ingredient) =>
        ingredient._id === id
          ? { ...ingredient, orderQty: newOrderQty } // Add a new field for orderQty
          : ingredient
      )
    );
  }

  return (
    <div className="md:hidden">
      <div className="grid grid-cols-7 items-center text-center w-full">
        <div className="col-span-2">Item</div>
        <div className="col-span-2">Stock</div>
        <div className="col-span-2">Last Order</div>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {ingredients.slice(startIndex, endIndex).map(
          (ingredient) => (
            (
              <AccordionItem key={ingredient._id} value={ingredient._id}>
                <AccordionTrigger className="grid grid-cols-7 items-center text-center w-full">
                  <div className="col-span-2 text-center">{ingredient.name}</div>
                  <div className="col-span-2 flex justify-center">
                    <Badge className="flex items-center justify-center">
                      {ingredient.quantity}
                    </Badge>
                  </div>

                  <div className="col-span-2 flex justify-center">
                    {new Date(ingredient.lastOrderDate).toLocaleDateString(
                      "en-US",
                      { month: "short", day: "2-digit", year: "numeric" }
                    )}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col items-center">
                  <div className="flex flex-col items-center w-full mb-4">
                    <div className="text-center mb-2">Update Stock</div>
                    <div className="flex justify-center">
                      <IncrementingInput
                        value={ingredient.quantity}
                        onChange={(newQuantity) =>
                          updateQuantity(ingredient._id, newQuantity)
                        }
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-center w-full justify-between">
                    <div className="flex-row justify-items-center">
                      <div>Unit Cost</div>
                      <div>${ingredient.unitCost.toFixed(2)}</div>
                    </div>
                    <div className="flex-col justify-items-center">
                      <div>Order Qty</div>
                      <IncrementingInput
                        value={ingredient.orderQty || 0}
                        onChange={(newOrderQty) =>
                          updateOrderQty(ingredient._id, newOrderQty)
                        }
                      />
                    </div>
                    <div className="flex-col justify-items-center">
                      <div>Total</div>
                      <div>
                        $
                        {(
                          ingredient.unitCost * (ingredient.orderQty || 0)
                        ).toFixed(2)}
                      </div>
                    </div>
                    {/* hitting shopping cart icon should send the order to the distributor api */}
                    <ShoppingCartIcon size={16} className=""></ShoppingCartIcon>
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          )
        )}
      </Accordion>
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
