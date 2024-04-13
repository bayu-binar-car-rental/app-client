import { useParams } from "react-router-dom";

import CarCheckoutProgress from "../../components/ui/CarCheckoutProgress";
import useFetchTransaction from "../../hooks/useFetchTransaction";
import PaymentInstructions from "../../components/features/user/payment/PaymentInstructions";
import PaymentTimer from "../../components/features/user/payment/PaymentTimer";
import PaymentDetail from "../../components/features/user/payment/PaymentDetail";
import { IPaymentMethod } from "../../data/paymentMethods";
import PaymentConfirmation from "../../components/features/user/payment/PaymentConfirmation";

export default function CarPaymentPage() {
  const { paymentId } = useParams();
  const transactionId = Number(paymentId);
  const {
    totalPrice,
    paymentMethod,
    paymentDeadline,
    paymentConfirmed,
    setPaymentConfirmed,
  } = useFetchTransaction(transactionId);

  return (
    <>
      {/* Filters */}
      <div className="mx-5 space-y-1 lg:mx-20 xl:mx-32 absolute -top-[9rem] md:-top-28 right-0 left-0 z-20">
        <CarCheckoutProgress progress={2} />
        <p>Order ID: {paymentId}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <PaymentTimer paymentDeadline={paymentDeadline as string} />
          <PaymentDetail
            totalPrice={totalPrice}
            paymentMethod={paymentMethod as IPaymentMethod}
          />
          <PaymentInstructions paymentName={paymentMethod?.name as string} />
        </div>

        <div className="p-4 space-y-5 h-fit border rounded-sm">
          <PaymentConfirmation
            transactionId={transactionId}
            paymentConfirmed={paymentConfirmed}
            setPaymentConfirmed={setPaymentConfirmed}
          />
        </div>
      </div>
    </>
  );
}
