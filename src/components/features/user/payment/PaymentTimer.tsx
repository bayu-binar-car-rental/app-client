export default function PaymentTimer() {
  return (
    <div className="p-4 border rounded-sm flex justify-between items-center">
      <div className="space-y-2">
        <p className="font-bold text-md">Selesaikan Pembayaran Sebelum</p>
        <p>Rabu, 19 Jun 2022 jam 13.00 WIB</p>
      </div>
      <p className="text-xl">
        <span className="p-1 rounded-sm bg-red-500 text-white me-1">23</span>:
        <span className="p-1 rounded-sm bg-red-500 text-white mx-1">55</span>:
        <span className="p-1 ms-1 rounded-sm bg-red-500 text-white">09</span>
      </p>
    </div>
  );
}
