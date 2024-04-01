import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { FaCheck } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";
import { GoCalendar, GoGear, GoPeople } from "react-icons/go";

import CarFilter from "../../components/ui/CarFilter";
import CarCheckoutProgress from "../../components/ui/CarCheckoutProgress";
import convertRupiah from "../../utils/convertRupiah";

export default function CarCheckout() {
  const [selectedPayment, setSelectedPayment] = useState<number | null>();
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const location = useLocation();
  const car = location.state;

  useEffect(() => {
    console.log(car);
    console.log(selectedPayment);
  }, []);

  return (
    <>
      {/* Filters */}
      <div className="py-32 lg:py-3"></div>
      <div className="mx-5 space-y-5 lg:mx-20 xl:mx-32 absolute -top-48 right-0 left-0 z-20">
        <CarCheckoutProgress progress={2} />
        <CarFilter title="Detail Pesananmu" />
      </div>

      {/* Payment */}
      <div className="grid grid-cols-2 gap-6">
        {/* Left */}
        <div className="p-4 border rounded-sm space-y-6 h-fit">
          <p className="font-bold text-lg">Pilih Bank Transfer</p>
          <p>
            Kamu bisa membayar dengan transfer melalui ATM, Internet Banking
            atau Mobile Banking
          </p>
          <div className="space-y-3">
            <div
              className="group flex space-x-4 items-center py-2 hover:cursor-pointer"
              onClick={() => setSelectedPayment(1)}
            >
              <div className="border-2 rounded-md py-1 w-20 group flex justify-center">
                BCA
              </div>
              <p className="grow">BCA Transfer</p>
              <FaCheck
                className={`text-green-400 text-xl ${
                  selectedPayment === 1 ? "visible" : "invisible"
                }`}
              />
            </div>
            <div className="border w-full" />
            <div
              className="group flex space-x-4 items-center py-2 hover:cursor-pointer"
              onClick={() => setSelectedPayment(2)}
            >
              <div className="border-2 rounded-md py-1 w-20 group flex justify-center">
                BNI
              </div>
              <p className="grow">BNI Transfer</p>
              <FaCheck
                className={`text-green-400 text-xl ${
                  selectedPayment === 2 ? "visible" : "invisible"
                }`}
              />
            </div>
            <div className="border w-full" />
            <div
              className="group flex space-x-4 items-center py-2 hover:cursor-pointer"
              onClick={() => setSelectedPayment(3)}
            >
              <div className="border-2 rounded-md py-1 w-20 group flex justify-center">
                Mandiri
              </div>
              <p className="grow">Mandiri Transfer</p>
              <FaCheck
                className={`text-green-400 text-xl ${
                  selectedPayment === 3 ? "visible" : "invisible"
                }`}
              />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="space-y-1 p-4 border rounded-sm h-fit">
          <p className="font-bold text-md">
            {car.manufacture}/{car.model}
          </p>
          <div className="flex space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <GoPeople className="text-2xl" />
              <p>{car?.capacity} orang</p>
            </div>
            <div className="flex items-center space-x-2">
              <GoGear className="text-2xl" />
              <p>{car?.transmission}</p>
            </div>
            <div className="flex items-center space-x-2">
              <GoCalendar className="text-2xl" />
              <p>Tahun {car?.year}</p>
            </div>
          </div>
          <div className="flex space-x-3 items-center pt-20">
            <p>Total</p>
            <div className="grow">
              <IoChevronDown
                onClick={() => setIsDropdown(!isDropdown)}
                className={`hover:cursor-pointer transition ease-in-out duration-100 ${
                  isDropdown && "rotate-180"
                }`}
              />
            </div>
            <p className="font-bold text-md">
              Rp {convertRupiah(car.rentPerDay)}
            </p>
          </div>

          {/* Payment details */}
          {isDropdown && (
            <div className="space-y-4 py-2">
              <div>
                <p className="font-bold text-md">Harga</p>
                <ul className="list-disc ps-8 space-y-2">
                  <li>
                    <div className="flex justify-between">
                      <p>1 Mobil dengan sopir</p>
                      <p>Rp {convertRupiah(car.rentPerDay)}</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-md">Biaya Lainnya</p>
                <ul className="list-disc ps-8 space-y-2">
                  <li>
                    <div className="flex justify-between">
                      <p>Pajak</p>
                      <p className="text-green-400">Termasuk</p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between">
                      <p>Biaya makan sopir</p>
                      <p className="text-green-400">Termasuk</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-md">Belum Termasuk</p>
                <ul className="list-disc ps-8 space-y-2">
                  <li>Bensin</li>
                  <li>Tol dan parkir</li>
                </ul>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-md">
                <p>Total</p>
                <p>Rp {convertRupiah(car.rentPerDay)}</p>
              </div>
            </div>
          )}

          <button
            {...(!selectedPayment && { disabled: true })}
            onClick={() => alert("Clicked")}
            className={`${
              !selectedPayment ? "bg-green-300" : "bg-green-400"
            } py-1 w-full font-bold text-white`}
          >
            Bayar
          </button>
        </div>
      </div>
    </>
  );
}
