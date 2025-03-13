import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function KitchenMenuToggle({
  text,
  icon,
}: {
  text: string;
  icon: React.JSX.Element;
}) {
  return (
    <Card className="w-1/5 p-2">
      <CardContent className="justify-between flex items-center">
        <h2>{text}</h2>
        <Button className="text-center">{icon}</Button>
      </CardContent>
    </Card>
  );
}
