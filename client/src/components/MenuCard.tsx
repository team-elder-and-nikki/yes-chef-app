import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function MenuCard({
  menuName,
  menuDescription,
  menuPrice,
  image,
  imageAlt,
  onClickTrigger,
}: {
  menuName: string;
  menuDescription: string;
  menuPrice: string;
  onClickTrigger: () => void;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <Card onClick={()=>onClickTrigger()} className="w-60 hover:cursor-pointer hover:bg-red-50 m-2">
      {image && imageAlt && <CardHeader>
        <img src={image} alt={imageAlt}/>
      </CardHeader>}
      <CardContent className="text-center">
        <CardTitle className="mb-2">{menuName}</CardTitle>
        <CardDescription className="mb-6">{menuDescription}</CardDescription>
        <span className="font-semibold">{menuPrice}</span>
      </CardContent>
    </Card>
  );
}
