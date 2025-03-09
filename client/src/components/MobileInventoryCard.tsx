import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ShoppingCartIcon } from "lucide-react";

interface Ingredient {
  _id: string;
  name: string;
  unitCost: number;
  quantity: number;
  thresholdLevel: number;
}

export function MobileInventoryCard() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

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

  return (
    <Accordion type="single" collapsible className="w-full">
      {ingredients.map((ingredient) => (
        <AccordionItem key={ingredient._id} value={ingredient._id}>
          <AccordionTrigger className="grid grid-cols-5 items-center text-center w-full">
            <div className="text-center">{ingredient.name}</div>
            <div className="flex justify-center">
              <Badge className="flex items-center justify-center">
                {ingredient.quantity}
              </Badge>
            </div>
            <div>last order date</div>
            <div>${ingredient.unitCost.toFixed(2)}</div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-row justify-around items-center">
            <div className="flex-col justify-items-center">
              <div>Unit Cost</div>
              <div>${ingredient.unitCost.toFixed(2)}</div>
            </div>
            {/* reorderqty should be an input field or a +/- */}
            <div className="flex-col justify-items-center">
                <div>reorder qty</div>
                <div>input box</div>
            </div>
            <div className="flex-col justify-items-center">
              <div>total cost</div>
              <div>${(ingredient.unitCost * ingredient.quantity).toFixed(2)}</div>
            </div>
            {/* hitting shopping cart icon should send the order to the distributor api */}
            <ShoppingCartIcon></ShoppingCartIcon>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
