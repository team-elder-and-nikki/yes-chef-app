import NavBar from "@/components/NavBar";
import KitchenToggle from "@/components/KitchenToggle";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {Stars, AlertCircle} from "lucide-react";

export default function Kitchen() {
  return (
    <>
      <NavBar />
      <div
        className="md:ml-21" /*bump everything to the right when NavBar is fixed to the left*/
      >
        <h1>Kitchen</h1>

        <section className="flex items-start justify-between">
        <KitchenToggle />

        <Card className="w-1/4 p-2">
          <CardContent className="justify-between flex items-center">
            <h2>Predictions</h2>
            <Button className="text-center"><Stars/></Button>
          </CardContent>
        </Card>

        <Card className="w-1/4 p-2">
          <CardContent className="justify-between flex items-center">
            <h2>Ingredients Alerts?</h2>
            <Button className="text-center"><AlertCircle/></Button>
          </CardContent>
        </Card>
        </section>
      </div>
    </>
  );
}
