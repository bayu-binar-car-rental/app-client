import { useEffect, useState } from "react";
import { IPaymentMethod, paymentMethods } from "../data/paymentMethods";

export default function useFetchTransaction(paymentId: number) {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [paymentConfirmed, setPaymentConfirmed] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<IPaymentMethod | null>();
  const [paymentDeadline, setPaymentDeadline] = useState<string | null>();
  const [paymentConfirmationDeadline, setPaymentConfirmationDeadline] =
    useState<string | null>();
  const [paymentStatus, setPaymentStatus] = useState<string | null>();

  useEffect(() => {
    const fetchTransaction = async (paymentId: number) => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/v1/transactions/${paymentId}`
        );

        const data = await response.json();
        setTotalPrice(data.data.totalPrice);
        setPaymentDeadline(data.data.paymentDeadline);
        setPaymentStatus(data.data.paymentStatus);
        if (data.data.paymentProcessingDeadline) {
          setPaymentConfirmed(true);
          setPaymentConfirmationDeadline(data.data.paymentProcessingDeadline);
        }

        const payment = paymentMethods.find((method) => {
          return method.id === data.data.paymentMethod;
        });

        setPaymentMethod(payment);
      } catch (e) {
        console.log(e);
      }
    };

    fetchTransaction(Number(paymentId));
  }, [paymentConfirmed]);

  return {
    totalPrice,
    paymentMethod,
    paymentStatus,
    paymentDeadline,
    paymentConfirmed,
    setPaymentConfirmed,
    paymentConfirmationDeadline,
  };
}
