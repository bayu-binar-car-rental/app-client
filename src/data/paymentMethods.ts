export interface IPaymentMethod {
  id: number;
  name: string;
  fullname: string;
  accountName: string;
  accountNumber: string;
}

export const paymentMethods: IPaymentMethod[] = [
  {
    id: 1,
    name: "BCA",
    fullname: "BCA Transfer",
    accountName: "Binar Car Rental",
    accountNumber: "1111-2222-3333-BCA",
  },
  {
    id: 2,
    name: "BNI",
    fullname: "BNI Transfer",
    accountName: "Binar Car Rental",
    accountNumber: "1111-2222-3333-BNI",
  },
  {
    id: 3,
    name: "Mandiri",
    fullname: "Mandiri Transfer",
    accountName: "Binar Car Rental",
    accountNumber: "1111-2222-3333-Mandiri",
  },
];
