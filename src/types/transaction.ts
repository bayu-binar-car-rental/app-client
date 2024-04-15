export interface ITransactions {
  id?: number;
  idUser?: number;
  idCar?: number;
  totalPrice?: number;
  withDriver?: number;
  rentDate?: string;
  pickupTime?: string;
  totalPassenger?: number;
  paymentMethod?: number;
  paymentStatus?: "ongoing" | "success" | "failed" | "rejected";
  paymentDeadline?: string;
  paymentProcessingDeadline?: string;
  paymentProofImage?: string;
  paymentInvoice?: string;
  created_at?: string;
  updated_at?: string;
}
