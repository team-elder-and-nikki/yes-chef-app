import { Card, CardHeader, CardFooter, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "./ui/button"
import { Table, TableHeader, TableHead, TableRow, TableBody, TableCell, TableCaption } from "@/components/ui/table"
import { ITicket } from "../models/Ticket"
import { useEffect, useState } from "react"


export default function KitchenCard({ ticket }: { ticket: ITicket }) {
    const ticketStatusColors = {
        "Unstarted": "bg-red-300",
        "In Progress": "bg-yellow-300",
        "Completed": "bg-green-300"
    }
    const headerFooterColorOptions = {
        "Unstarted": ticketStatusColors["Unstarted"],
        "In Progress": ticketStatusColors["In Progress"],
        "Completed": ticketStatusColors["Completed"]
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

    const buttonTextOptions = {
        "Unstarted": `Mark 'In Progress'`,
        "In Progress": `Mark 'Completed'`,
        "Completed": `Completed`
    }
    const buttonColorOptions = {
        "Unstarted": ticketStatusColors["In Progress"],
        "In Progress": ticketStatusColors["Completed"],
        "Completed": "bg-green-300"
    }
    const buttonText = buttonTextOptions[ticket.status]
    const buttonColor = buttonColorOptions[ticket.status]

    const handleStatusChange = () => {
        switch (ticket.status) {
            case "Unstarted":
                // placeholder to update ticket status
                console.log(`changining status of ticket ${ticket.ticket_number} to 'In Progress'`)
                break;
            case "In Progress":
                // placeholder to update ticket status
                console.log(`changining status of ticket ${ticket.ticket_number} to 'Completed'`)
                break;
            default:
                break;
        }
    };

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
                {ticket.status !== "Completed" && <Button className={buttonColor} onClick={() => handleStatusChange()}>{buttonText}</Button>}
            </CardContent>
            <CardFooter className={"rounded-b-xl py-3 justify-center " + headerFooterColor}>
                <CardTitle className="text-center">{ticket.status}</CardTitle>
            </CardFooter>
        </Card>
    )
}