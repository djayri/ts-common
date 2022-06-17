import { Subjects } from "./subjets";
import { OrderStatus } from "./types";
export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    ticketId: string;
    price: number;
    status: OrderStatus;
    expiresAt: Date;
  };
}
