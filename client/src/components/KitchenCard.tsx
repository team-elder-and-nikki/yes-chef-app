import { CardHeader, CardFooter, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "./ui/button"
import { Table, TableHeader, TableHead, TableRow, TableBody, TableCell } from "@/components/ui/table"
import { ITicket } from "@/models/Ticket"
import { IMenu } from "@/models/Menu"
import { useEffect, useState, Fragment } from "react"
import FloatingCard from "@/components/ui/floatingCard";
import axios from "axios";
import { ENDPOINT_URL } from "@/staticVar";

export default function KitchenCard({ ticket }: { ticket: ITicket }) {

    const ticketStatusColors = {
        "unstarted": "bg-red-300",
        "started": "bg-yellow-300",
        "completed": "bg-green-300"
    }
    const headerFooterColorOptions = {
        "unstarted": ticketStatusColors["unstarted"],
        "started": ticketStatusColors["started"],
        "completed": ticketStatusColors["completed"]
    }
    const [headerFooterColor, setHeaderFooterColor] = useState(headerFooterColorOptions[ticket.status])
    useEffect(() => {
        switch (ticket.status) {
            case "unstarted":
                setHeaderFooterColor(headerFooterColorOptions["unstarted"]);
                break;
            case "started":
                setHeaderFooterColor(headerFooterColorOptions["started"])
                break;
            case "completed":
                setHeaderFooterColor(headerFooterColorOptions["completed"]);
                break;
            default:
                setHeaderFooterColor(headerFooterColorOptions["unstarted"]);
                break;
        }
    }, [ticket.status])

    const buttonTextOptions = {
        "unstarted": `Mark 'started'`,
        "started": `Mark 'completed'`,
        "completed": `completed`
    }
    const buttonColorOptions = {
        "unstarted": ticketStatusColors["started"],
        "started": ticketStatusColors["completed"],
        "completed": "bg-green-300"
    }
    const buttonText = buttonTextOptions[ticket.status]
    const buttonColor = buttonColorOptions[ticket.status]

    const handleStatusChange = async ({ticket}:{ticket: ITicket}) => {
        switch (ticket.status) {
            case "unstarted":
                // placeholder to update ticket status
                console.log(`changing status of ticket ${ticket._id.substring(19,24)} to 'started'`);
                const order = {ticket, status: "started"};
                await axios.patch(`${ENDPOINT_URL}/orders/status`, order);
                window.location.reload();
                break;
            case "started":
                // placeholder to update ticket status
                console.log(`changing status of ticket ${ticket._id.substring(19,24)} to 'completed'`);
                const order1 = {ticket, status: "completed"};
                await axios.patch(`${ENDPOINT_URL}/orders/status`, order1);
                window.location.reload();
                break;
            default:
                break;
        }
    };

    // get categories of items
    let menuItemCategories: string[] = []
    for (let item of ticket.items) {
        if (!menuItemCategories.includes(item.category)) {
            menuItemCategories.push(item.category)
        }
    }
    menuItemCategories = menuItemCategories.sort()

    // sort menu items by categories
    let sortedMenuItems: { [key: string]: IMenu[] } = {}
    for (let category of menuItemCategories) {
        sortedMenuItems[category] = ticket.items.filter((item) => item.category === category)
    }

    return (
        <FloatingCard className="size-max h-fit max-h-fit py-0 my-10">
            <CardHeader className={"rounded-t-xl py-3 flex flex-row justify-between " + headerFooterColor}>
                <CardTitle className="w-max">{`#${ticket._id.substring(19,24)}`}</CardTitle>
                <CardTitle className="w-max">{`${new Date(ticket.createdAt).getHours()}:${new Date(ticket.createdAt).getMinutes()}`}</CardTitle>
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
                                                <TableCell>{item.cartAmount}</TableCell>
                                                <TableCell className="text-right">{item.menuItem}</TableCell>
                                            </TableRow>
                                        ))}
                                    </Fragment>
                                )
                            })
                        }
                    </TableBody>
                </Table>
                {ticket.status !== "completed" && <Button className={`${buttonColor} mt-4 capitalize`} onClick={() => handleStatusChange({ticket: ticket})}>{buttonText}</Button>}
            </CardContent>
            <CardFooter className={"rounded-b-xl py-3 justify-center " + headerFooterColor}>
                <CardTitle className="text-center capitalize">{ticket.status}</CardTitle>
            </CardFooter>
        </FloatingCard>
    )
}
