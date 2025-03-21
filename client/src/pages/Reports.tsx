import ItemProfitability from "@/components/MenuEngineeringDashComponents/ItemProfitability";
import TableComponent from "@/components/MenuEngineeringDashComponents/Table";

import { IIngredient } from "@/models/Ingredient";

export default function Reports() {

  interface IWasteIngredient extends IIngredient{
    priceOfMenu: number;
    amtWasted: number;
  }

  function manageMoneyLost({
    ingredient,
  }: {
    ingredient: IWasteIngredient;
  }) {
    return ingredient.amtWasted * ingredient.unitCost;
  }

  return (
    <>
      <div
        className="md:ml-21" /*bump everything to the right when NavBar is fixed to the left*/
      >
        <h1>Reports</h1>
        <div>
          <ItemProfitability />
          {/* <TableComponent /> */}
        </div>

      </div>
    </>
  );
}
