import { CiImageOn } from "react-icons/ci";
import useUpdateTransaction from "../../../../hooks/useUpdateTransaction";
import MyDate from "../../../../utils/MyDate";

interface IPaymentConfirmation {
  transactionId: number;
  paymentConfirmed: boolean;
  setPaymentConfirmed: (state: boolean) => void;
}

export default function PaymentConfirmation({
  transactionId,
  paymentConfirmed,
  setPaymentConfirmed,
}: IPaymentConfirmation) {
  const handlePaymentConfirmation = () => {
    setPaymentConfirmed(true);
    const myDate = new MyDate();
    const params = {
      paymentProcessingDeadline: myDate.addMinutes(10).toUTCString(),
    };

    useUpdateTransaction({ transactionId, params });
  };

  return (
    <>
      {!paymentConfirmed ? (
        <>
          <p>Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</p>
          <button
            onClick={handlePaymentConfirmation}
            className="py-2 w-full bg-green-500 text-white font-bold"
          >
            Konfirmasi Pembayaran
          </button>
        </>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <p className="font-bold text-md">Konfirmasi Pembayaran</p>
            <p className="text-xl">
              <span className="p-1 rounded-sm bg-red-500 text-white me-1">
                09
              </span>
              :
              <span className="p-1 rounded-sm bg-red-500 text-white mx-1">
                55
              </span>
            </p>
          </div>
          <p>
            Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu
            akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan
            konfirmasi.
          </p>
          <p className="font-bold">Upload Bukti Pembayaran</p>
          <p>
            Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa
            upload bukti bayarmu
          </p>
          <div className="flex justify-center items-center mx-10 p-20 bg-gray-200 border-2 border-dashed border-gray-400 rounded-sm">
            <CiImageOn className="text-3xl" />
          </div>
          <button className="py-2 w-full bg-green-500 rounded-sm text-white font-bold">
            Upload
          </button>
        </>
      )}
    </>
  );
}
