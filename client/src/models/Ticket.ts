import type { IMenu } from "./Menu";

export interface ITicket {
  _id: string;
  ticket_number: number;
  cartAmount: number;
  createdAt: Date;
  items: IMenu[];
  status: "unstarted" | "started" | "completed";
}
