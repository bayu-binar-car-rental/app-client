import { GoCopy } from "react-icons/go";
import { IPaymentMethod } from "../../../../data/paymentMethods";
import convertRupiah from "../../../../utils/convertRupiah";

interface IPaymentDetailProps {
  totalPrice: number;
  paymentMethod: IPaymentMethod;
}

export default function PaymentDetail({
  totalPrice,
  paymentMethod,
}: IPaymentDetailProps) {
  return (
    <div>
      <div className="p-4 border rounded-sm space-y-3">
        <p className="font-bold text-md">Lakukan Transfer Ke</p>
        <div className="flex space-x-2 items-center">
          <div className="border-2 rounded-md py-1 w-20 group flex justify-center h-fit">
            {paymentMethod?.name}
          </div>
          <div>
            <p>{paymentMethod?.fullname}</p>
            <p>a.n {paymentMethod?.accountName}</p>
          </div>
        </div>
        <div className="space-y-2">
          <p>Nomor Rekening</p>
          <div className="border-2 border-black rounded-sm py-1 px-3 flex items-center justify-between">
            <p>{paymentMethod?.accountNumber}</p>
            <GoCopy className="text-md hover:cursor-pointer" />
          </div>
        </div>
        <div className="space-y-2">
          <p>Total Bayar</p>
          <div className="border-2 border-black rounded-sm py-1 px-3 flex items-center justify-between">
            <p className="font-bold">Rp {convertRupiah(totalPrice)}</p>
            <GoCopy className="text-md hover:cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
