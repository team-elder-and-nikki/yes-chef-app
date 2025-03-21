import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FloatingCard from "@/components/ui/floatingCard";

export default function KitchenMenuToggle({
  text,
  icon,
  onClick,
  toggleView,
}: {
  text: string;
  icon: React.JSX.Element;
  onClick: (e: string) => void;
  toggleView: string;
}) {
  return (
    <FloatingCard className="w-[80vw] my-1 md:w-2/5 text-sm md:text-lg p-2" onClick={() => onClick(text)}>
      <CardContent className="justify-between flex items-center">
        <h2>{text}</h2>
        <Button
          className={`text-center ${toggleView == text ? "bg-amber-700" : ""}`}
        >
          {icon}
        </Button>
      </CardContent>
    </FloatingCard>
  );
}
