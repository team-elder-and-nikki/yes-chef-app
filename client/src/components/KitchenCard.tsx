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
                console.log(`changing status of ticket ${ticket.ticket_number} to 'In Progress'`)
                break;
            case "In Progress":
                // placeholder to update ticket status
                console.log(`changing status of ticket ${ticket.ticket_number} to 'Completed'`)
                break;
            default:
                break;
        }
    };

    // get categories of items
    let menuItemCategories: string[] = []
    for (let item of ticket.menu_items) {
        if (!menuItemCategories.includes(item.category)) {
            menuItemCategories.push(item.category)
        }
    }
    menuItemCategories = menuItemCategories.sort()

    // sort menu items by categories
    let sortedMenuItems: { [key: string]: IMenu[] } = {}
    for (let category of menuItemCategories) {
        sortedMenuItems[category] = ticket.menu_items.filter((item) => item.category === category)
    }

    async function getOrderData(){
        try{
            const data = await axios.get(`${ENDPOINT_URL}/orders`);
            console.log(data);
        }catch(error){
            console.error(error);
        }
    }

    getOrderData();
    return (
        <FloatingCard className="size-max h-fit max-h-fit py-0 my-10">
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
                {ticket.status !== "Completed" && <Button className={`${buttonColor} mt-4`} onClick={() => handleStatusChange()}>{buttonText}</Button>}
            </CardContent>
            <CardFooter className={"rounded-b-xl py-3 justify-center " + headerFooterColor}>
                <CardTitle className="text-center">{ticket.status}</CardTitle>
            </CardFooter>
        </FloatingCard>
    )
}
