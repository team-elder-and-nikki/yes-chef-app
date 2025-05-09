import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import FloatingCard from "@/components/ui/floatingCard";

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
    <FloatingCard onClick={() => onClickTrigger()} className="w-32 sm:w-40 md:w-48 lg:w-56 hover:cursor-pointer hover:bg-red-50 m-0 md:m-4">
      {image && imageAlt && <CardHeader>
        <img src={image} alt={imageAlt} />
      </CardHeader>}
      <CardContent className="text-center px-2 md:px-6 text-sm md:text-lg flex flex-col justify-between h-full">
        <CardTitle className="mb-2">{menuName}</CardTitle>
        <CardDescription className="mb-6 text-sm md:text-base">{menuDescription}</CardDescription>
        <span className="font-semibold ">{menuPrice}</span>
      </CardContent>
    </FloatingCard>
  );
}
