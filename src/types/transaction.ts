export type TPaymentStatus = "ongoing" | "success" | "failed" | "rejected";

export interface ITransactions {
  id: number;
  idUser: number;
  idCar: number;
  totalPrice: number;
  withDriver: number;
  rentDate: string;
  pickupTime: string;
  totalPassenger: number;
  paymentMethod: number;
  paymentStatus: TPaymentStatus;
  paymentDeadline: string;
  paymentProcessingDeadline: string;
  paymentProofImage: string;
  paymentInvoice: string;
  created_at: string;
  updated_at: string;
}

export interface ITransactionsPayload {
  id?: number;
  idUser?: number;
  idCar?: number;
  totalPrice?: number;
  withDriver?: number;
  rentDate?: string;
  pickupTime?: string;
  totalPassenger?: number;
  paymentMethod?: number;
  paymentStatus?: TPaymentStatus;
  paymentDeadline?: string;
  paymentProcessingDeadline?: string;
  paymentProofImage?: string;
  paymentInvoice?: string;
  created_at?: string;
  updated_at?: string;
}
