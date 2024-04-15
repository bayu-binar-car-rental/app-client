import Button from "../../../ui/Button";
import { CiImageOn } from "react-icons/ci";
import { FiDownload } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";

export default function PaymentSuccess() {
  return (
    <div className="md:px-60 space-y-20 pb-20">
      <div className="space-y-3 flex flex-col items-center">
        <FaCheckCircle className="text-6xl text-hijau" />
        <p className="font-bold">Pembayaran Berhasil!</p>
        <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between">
          <p className="font-bold">Invoice</p>
          <Button variant="secondary">
            <FiDownload className="text-xl" />
            Unduh
          </Button>
        </div>
        <p>*no invoice</p>
        <div className="h-40 w-full bg-slate-200 rounded-md border-2 border-slate-300 border-dashed flex justify-center items-center gap-3 hover:cursor-pointer">
          <CiImageOn className="text-2xl" />
          <p>PDF Viewer</p>
        </div>
      </div>
    </div>
  );
}
