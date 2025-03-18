import NavBar from "@/components/NavBar";
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
      <NavBar />
      <div
        className="md:ml-21" /*bump everything to the right when NavBar is fixed to the left*/
      >
        <h1>Reports</h1>
      </div>
    </>
  );
}
