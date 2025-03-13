import { IMenu } from "@/models/Menu"

export interface IOrder{
    timestamp: string;
    items: IMenu[];
    status: string;
}