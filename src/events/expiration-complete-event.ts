import { Subjects } from "./subjets";
export interface OrderCancelledEvent {
  subject: Subjects.ExpirationComplete;
  data: {
    orderId: string;
  };
}
