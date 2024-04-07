import { GoPeople } from "react-icons/go";
import { useNavigate } from "react-router-dom";

import Title from "./Title";
import { useEffect, useState } from "react";

interface IProps {
  title?: string;
  variant?: string;
}

export default function CarFilter({ title, variant }: IProps) {
  const options: string[] = ["Tanpa Sopir (Lepas Kunci)", "Dengan Sopir"];

  const navigate = useNavigate();
  const [driverType, setDriverType] = useState<string>("0");
  const [rentDate, setRentDate] = useState<string>("");
  const [pickupTime, setPickupTime] = useState<string>("");
  const [totalPassenger, setTotalPassenger] = useState<string>("");

  useEffect(() => {
    if (localStorage.getItem("carFilters")) {
      const carFilters = JSON.parse(
        localStorage.getItem("carFilters") as string
      );

      setDriverType(carFilters.driverType);
      setRentDate(carFilters.rentDate);
      setPickupTime(carFilters.pickupTime);
      setTotalPassenger(carFilters.totalPassenger);
    }
  }, []);

  const handleSubmit = () => {
    const state = {
      driverType: driverType,
      rentDate: rentDate,
      pickupTime: pickupTime,
      totalPassenger: totalPassenger,
    };

    localStorage.setItem("carFilters", JSON.stringify(state));
    navigate("car-list", { state: { totalPassenger: totalPassenger } });
  };

  return (
    <>
      <div className="p-5 bg-white border rounded-md shadow-sm">
        {title && <Title variant="h5" title={title} />}
        <div className="grid grid-rows-2 lg:grid-flow-col gap-x-2 gap-y-1 lg:gap-y-0">
          {/* Tipe Driver */}
          <div className="flex items-center">
            <p className="text-sm">Tipe Driver</p>
          </div>
          <select
            value={driverType}
            onChange={(e) => setDriverType(e.target.value)}
            className={`p-1 h-full w-full rounded-sm focus:outline-none border ${
              variant !== "submit" ? "bg-slate-400" : "bg-white"
            }`}
            disabled={variant !== "submit"}
          >
            {options.map((option, index) => (
              <option key={index} value={index} className="text-sm">
                {option}
              </option>
            ))}
          </select>

          {/* Tanggal */}
          <div className="flex items-center">
            <p className="text-sm">Tanggal</p>
          </div>
          <div>
            <input
              type="date"
              placeholder="Pilih Tanggal"
              value={rentDate}
              onChange={(e) => setRentDate(e.target.value)}
              disabled={variant !== "submit"}
              className={`p-1 w-full focus:outline-none border ${
                variant !== "submit" && "bg-slate-400 text-gray-600"
              }`}
            />
          </div>

          {/* Waktu Jemput/Ambil */}
          <div className="flex items-center">
            <p className="text-sm">Waktu Jemput/Ambil</p>
          </div>
          <input
            type="time"
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
            disabled={variant !== "submit"}
            className={`p-1  w-full focus:outline-none border ${
              variant !== "submit" && "bg-slate-400 text-gray-600"
            }`}
          />

          {/* Jumlah Penumpang */}
          <div className="flex items-center">
            <p className="text-sm">Jumlah Penumpang (opsional)</p>
          </div>
          <div
            className={`basis-1/4 border flex items-center justify-between p-1 pe-3 ${
              variant !== "submit" && "bg-slate-400 text-gray-600"
            }`}
          >
            <input
              type="number"
              value={totalPassenger}
              onChange={(e) => setTotalPassenger(e.target.value)}
              placeholder="Jumlah Penumpang"
              disabled={variant !== "submit"}
              className={` w-full focus:outline-none ${
                variant !== "submit" && "bg-slate-400"
              }`}
            />
            <GoPeople />
          </div>

          {/* Button */}
          {variant === "submit" ? (
            <>
              <p></p>
              <button
                onClick={handleSubmit}
                className="py-1 px-5 bg-green-500 text-white rounded-sm font-bold"
              >
                Cari Mobil
              </button>
            </>
          ) : (
            variant === "edit" && (
              <>
                <p></p>
                <button
                  onClick={() => navigate(-1)}
                  className="py-1 px-5 text-biru rounded-sm border-2 border-biru font-bold"
                >
                  Edit
                </button>
              </>
            )
          )}
        </div>
      </div>
    </>
  );
}
