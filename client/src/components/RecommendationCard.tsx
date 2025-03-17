import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { useEffect, useState, Fragment } from "react";
import { IMenuIngredient } from "@/models/Menu";
interface IRecommendationCard {
  endTime: Date;
  startTime: Date;
  name: string;
  quantity: number;
  ingredients: IMenuIngredient[];
}

export default function RecommendationCard({
  recommendation,
}: {
  recommendation: IRecommendationCard;
}) {
  return (
    <Card className="size-max h-fit max-h-fit py-0">
      <CardHeader
        className={
          "rounded-t-xl py-3 flex flex-row justify-between bg-blue-300"
        }
      >
        <CardTitle className="w-max">{`Quantity: ${recommendation.quantity}`}</CardTitle>
        <CardTitle className="w-max">{`Ordered: ${recommendation.startTime.getHours()}:00 - ${recommendation.endTime.getHours()}:00`}</CardTitle>
      </CardHeader>
      <CardContent className="px-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Ingredients</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <Fragment>
              <TableRow>
                <TableCell
                  colSpan={2}
                  className="font-bold bg-gray-200 py-0"
                >{`${recommendation.name}`}</TableCell>
              </TableRow>
              {recommendation.ingredients.map((item) => (
                <TableRow key={item.ingredientId}>
                  <TableCell>{item.ingredientName}</TableCell>
                </TableRow>
              ))}
            </Fragment>
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="rounded-b-xl py-3 justify-center bg-blue-300">
        <CardTitle className="text-center">
          Predictive Prep Recommendation
        </CardTitle>
      </CardFooter>
    </Card>
  );
}
