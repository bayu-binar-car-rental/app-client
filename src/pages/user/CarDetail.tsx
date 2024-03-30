import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoChevronDownOutline } from "react-icons/io5";
import { GoCalendar, GoPeople, GoGear } from "react-icons/go";

import { ICar } from "../../types/cars";
import { setIsLoading } from "../../redux/slices/loadingSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import convertRupiah from "../../utils/convertRupiah";

const options: string[] = ["Dengan Sopir", "Tanpa Sopir (Lepas Kunci)"];

export default function CarDetail() {
  const { id } = useParams();
  const [time, setTime] = useState<string>("");
  const [penumpang, setPenumpang] = useState<string>("");
  const [availableAt, setAvailableAt] = useState<string>("");
  const [select, setSelect] = useState<string>("Pilih Tipe Driver");
  const [car, setCar] = useState<ICar | null>();
  const [openDropdown, setOpenDropdown] = useState<boolean>(true);

  const isLoading = useAppSelector((state) => state.loading.isLoading);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCar = async (id: string) => {
      try {
        const response = await fetch(
          `https://binar-car-rental-api-bayu.fly.dev/api/v1/cars/${+id}`
        );

        const data = await response.json();
        setCar(data.data);
      } catch (e) {
        console.log(e);
      } finally {
        dispatch(setIsLoading(false));
      }
    };

    fetchCar(id as string);
  }, []);

  return (
    <>
      {/* Filters */}
      <div className="mx-32 p-5 shadow-md rounded-lg bg-white absolute -top-28 right-0 left-0 z-20 space-y-2">
        <h3 className="font-bold text-xl">Pencarianmu</h3>
        <div className="grid grid-cols-4 gap-3">
          <div className="space-y-1">
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
          <div className=" space-y-1">
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
          <div className=" space-y-1">
            <p className="text-sm">Waktu Jemput</p>
            <input
              className="w-full text-sm p-2 border border-slate-300 focus:outline-none"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="Pilih Waktu"
            />
          </div>
          <div className="space-y-1 w-full">
            <p className="text-sm">Jumlah Penumpang (Optional)</p>
            <input
              className="w-full text-sm p-2 border border-slate-300 focus:outline-none"
              type="number"
              value={penumpang}
              onChange={(e) => setPenumpang(e.target.value)}
              placeholder="Jumlah Penumpang"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-12 grid grid-cols-2 gap-6">
        <div>
          <div className="p-4 border rounded-md space-y-3">
            <h3 className="text-lg font-bold">Tentang Paket</h3>
            <p>Include</p>
            <ul className="list-disc ps-8 space-y-2">
              <li>
                Apa saja yang termasuk dalam paket misal durasi max 12 jam
              </li>
              <li>Sudah termasuk bensin selama 12 jam</li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li>Sudah termasuk pajak</li>
            </ul>
            <p>Include</p>
            <ul className="list-disc ps-8 space-y-2">
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">
                Refund, Reschedule, Overtime
              </h3>
              <IoChevronDownOutline
                className={`translate ease-in-out duration-100 hover:cursor-pointer ${
                  openDropdown && "rotate-180"
                }`}
                onClick={() => setOpenDropdown(!openDropdown)}
              />
            </div>
            {openDropdown && (
              <ul className="list-disc ps-8 space-y-2">
                <li>Tidak termasuk biaya makan makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari jam 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </ul>
            )}
          </div>
          <div className="flex justify-end mt-4">
            <button className="text-sm font-bold p-2 px-5 bg-[#5CB85F] text-white">
              Lanjutkan Pembayaran
            </button>
          </div>
        </div>
        <div className="border rounded-md h-fit overflow-hidden">
          {isLoading ? (
            <h1>Loading....</h1>
          ) : (
            <>
              <img src={car?.image} alt="" />
              <div className="p-4 space-y-2">
                <h3 className="font-bold text-lg">
                  {car?.manufacture}/{car?.model}
                </h3>
                <div className="flex space-x-4">
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
                <div className="flex justify-between pt-10">
                  <p>Total</p>
                  <h3 className="font-bold text-xl">
                    Rp {convertRupiah(car?.rentPerDay as number)}
                  </h3>
                </div>
                <div className="mt-4">
                  <button className="w-full text-sm font-bold p-2 px-5 bg-[#5CB85F] text-white">
                    Lanjutkan Pembayaran
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
