import { useEffect, useState } from "react";
import { IPaymentMethod, paymentMethods } from "../data/paymentMethods";

export default function useFetchTransaction(paymentId: number) {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [paymentConfirmed, setPaymentConfirmed] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<IPaymentMethod | null>();
  const [paymentDeadline, setPaymentDeadline] = useState<string | null>();

  useEffect(() => {
    const fetchTransaction = async (paymentId: number) => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/v1/transactions/${paymentId}`
        );

        const data = await response.json();
        setTotalPrice(data.data.totalPrice);
        setPaymentDeadline(data.data.paymentDeadline);
        data.data.paymentProcessingDeadline && setPaymentConfirmed(true);

        const payment = paymentMethods.find((method) => {
          return method.id === data.data.paymentMethod;
        });

        setPaymentMethod(payment);
      } catch (e) {
        console.log(e);
      }
    };

    fetchTransaction(Number(paymentId));
  }, []);

  return {
    totalPrice,
    paymentMethod,
    paymentDeadline,
    paymentConfirmed,
    setPaymentConfirmed,
  };
}
