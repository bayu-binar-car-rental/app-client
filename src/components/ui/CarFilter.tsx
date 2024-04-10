import { GoPeople } from "react-icons/go";
import { useNavigate } from "react-router-dom";

import Title from "./Title";
import MyDate from "../../utils/MyDate";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { setToggleNavbarCanvas } from "../../redux/slices/toggleSlice";
import Button from "./Button";

interface IProps {
  title?: string;
  variant?: string;
}

export default function CarFilter({ title, variant }: IProps) {
  const options: string[] = ["Tanpa Sopir (Lepas Kunci)", "Dengan Sopir"];
  const myDate = new MyDate();
  console.log(myDate.today());

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [driverType, setDriverType] = useState<string | undefined>(undefined);
  const [rentDate, setRentDate] = useState<string>("");
  const [pickupTime, setPickupTime] = useState<string>("");
  const [totalPassenger, setTotalPassenger] = useState<string>("");

  const [focus, setFocus] = useState<boolean>(false);

  useEffect(() => {
    dispatch(setToggleNavbarCanvas(false));
  }, [driverType, rentDate, pickupTime]);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      <div
        className={`p-4 bg-white border rounded-lg shadow-sm z-40 ${
          !title ? "pt-0" : "pt-4"
        }`}
      >
        {title && <Title variant="h5" title={title} />}
        <form
          onSubmit={handleSubmit}
          className="grid grid-rows-2 lg:grid-flow-col gap-x-3 gap-y-0 lg:gap-y-0 text-sm"
        >
          {/* Tipe Driver */}
          <div className="flex items-end pb-2">
            <p className="text-sm">Tipe Driver</p>
          </div>
          <select
            value={driverType}
            disabled={variant !== "submit"}
            onChange={(e) => setDriverType(e.target.value)}
            className={`p-2 text-sm h-full w-full block rounded-md border focus:outline-hijau hover:cursor-pointer ${
              variant !== "submit" ? "bg-slate-400" : "bg-white"
            }`}
          >
            {options.map((option, index) => (
              <option key={index} value={index} className="text-sm">
                {option}
              </option>
            ))}
          </select>

          {/* Tanggal */}
          <div className="flex items-end pb-2">
            <p className="text-sm">Tanggal</p>
          </div>
          <div>
            <input
              type="date"
              placeholder="Pilih Tanggal"
              value={rentDate}
              min={myDate.today()}
              onChange={(e) => setRentDate(e.target.value)}
              disabled={variant !== "submit"}
              className={`p-2 text-sm h-full w-full rounded-md focus:outline-hijau hover:cursor-pointer border ${
                variant !== "submit" && "bg-slate-400 text-gray-600"
              }`}
            />
          </div>

          {/* Waktu Jemput/Ambil */}
          <div className="flex items-end pb-2">
            <p className="text-sm">Waktu Jemput/Ambil</p>
          </div>
          <input
            type="time"
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
            disabled={variant !== "submit"}
            className={`p-2  w-full rounded-md focus:outline-hijau border ${
              variant !== "submit" && "bg-slate-400 text-gray-600"
            }`}
          />

          {/* Jumlah Penumpang */}
          <div className="flex items-end pb-2">
            <p className="text-sm">Jumlah Penumpang (opsional)</p>
          </div>
          <div
            className={`basis-1/4 border flex rounded-md items-center justify-between p-1 pe-3 ${
              variant !== "submit" && "bg-slate-400 text-gray-600"
            } ${focus && "border-hijau"}`}
          >
            <input
              type="number"
              value={totalPassenger}
              onChange={(e) => setTotalPassenger(e.target.value)}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              placeholder="Jumlah Penumpang"
              disabled={variant !== "submit"}
              className={`p-2 w-full focus:outline-none ${
                variant !== "submit" && "bg-slate-400"
              }`}
            />
            <GoPeople />
          </div>

          {/* Button */}
          {variant && <p></p>}
          {variant === "submit" ? (
            <Button type="submit">Cari Mobil</Button>
          ) : (
            variant === "edit" && (
              <Button variant="secondary" onclick={() => navigate(-1)}>
                Edit
              </Button>
            )
          )}
        </form>
      </div>
    </>
  );
}
