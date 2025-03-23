import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableFooter
  } from "@/components/ui/table";

const ingredients = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]
  
  interface ProfitabilityComponentProps{
    menu: [];

}


  export default function ProfitabilityTable({menu}: ProfitabilityComponentProps){
    // const [data, setIngredients] = useState<IIngredient[]>([]);
    return(
        <>  

    <Table>
      <TableCaption>Dish Profitability and expense chart</TableCaption>
      <TableHeader>
        <TableRow className="">
          <TableHead className="w-3/4">Ingredient</TableHead>
          <TableHead className="text-right w-1/4">Cost</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
      {/* will use menu prop to interiate through ingredients */}
        {ingredients.map((ingredient)=>{
            return(
            <TableRow key={ingredients.invoice}>
                <TableCell className="font-medium w-3/4">{ingredient.paymentStatus}</TableCell>
                <TableCell className="font-medium text-right w-1/4">{ingredient.totalAmount}</TableCell>
            </TableRow>)
        })
        }
        
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Expense</TableCell>
          <TableCell className="text-right">$1000</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Profit</TableCell>
          <TableCell className="text-right">$1000</TableCell>
        </TableRow>
      </TableFooter>
    </Table>

 
 </>
 )

 }