import { GoPeople } from "react-icons/go";
import { useNavigate } from "react-router-dom";

import Title from "./Title";
import MyDate from "../../utils/MyDate";
import React, { useState } from "react";
import Button from "./Button";
import useCarFilters from "../../hooks/useCarFilters";

interface IProps {
  title?: string;
  variant?: string;
}

export default function CarFilter({ title, variant }: IProps) {
  const navigate = useNavigate();
  const options: string[] = ["Tanpa Sopir (Lepas Kunci)", "Dengan Sopir"];

  const [focus, setFocus] = useState<boolean>(false);
  const {
    driverType,
    setDriverType,
    rentDate,
    setRentDate,
    pickupTime,
    setPickupTime,
    totalPassenger,
    setTotalPassenger,
  } = useCarFilters();

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
          className="grid grid-rows-2 lg:grid-flow-col gap-x-3 gap-y-1 lg:gap-y-0 text-sm"
        >
          {/* Tipe Driver */}
          <div className="flex items-end md:pb-2">
            <p className="text-sm">Tipe Driver</p>
          </div>
          <select
            value={driverType}
            disabled={variant !== "submit"}
            onChange={(e) => setDriverType(e.target.value)}
            className={`p-2 text-sm h-full w-full block rounded-md border focus:outline-hijau ${
              variant !== "submit"
                ? "bg-[#94a3b8]"
                : "bg-white hover:cursor-pointer"
            }`}
          >
            {options.map((option, index) => (
              <option key={index} value={index} className="text-sm">
                {option}
              </option>
            ))}
          </select>

          {/* Tanggal */}
          <div className="flex items-end md:pb-2">
            <p className="text-sm">Tanggal</p>
          </div>
          <div>
            <input
              type="date"
              placeholder="Pilih Tanggal"
              value={rentDate}
              min={new MyDate().today()}
              onChange={(e) => setRentDate(e.target.value)}
              disabled={variant !== "submit"}
              className={`p-2 text-sm h-full w-full rounded-md focus:outline-hijau border ${
                variant !== "submit"
                  ? "bg-slate-400 text-gray-600"
                  : "hover:cursor-pointer"
              }`}
            />
          </div>

          {/* Waktu Jemput/Ambil */}
          <div className="flex items-end md:pb-2">
            <p className="text-sm">Waktu Jemput/Ambil</p>
          </div>
          <input
            type="time"
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
            disabled={variant !== "submit"}
            className={`p-2  w-full rounded-md focus:outline-hijau border ${
              variant !== "submit"
                ? "bg-slate-400 text-gray-600"
                : "hover:cursor-pointer"
            }`}
          />

          {/* Jumlah Penumpang */}
          <div className="flex items-end md:pb-2">
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
              <Button variant="secondary" onclick={() => navigate("/car")}>
                Edit
              </Button>
            )
          )}
        </form>
      </div>
    </>
  );
}
