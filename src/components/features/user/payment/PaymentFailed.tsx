import { IoCloseCircleSharp } from "react-icons/io5";

export default function PaymentFailed() {
  return (
    <div className="space-y-3 flex flex-col items-center pb-10 md:pb-20">
      <IoCloseCircleSharp className="text-6xl text-red-500" />
      <p className="font-bold">Pembayaran Gagal!</p>
      <p>Kamu melewati deadline pembayaran</p>
    </div>
  );
}
