import { useParams } from "react-router-dom";

import CarCheckoutProgress from "../../components/ui/CarCheckoutProgress";
import useFetchTransaction from "../../hooks/useFetchTransaction";
import { IPaymentMethod } from "../../data/paymentMethods";
import PaymentOngoing from "../../components/features/user/payment/PaymentOngoing";
import PaymentSuccess from "../../components/features/user/payment/PaymentSuccess";

export default function CarPaymentPage() {
  const { paymentId } = useParams();
  const transactionId = Number(paymentId);
  const {
    totalPrice,
    paymentMethod,
    paymentStatus,
    paymentDeadline,
    paymentConfirmed,
    setPaymentConfirmed,
    paymentConfirmationDeadline,
  } = useFetchTransaction(transactionId);

  return (
    <>
      {/* Filters */}
      <div className="mx-5 space-y-1 lg:mx-20 xl:mx-32 absolute -top-[9rem] md:-top-28 right-0 left-0 z-20">
        {paymentStatus === "ongoing" ? (
          <CarCheckoutProgress progress={2} />
        ) : (
          "success" && <CarCheckoutProgress progress={3} />
        )}

        <p>Order ID: {paymentId}</p>
      </div>
      {paymentStatus === "ongoing" ? (
        <PaymentOngoing
          totalPrice={totalPrice}
          transactionId={transactionId}
          paymentConfirmed={paymentConfirmed}
          setPaymentConfirmed={setPaymentConfirmed}
          paymentDeadline={paymentDeadline as string}
          paymentMethod={paymentMethod as IPaymentMethod}
          paymentConfirmationDeadline={paymentConfirmationDeadline as string}
        />
      ) : "success" ? (
        <PaymentSuccess />
      ) : "failed" ? (
        <>Failed</>
      ) : (
        <>Rejected</>
      )}
    </>
  );
}
