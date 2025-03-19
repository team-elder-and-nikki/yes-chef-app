import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function KitchenMenuToggle({
  text,
  icon,
  onClick,
  toggleView
}: {
  text: string;
  icon: React.JSX.Element;
  onClick: (e: string) => void;
  toggleView: string;
}) {
  return (
    <Card className="w-[95vw] my-1 md:w-1/5 p-2" onClick={() => onClick(text)}>
      <CardContent className="justify-between flex items-center">
        <h2>{text}</h2>
        <Button className={`text-center ${toggleView == text ? "bg-amber-700" : ""}`}>{icon}</Button>
      </CardContent>
    </Card>
  );
}
