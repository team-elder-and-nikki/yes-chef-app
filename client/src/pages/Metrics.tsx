import ProfitabilityTable from "../components/ProfitabilityTable";
import { useParams} from "react-router-dom"
import { ENDPOINT_URL } from '@/staticVar';
import { toast } from "sonner"
import axios from 'axios';
import { useEffect, useState } from 'react'


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
    <div>
        <div className="text-center text-3xl my-2">
          <h1>
            Menu Engineering Dashboard
          </h1>
        </div>
        <div>
          <h2 className="text-center text-xl my-2">
            Displaying Metrics for {dishName}
          </h2>
       
        <div className=" lg:mx-20 md:mx-20 flex align-center lg:flex-row gap-6 bg-gray-100 p-6">
        <ProfitabilityTable 
        price={dishPrice}
        ingredientArr={ingredientsArray}
        />
          <div className=" flex flex-col space-y-6 lg:mx-10 md:mx-20 lg:w-2/3">
            
          </div>
      </div>
      </div>
    </div>
    
  );
}

export default MenuEngineeringDashboard;
