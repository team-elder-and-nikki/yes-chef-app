import { Card, CardHeader, CardFooter, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "./ui/button"
import { Table, TableHeader, TableHead, TableRow, TableBody, TableCell, TableCaption } from "@/components/ui/table"
import { ITicket } from "../models/Ticket"
import { useEffect, useState } from "react"


export default function KitchenCard({ ticket }: { ticket: ITicket }) {
    const headerFooterColorOptions = {
        "Unstarted": "bg-red-300",
        "In Progress": "bg-yellow-300",
        "Completed": "bg-green-300"
    }
    const [headerFooterColor, setHeaderFooterColor] = useState(headerFooterColorOptions[ticket.status])
    useEffect(() => {
        switch (ticket.status) {
            case "Unstarted":
                setHeaderFooterColor(headerFooterColorOptions["Unstarted"]);
                break;
            case "In Progress":
                setHeaderFooterColor(headerFooterColorOptions["In Progress"])
                break;
            case "Completed":
                setHeaderFooterColor(headerFooterColorOptions["Completed"]);
                break;
            default:
                setHeaderFooterColor(headerFooterColorOptions["Unstarted"]);
                break;
        }
    }, [ticket.status])

    return (
        <Card className="size-max h-fit max-h-fit py-0">
            <CardHeader className={"rounded-t-xl py-3 flex flex-row justify-between " + headerFooterColor}>
                <CardTitle className="w-max">{`#${ticket.ticket_number}`}</CardTitle>
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
                        {ticket.menu_items.map((item) => (
                            <TableRow key={item._id}>
                                <TableCell>{item.quantity}</TableCell>
                                <TableCell className="text-right">{item.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Button> Change Status</Button>
            </CardContent>
            <CardFooter className={"rounded-b-xl py-3 justify-center " + headerFooterColor}>
                <CardTitle className="text-center">{ticket.status}</CardTitle>
            </CardFooter>
        </Card>
    )
}