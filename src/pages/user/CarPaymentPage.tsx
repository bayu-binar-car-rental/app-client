import { useEffect, useState } from "react";

import { GoCopy } from "react-icons/go";
import { CiImageOn } from "react-icons/ci";
import { useParams } from "react-router-dom";

import convertRupiah from "../../utils/convertRupiah";
import CarCheckoutProgress from "../../components/ui/CarCheckoutProgress";
import { paymentMethods, IPaymentMethod } from "../../data/paymentMethods";

function PaymentInstructions({ paymentName }: { paymentName: string }) {
  const [selectedMethod, setSelectedMethod] = useState<number>(0);
  const methods: string[] = [
    `ATM ${paymentName}`,
    `M-${paymentName}`,
    `${paymentName} Klik`,
    "Internet Banking",
  ];

  return (
    <div className="space-y-3">
      <div className="flex">
        {methods.map((method, index) => (
          <p
            key={index}
            onClick={() => setSelectedMethod(index)}
            className={`text-center py-2 px-3 grow border-b-2 hover:cursor-pointer ${
              selectedMethod === index ? "border-green-400" : "border-gray-200"
            }`}
          >
            {method}
          </p>
        ))}
      </div>
      <ul className="list-disc ps-8 space-y-2">
        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
        <li>
          Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
        </li>
        <li>Tidak termasuk akomodasi penginapan</li>
      </ul>
    </div>
  );
}

export default function CarPaymentPage() {
  const [paymentConfirmed, setPaymentConfirmed] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<IPaymentMethod | null>();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const { paymentId } = useParams();

  useEffect(() => {
    const fetchTransaction = async (paymentId: number) => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/v1/transactions/${paymentId}`
        );

        const data = await response.json();
        console.log(data);
        setTotalPrice(data.data.totalPrice);

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

  return (
    <>
      {/* Filters */}
      <div className="mx-5 space-y-1 lg:mx-20 xl:mx-32 absolute -top-[9rem] md:-top-28 right-0 left-0 z-20">
        <CarCheckoutProgress progress={2} />
        <p>Order ID: {paymentId}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-4">
          {/* 1st Card */}
          <div className="p-4 border rounded-sm flex justify-between items-center">
            <div className="space-y-2">
              <p className="font-bold text-md">Selesaikan Pembayaran Sebelum</p>
              <p>Rabu, 19 Jun 2022 jam 13.00 WIB</p>
            </div>
            <p className="text-xl">
              <span className="p-1 rounded-sm bg-red-500 text-white me-1">
                23
              </span>
              :
              <span className="p-1 rounded-sm bg-red-500 text-white mx-1">
                55
              </span>
              :
              <span className="p-1 ms-1 rounded-sm bg-red-500 text-white">
                09
              </span>
            </p>
          </div>

          {/* 2nd Card */}
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

          {/* 3rd Card */}
          <div>
            <div className="p-4 border rounded-sm space-y-3">
              <p className="font-bold text-md">Intruksi Pembayaran</p>
              <PaymentInstructions
                paymentName={paymentMethod?.name as string}
              />
            </div>
          </div>
        </div>

        <div className="p-4 space-y-5 h-fit border rounded-sm">
          {!paymentConfirmed ? (
            <>
              <p>
                Klik konfirmasi pembayaran untuk mempercepat proses pengecekan
              </p>
              <button
                onClick={() => setPaymentConfirmed(true)}
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
                akan segera kami cek tunggu kurang lebih 10 menit untuk
                mendapatkan konfirmasi.
              </p>
              <p className="font-md">Upload Bukti Pembayaran</p>
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
        </div>
      </div>
    </>
  );
}
