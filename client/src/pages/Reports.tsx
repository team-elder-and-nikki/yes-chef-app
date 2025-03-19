import NavBar from "@/components/NavBar";
import ItemProfitability from "@/components/MenuEngineeringDashComponents/ItemProfitability";
import TableComponent from "@/components/MenuEngineeringDashComponents/Table";

export default function Reports() {
  return (
    <>
      <NavBar />
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
