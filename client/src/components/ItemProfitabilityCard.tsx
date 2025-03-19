import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function MenuCard({
  menuName,
  menuPrice,
}: {
  menuName: string;
  menuDescription: string;
  menuPrice: string;
}) {
  return (
    <Card className="w-38 sm:w-40 md:w-48 lg:w-56 hover:cursor-pointer hover:bg-red-50 m-4">
      <CardHeader/>
      <CardContent className="text-center">
        <CardTitle className="mb-2">{menuName}</CardTitle>
        <div>
        <div className="">Price: {menuPrice}</div>
        {/* this needs to update to the cost */}
        <div className="">Cost: {menuPrice}</div>
        <div className="">Profit: {menuPrice}-sum of ingredients cost</div>
        </div>
      </CardContent>
    </Card>
  );
}
