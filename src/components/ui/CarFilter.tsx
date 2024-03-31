import { GoPeople } from "react-icons/go";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import Title from "./Title";
import {
  setDriverType,
  setRentDate,
  setPickupTime,
  setTotalPassenger,
  selectCarFilters,
} from "../../redux/slices/carFilterSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface IProps {
  title?: string;
  variant?: string;
}

export default function CarFilter({ title, variant }: IProps) {
  const options: string[] = ["Dengan Sopir", "Tanpa Sopir (Lepas Kunci)"];

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { driverType, rentDate, pickupTime, totalPassenger } =
    useAppSelector(selectCarFilters);

  useEffect(() => {
    console.log(rentDate);
    console.log(pickupTime);
  }, [rentDate, pickupTime]);

  return (
    <>
      <div className="p-5 bg-white border rounded-md shadow-md">
        {title && <Title variant="h5" title={title} />}
        <div className="grid grid-rows-2 lg:grid-flow-col gap-x-2 gap-y-1 lg:gap-y-0">
          <div className="flex items-center">
            <p className="text-sm">Tipe Driver</p>
          </div>
          <select
            value={driverType}
            onChange={(e) => dispatch(setDriverType(e.target.value))}
            className={`p-1 h-full w-full rounded-sm bg-white focus:outline-none border ${
              variant !== "submit" && "bg-slate-400"
            }`}
            disabled={variant !== "submit"}
          >
            {options.map((option, index) => (
              <option key={index} value={option} className="text-sm">
                {option}
              </option>
            ))}
          </select>
          <div className="flex items-center">
            <p className="text-sm">Tanggal</p>
          </div>
          <input
            type="date"
            placeholder="Pilih Tanggal"
            value={rentDate}
            onChange={(e) => dispatch(setRentDate(e.target.value))}
            disabled={variant !== "submit"}
            className={`p-1 bg-white w-full focus:outline-none border ${
              variant !== "submit" && "bg-slate-400 text-gray-600"
            }`}
          />
          <div className="flex items-center">
            <p className="text-sm">Waktu Jemput/Ambil</p>
          </div>
          <input
            type="time"
            value={pickupTime}
            onChange={(e) => dispatch(setPickupTime(e.target.value))}
            disabled={variant !== "submit"}
            className={`p-1 bg-white w-full focus:outline-none border ${
              variant !== "submit" && "bg-slate-400 text-gray-600"
            }`}
          />
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
              onChange={(e) => dispatch(setTotalPassenger(e.target.value))}
              placeholder="Jumlah Penumpang"
              disabled={variant !== "submit"}
              className={`bg-white w-full focus:outline-none ${
                variant !== "submit" && "bg-slate-400"
              }`}
            />
            <GoPeople />
          </div>

          {variant === "submit" ? (
            <>
              <p></p>
              <button
                onClick={() => navigate("car-list")}
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
