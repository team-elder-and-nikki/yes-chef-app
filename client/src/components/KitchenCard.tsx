import { Card, CardHeader, CardFooter, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "./ui/button"
import { Table, TableHeader, TableHead, TableRow, TableBody, TableCell, TableCaption } from "@/components/ui/table"
import { ITicket } from "../models/Ticket"


export default function KitchenCard({ ticket }: { ticket: ITicket }) {

    return (
        <Card className="size-max h-fit max-h-fit py-0">
            <CardHeader className="rounded-t-xl py-3 flex flex-row justify-between bg-amber-300">
                <CardTitle className="w-max">{`#${ticket.ticket_number}`}</CardTitle>
                <CardTitle className="w-max">{`${ticket.ordered_at.getHours()}:${ticket.ordered_at.getMinutes()}`}</CardTitle>
            </CardHeader>
            <CardContent className="px-2">
                <Table>
                    <TableHeader>
                        <TableHead>QTY</TableHead>
                        <TableHead className="text-right">Menu Item</TableHead>
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
            <CardFooter className="rounded-b-xl py-3 bg-amber-300 justify-center">
                <CardTitle className="text-center">{ticket.status}</CardTitle>
            </CardFooter>
        </Card>
    )
}