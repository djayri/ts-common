import { Subjects } from "./subjets";
import { OrderStatus } from "./types";
export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    userId: string;
    status: OrderStatus;
    expiresAt: string;
    version: number;
    ticket: {
      id: string;
      price: number;
    };
  };
}
