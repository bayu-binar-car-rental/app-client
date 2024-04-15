import { useState } from "react";

export default function PaymentInstructions({
  paymentName,
}: {
  paymentName: string;
}) {
  const [selectedMethod, setSelectedMethod] = useState<number>(0);
  const methods: string[] = [
    `ATM ${paymentName}`,
    `M-${paymentName}`,
    `${paymentName} Klik`,
    "Internet Banking",
  ];

  return (
    <div>
      <div className="p-4 border rounded-sm space-y-3">
        <p className="font-bold text-md">Intruksi Pembayaran</p>
        <div className="space-y-3">
          <div className="flex">
            {methods.map((method, index) => (
              <p
                key={index}
                onClick={() => setSelectedMethod(index)}
                className={`text-center py-2 px-3 grow border-b-2 hover:cursor-pointer ${
                  selectedMethod === index
                    ? "border-green-400"
                    : "border-gray-200"
                }`}
              >
                {method}
              </p>
            ))}
          </div>
          <ul className="list-disc ps-8 space-y-2">
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
