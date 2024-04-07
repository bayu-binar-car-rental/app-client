import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useLocation, useNavigate } from "react-router-dom";

import { FaCheck } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";
import { GoCalendar, GoGear, GoPeople } from "react-icons/go";

import convertRupiah from "../../utils/convertRupiah";
import CarFilter from "../../components/ui/CarFilter";
import { ITransactions } from "../../types/transaction";
import CarCheckoutProgress from "../../components/ui/CarCheckoutProgress";

export default function CarCheckout() {
  const [selectedPayment, setSelectedPayment] = useState<number>(0);
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>();

  const navigate = useNavigate();
  const location = useLocation();
  const car = location.state;
  const carFilter = JSON.parse(localStorage.getItem("carFilters") as string);

  const userId = useAppSelector((state) => state.user.id);

  const handlePayment = async () => {
    const today = new Date();
    const tomorrow = new Date(today.getTime() + 8640000);

    localStorage.setItem(
      "carFilters",
      JSON.stringify({
        ...carFilter,
        paymentMethod: selectedPayment,
      })
    );

    const payload: ITransactions = {
      idUser: userId,
      idCar: car.id,
      totalPrice: totalPrice,
      withDriver: carFilter.driverType,
      rentDate: carFilter.rentDate,
      pickupTime: carFilter.pickupTime,
      totalPassenger: carFilter.totalPassenger,
      paymentMethod: selectedPayment,
      paymentStatus: "ongoing",
      paymentDeadline: tomorrow.toLocaleString(),
    };

    const response = await fetch("http://localhost:3000/api/v1/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    const id = data.data.id;

    navigate(`/checkout/${id}`);
  };

  useEffect(() => {
    if (carFilter.paymentMethod) {
      setSelectedPayment(carFilter.paymentMethod);
    }

    if (carFilter.driverType === "1") {
      setTotalPrice(car.rentPerDay + 100000);
    } else {
      setTotalPrice(car.rentPerDay);
    }
  }, []);

  return (
    <>
      {/* Filters */}
      <div className="py-32 lg:py-3"></div>
      <div className="mx-5 space-y-5 lg:mx-20 xl:mx-32 absolute -top-48 right-0 left-0 z-20">
        <CarCheckoutProgress />
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
              Rp {convertRupiah(totalPrice as number)}
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
                      <p>1 Mobil</p>
                      <p>Rp {convertRupiah(car.rentPerDay)}</p>
                    </div>
                  </li>
                  {carFilter.driverType === "1" && (
                    <li>
                      <div className="flex justify-between">
                        <p>Driver/Supir</p>
                        <p>Rp 100.000</p>
                      </div>
                    </li>
                  )}
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
                  {carFilter.driverType === "1" && (
                    <li>
                      <div className="flex justify-between">
                        <p>Biaya makan sopir</p>
                        <p className="text-green-400">Termasuk</p>
                      </div>
                    </li>
                  )}
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
                <p>Rp {convertRupiah(totalPrice as number)}</p>
              </div>
            </div>
          )}

          <button
            {...(!selectedPayment && { disabled: true })}
            onClick={handlePayment}
            className={`${
              !selectedPayment ? "bg-green-300" : "bg-green-500"
            } py-1 w-full font-bold text-white`}
          >
            Bayar
          </button>
        </div>
      </div>
    </>
  );
}
