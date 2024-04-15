import useUpdateTransaction from "../../../../hooks/useUpdateTransaction";
import MyDate from "../../../../utils/MyDate";
import useTimer from "../../../../hooks/useTimer";
import UploadFileArea from "../../../ui/UploadFileArea";
import Button from "../../../ui/Button";
import { useEffect, useState } from "react";

interface IPaymentConfirmation {
  transactionId: number;
  paymentConfirmed: boolean;
  paymentProofImage: string;
  paymentConfirmationDeadline: string | null;
  setPaymentConfirmed: (state: boolean) => void;
}

export default function PaymentConfirmation({
  transactionId,
  paymentConfirmed,
  paymentProofImage,
  setPaymentConfirmed,
  paymentConfirmationDeadline,
}: IPaymentConfirmation) {
  const [image, setImage] = useState<string | null>();
  const { minutes, seconds } = useTimer(paymentConfirmationDeadline as string);

  useEffect(() => {
    !image && paymentProofImage && setImage(paymentProofImage);
  }, [paymentProofImage]);

  const handlePaymentConfirmation = () => {
    setPaymentConfirmed(true);
    const myDate = new MyDate();
    const params = {
      paymentProcessingDeadline: myDate.addMinutes(10).toUTCString(),
    };

    useUpdateTransaction({ transactionId, params });
  };

  const handleUploadImage = async () => {
    const params = { paymentProofImage: image as string };
    const props = { transactionId, params };

    await useUpdateTransaction(props);

    alert("Upload Success");
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
                {minutes}
              </span>
              :
              <span className="p-1 rounded-sm bg-red-500 text-white mx-1">
                {seconds}
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
          <div className="mx-10">
            <UploadFileArea image={image as string} setImage={setImage} />
          </div>
          <Button fullWidth onclick={handleUploadImage}>
            Upload
          </Button>
        </>
      )}
    </>
  );
}
