import useTimer from "../../../../hooks/useTimer";
import MyDate from "../../../../utils/MyDate";

interface IPaymentTimerProps {
  paymentDeadline: string;
}

export default function PaymentTimer({ paymentDeadline }: IPaymentTimerProps) {
  const myDate = new MyDate();
  const { day, date, time } = myDate.getFullTime(paymentDeadline);
  const { hours, minutes, seconds } = useTimer(paymentDeadline);

  return (
    <div className="p-4 border rounded-sm flex justify-between items-center">
      <div className="space-y-2">
        <p className="font-bold text-md">Selesaikan Pembayaran Sebelum</p>
        <p>
          {day}, {date} jam {time}
        </p>
      </div>
      <p className="text-xl">
        <span className="p-1 rounded-sm bg-red-500 text-white me-1">
          {hours}
        </span>
        :
        <span className="p-1 rounded-sm bg-red-500 text-white mx-1">
          {minutes}
        </span>
        :
        <span className="p-1 ms-1 rounded-sm bg-red-500 text-white">
          {seconds}
        </span>
      </p>
    </div>
  );
}
