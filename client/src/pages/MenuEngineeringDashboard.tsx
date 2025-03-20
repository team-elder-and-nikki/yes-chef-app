import React from "react";
import DishProfitability from "../components/MenuEngineeringDashComponents/ItemProfitability";
import TableComponent from "../components/MenuEngineeringDashComponents/Table";
import ProfitabilityTable from "../components/ProfitabilityTable"
function MenuEngineeringDashboard() {
  //test data, can be deleted whenever
  const tableOneHeadings = [
    "Ingredient",
    "Amount Used",
    "Wasted",
    "Dollars Wasted",
  ];
  const tableOneRows = [
    ["Cheese", "45", "5", "$5"],
    ["Cheese", "45", "5", "$5"],
    ["Cheese", "45", "5", "$5"],
    ["Cheese", "45", "5", "$5"],
  ];

  const tableTwoHeadings = [
    "Ingredient",
    "Quantity Ordered",
    "Price Per Unit",
    "Order Total",
  ];
  const tableTwoRows = [
    ["Cheese", "15", "$1", "$15"],
    ["Cheese", "15", "$1", "$15"],
    ["Cheese", "15", "$1", "$15"],
    ["Cheese", "15", "$1", "$15"],
  ];

  const dishes = [
    {
      _id: { $oid: "67c9f05c703d7cadb36e26de" },
      category: "Appetizer",
      name: "Calamari",
      ingredients: [
        { ingredientName: "Squid", ingredientId: "6" },
        { ingredientName: "Flour", ingredientId: "7" },
        { ingredientName: "Eggs", ingredientId: "8" },
        { ingredientName: "Garlic Aioli", ingredientId: "9" },
        { ingredientName: "Lemon", ingredientId: "10" },
      ],
      quantity: "8",
      price: "12.99",
      prepTime: "12",
      image: "",
      grossProfit: 32,
      expense: 17,
      netProfit: 15,
    },
    {
      _id: { $oid: "67c9f05c703d7cadb36e26de" },
      category: "Appetizer",
      name: "Calamari",
      ingredients: [
        { ingredientName: "Squid", ingredientId: "6" },
        { ingredientName: "Flour", ingredientId: "7" },
        { ingredientName: "Eggs", ingredientId: "8" },
        { ingredientName: "Garlic Aioli", ingredientId: "9" },
        { ingredientName: "Lemon", ingredientId: "10" },
      ],
      quantity: "8",
      price: "12.99",
      prepTime: "12",
      image: "",
      grossProfit: 32,
      expense: 17,
      netProfit: 15,
    },
    {
      _id: { $oid: "67c9f05c703d7cadb36e26de" },
      category: "Appetizer",
      name: "Calamari",
      ingredients: [
        { ingredientName: "Squid", ingredientId: "6" },
        { ingredientName: "Flour", ingredientId: "7" },
        { ingredientName: "Eggs", ingredientId: "8" },
        { ingredientName: "Garlic Aioli", ingredientId: "9" },
        { ingredientName: "Lemon", ingredientId: "10" },
      ],
      quantity: "8",
      price: "12.99",
      prepTime: "12",
      image: "",
      grossProfit: 32,
      expense: 17,
      netProfit: 15,
    },
    {
      _id: { $oid: "67c9f05c703d7cadb36e26de" },
      category: "Appetizer",
      name: "Calamari",
      ingredients: [
        { ingredientName: "Squid", ingredientId: "6" },
        { ingredientName: "Flour", ingredientId: "7" },
        { ingredientName: "Eggs", ingredientId: "8" },
        { ingredientName: "Garlic Aioli", ingredientId: "9" },
        { ingredientName: "Lemon", ingredientId: "10" },
      ],
      quantity: "8",
      price: "12.99",
      prepTime: "12",
      image: "",
      grossProfit: 32,
      expense: 17,
      netProfit: 15,
    },
  ];
  //test data end

  return (
    <div className="  lg:mx-20 md:mx-20 flex flex-col lg:flex-row gap-6 bg-gray-100 p-6">
      {/* <div className="flex-grow lg:w-3/4">
        <DishProfitability dishes={dishes} />
      </div> */}
    <ProfitabilityTable />
      <div className=" flex flex-col space-y-6 lg:mx-10 md:mx-20 lg:w-2/3">
        
        <TableComponent 
          headings={tableOneHeadings} rows={tableOneRows} tableName={"Waste Metrics"}
         />
        <TableComponent
         headings={tableTwoHeadings} rows={tableTwoRows} tableName={"Ingredient Cost Tracking"}
         />
      </div>
    </div>
  );
}

export default MenuEngineeringDashboard;
