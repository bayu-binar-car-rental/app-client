import { useState } from "react";
import { useNavigate } from "react-router-dom";

const options: string[] = ["Dengan Sopir", "Tanpa Sopir (Lepas Kunci)"];

export default function CarSearch() {
  const [time, setTime] = useState<string>("");
  const [penumpang, setPenumpang] = useState<string>("");
  const [availableAt, setAvailableAt] = useState<string>("");
  const [select, setSelect] = useState<string>("Pilih Tipe Driver");

  const navigate = useNavigate();

  return (
    <>
      <div className="py-10"></div>
      {/* Filters */}
      <div className="mx-32 p-5 shadow-md rounded-lg bg-white absolute -top-32 right-0 left-0 z-20">
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
              className="text-sm font-bold p-2 px-5 bg-[#5CB85F] text-white"
              onClick={() => navigate("car-list")}
            >
              Cari Mobil
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
