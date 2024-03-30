import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoCalendar, GoPeople, GoGear } from "react-icons/go";

import { ICar } from "../../types/cars";
import convertRupiah from "../../utils/convertRupiah";

import { setIsLoading } from "../../redux/slices/loadingSlice";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";

const options: string[] = ["Dengan Sopir", "Tanpa Sopir (Lepas Kunci)"];

export default function CarList() {
  const [time, setTime] = useState<string>("");
  const [penumpang, setPenumpang] = useState<string>("");
  const [availableAt, setAvailableAt] = useState<string>("");
  const [select, setSelect] = useState<string>("Pilih Tipe Driver");
  const [cars, setCars] = useState<ICar[]>([]);

  const isLoading = useAppSelector((state) => state.loading.isLoading);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const fetchCars = async () => {
        const response = await fetch(
          "https://binar-car-rental-api-bayu.fly.dev/api/v1/cars"
        );

        const data = await response.json();
        setCars(data.data);
        console.log(data);
        console.log(cars);
      };

      fetchCars();
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setIsLoading(false));
    }
  }, []);

  return (
    <>
      {/* Filters */}
      <div className="-mt-24 p-5 shadow-md rounded-lg bg-white sticky top-10 right-0 left-0 z-20">
        <div className="grid grid-cols-12 gap-3">
          <div className="space-y-1 col-span-3">
            <p className="text-sm">Tipe Driver</p>
            <div className="">
              <select
                value={select}
                onChange={(e) => setSelect(e.target.value)}
                className="text-sm p-2 bg-white border border-slate-300 focus:outline-none w-full h-full"
              >
                {options.map((option, index) => {
                  return (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="col-span-2 space-y-1">
            <p className="text-sm">Tanggal</p>
            <input
              className="text-sm p-2 border border-slate-300 focus:outline-none w-full"
              type="date"
              value={availableAt}
              onChange={(e) => setAvailableAt(e.target.value)}
              inputMode="numeric"
              placeholder="Pilih Tanggal"
            />
          </div>
          <div className="col-span-2 space-y-1">
            <p className="text-sm">Waktu Jemput</p>
            <input
              className="w-full text-sm p-2 border border-slate-300 focus:outline-none"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="Pilih Waktu"
            />
          </div>
          <div className="space-y-1 col-span-3 w-full">
            <p className="text-sm">Jumlah Penumpang (Optional)</p>
            <input
              className="w-full text-sm p-2 border border-slate-300 focus:outline-none"
              type="number"
              value={penumpang}
              onChange={(e) => setPenumpang(e.target.value)}
              placeholder="Jumlah Penumpang"
            />
          </div>
          <div className="space-y-1 col-span-2 flex flex-col justify-center items-center">
            <p className="text-sm invisible">t</p>
            <button
              className="text-sm font-bold p-2 px-5 border border-biru text-biru"
              onClick={() => navigate(-1)}
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      <div className="py-10">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="grid grid-cols-3 gap-3">
            {cars.map((car) => (
              <div
                key={car.id}
                className="border rounded-md shadow-md overflow-clip"
              >
                <div>
                  <img src={car.image} alt="" />
                </div>
                <div className="p-3 space-y-2">
                  <span>
                    {car.manufacture}/{car.model}
                  </span>
                  <h2 className="font-bold text-2xl">
                    Rp {convertRupiah(car.rentPerDay)} / hari
                  </h2>
                  <p>{car.description}</p>
                  <div className="space-y-3 grow">
                    <div className="flex items-center space-x-3">
                      <GoPeople className="text-2xl" />
                      <p>{car.capacity} orang</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <GoGear className="text-2xl" />
                      <p>{car.transmission}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <GoCalendar className="text-2xl" />
                      <p>Tahun {car.year}</p>
                    </div>
                    <div className="mt-auto">
                      <button
                        onClick={() => navigate(`/car/${car.id}`)}
                        className="w-full text-sm font-bold p-2 rounded-sm px-5 bg-[#5CB85F] text-white"
                      >
                        Pilih Mobil
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
