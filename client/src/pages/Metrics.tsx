import ProfitabilityTable from "../components/ProfitabilityTable";
import { useParams} from "react-router-dom"
import { ENDPOINT_URL } from '@/staticVar';
import { toast } from "sonner"
import axios from 'axios';
import { useEffect, useState } from 'react'
import WasteTable from "@/components/WasteTable"



interface Ingredient {
  _id: string;
  name: string;
  unitCost: number;
  quantity: number;
  thresholdLevel: number;
  lastOrderDate: Date;
  orderQty: number;
  wasteToday: number
}


function MenuEngineeringDashboard() { 
  const params= useParams()
  const [data, setIngredients] = useState<IMenu[]>([]);
  const [loading, setLoading] = useState(true);

  
  const getData = async () => {
    try {
      const response = await axios.get(`${ENDPOINT_URL}/metrics/${params.id}`);
      const data = await response.data;
      setIngredients(data);
    } catch (error) {
      toast.error("Error fetching data: " + error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (data.length === 0) {
    return <div>No data available</div>;
  }

  const dishPrice = data[0].price;
  const ingredientsArray = data[0].ingredients
  const dishName= data[0].name
  
 
  return (
    <div className="sm:flex sm:flex-col  flex items-center ">
      <div className="h-15"></div>
        <div className="grid lg:grid-flow-col  gap-10">
          <div className="flex flex-col lg:w-150">
            <h2 className="text-center text-xl my-2 mb-6">
              Displaying Profitability for {dishName}
            </h2>
              <ProfitabilityTable 
              price={dishPrice}
              ingredientArr={ingredientsArray}
              />
          </div>
          <div className="">
          <h2 className="text-center text-xl my-2 mb-6">
            Waste Tracking
          </h2>
            <WasteTable />
          </div>
        </div>
      </div>
     
   
    
  );
}

export default MenuEngineeringDashboard;
