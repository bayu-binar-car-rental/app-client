import { IPaymentMethod } from "../../../../data/paymentMethods";
import PaymentConfirmation from "./PaymentConfirmation";
import PaymentDetail from "./PaymentDetail";
import PaymentInstructions from "./PaymentInstructions";
import PaymentTimer from "./PaymentTimer";

interface IPaymentOngoingProps {
  totalPrice: number;
  transactionId: number;
  paymentDeadline: string;
  paymentConfirmed: boolean;
  paymentConfirmationDeadline: string;
  paymentMethod: IPaymentMethod;
  setPaymentConfirmed: (state: boolean) => void;
}

export default function PaymentOngoing({
  totalPrice,
  transactionId,
  paymentMethod,
  paymentDeadline,
  paymentConfirmed,
  setPaymentConfirmed,
  paymentConfirmationDeadline,
}: IPaymentOngoingProps) {
  return (
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
          paymentConfirmationDeadline={
            paymentConfirmationDeadline as string | null
          }
        />
      </div>
    </div>
  );
}
