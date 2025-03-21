import ItemProfitability from "@/components/MenuEngineeringDashComponents/ItemProfitability";
import TableComponent from "@/components/MenuEngineeringDashComponents/Table";
import { Suspense } from "react";
import LoadingMenuItems, { LoadingMenuItemsForReportsPage } from "@/components/Loading";
import { IIngredient } from "@/models/Ingredient";

export default function Reports() {

  interface IWasteIngredient extends IIngredient {
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

        <div>
          <Suspense fallback={<LoadingMenuItemsForReportsPage />}>
            <ItemProfitability />
            {/* <TableComponent /> */}
          </Suspense>
        </div>

      </div>
    </>
  );
}
