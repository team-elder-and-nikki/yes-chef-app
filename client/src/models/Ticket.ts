import type { IMenu } from "./Menu";

export interface ITicket {
  _id: string;
  ticket_number: number;
  ordered_at: Date;
  menu_items: IMenu[];
  status: "Unstarted" | "In Progress" | "Completed";
}
