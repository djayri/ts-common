import { Subjects } from "./subjets";
export interface ExpirationCompleteEvent {
  subject: Subjects.ExpirationComplete;
  data: {
    orderId: string;
  };
}
