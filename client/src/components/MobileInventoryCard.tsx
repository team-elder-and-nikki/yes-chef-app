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
    <Accordion type="single" collapsible className="w-full m-4">
      {ingredients.map((ingredient) => (
        <AccordionItem key={ingredient._id} value={ingredient._id}>
          <AccordionTrigger className="flex justify-around items-center col-end-3">
            <div>{ingredient.name}</div>
            <Badge>{ingredient.quantity}</Badge>
            <div>${ingredient.unitCost.toFixed(2)}</div>
          </AccordionTrigger>
          <AccordionContent className="flex justify-around items-center">
            {/* reorderqty should be an input field or a +/- */}
            <div>reorder qty</div>
           {/* update this to be unit cost * reorder qty from input box above */}
            <div>${(ingredient.unitCost * ingredient.quantity).toFixed(2)}</div>
            {/* hitting shopping cart icon should send the order to the distributor api */}
            <ShoppingCartIcon></ShoppingCartIcon>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
