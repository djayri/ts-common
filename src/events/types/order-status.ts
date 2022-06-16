export enum OrderStatus {
  // Order is created, but haven't reserve the ticket yet
  Created = "created",

  // 1. the ticket for the order has already been reserved
  // 2. user cancelled the order
  // 3. order expires before payment
  Cancelled = "cancelled",

  // the order has successfully reserve the payment
  AwaitingPayment = "awaiting:payment",

  // user complete the payment
  Complete = "complete",
}
