import { Card, CardHeader, CardFooter, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "./ui/button"
import { Table, TableHeader, TableHead, TableRow, TableBody, TableCell } from "@/components/ui/table"
import { useEffect, useState, Fragment } from "react"
import type { IRecommendation, ITimeBlocks } from "@/pages/Kitchen"

export default function RecommendationCard({recommendation}: {recommendation: IRecommendation}){
    return(
        <Card className="size-max h-fit max-h-fit py-0">
        <CardHeader className={"rounded-t-xl py-3 flex flex-row justify-between bg-blue-300"}>
            <CardTitle className="w-max">{`#${recommendation.quantity}`}</CardTitle>
            <CardTitle className="w-max">{`${ticket.ordered_at.getHours()}:${ticket.ordered_at.getMinutes()}`}</CardTitle>
        </CardHeader>
        <CardContent className="px-2">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>QTY</TableHead>
                        <TableHead className="text-right">Menu Item</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        Object.keys(sortedMenuItems).map((category) => {
                            return (
                                <Fragment key={category}>
                                    <TableRow>
                                        <TableCell colSpan={2} className="font-bold bg-gray-200 py-0">{category}</TableCell>
                                    </TableRow>
                                    {sortedMenuItems[category].map((item: any) => (
                                        <TableRow key={item._id}>
                                            <TableCell>{item.quantity}</TableCell>
                                            <TableCell className="text-right">{item.name}</TableCell>
                                        </TableRow>
                                    ))}
                                </Fragment>
                            )
                        })
                    }
                </TableBody>
            </Table>
            {ticket.status !== "Completed" && <Button className={buttonColor} onClick={() => handleStatusChange()}>{buttonText}</Button>}
        </CardContent>
        <CardFooter className={"rounded-b-xl py-3 justify-center " + headerFooterColor}>
            <CardTitle className="text-center">{ticket.status}</CardTitle>
        </CardFooter>
    </Card>
    )
}