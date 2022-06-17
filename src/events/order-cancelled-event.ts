import { Subjects } from "./subjets";
import { OrderStatus } from "./types";
export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;
  data: {
    id: string;
    ticketId: string;
    price: number;
    status: OrderStatus;
    expiresAt: Date;
  };
}
