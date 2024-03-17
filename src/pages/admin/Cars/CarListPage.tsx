import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import rightChevron from "../../../assets/chevron-right.svg";
import { ICarsParams } from "../../../types/cars";
import CarListContent from "../../../components/features/CarList/CarListContent";
import ToggleButton from "../../../components/ui/ToggleButton";

const buttonLabels: string[] = ["All", "Small", "Medium", "Large"];

export default function CarList() {
  const [selectedCarSize, setSelectedCarSize] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const [params, setParams] = useState<ICarsParams>({ availableOnly: false });

  const navigate = useNavigate();

  useEffect(() => {
    setParams({ ...params, availableOnly: toggle });
  }, [toggle]);

  return (
    <>
      {/* Testiong */}
      {/* Breadcrumbs */}
      <div className="flex space-x-2">
        <span className="font-bold hover:cursor-pointer">Cars</span>
        <img src={rightChevron} alt="" />
        <span className="hover:cursor-pointer">List Car</span>
      </div>

      {/* Top Menus */}
      <div className="flex justify-between">
        {/* Left */}
        <div>
          <h1 className="text-2xl font-bold my-3">List Car</h1>
          <div className="flex space-x-3">
            {buttonLabels.map((label: string, index: number) =>
              index === selectedCarSize ? (
                <button
                  key={index}
                  className="p-1 px-3 bg-slate-300 border border-blue-700 rounded-sm text-blue-700"
                >
                  {label}
                </button>
              ) : (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedCarSize(index);
                    setParams({
                      ...params,
                      size: label.toLowerCase(),
                    });
                  }}
                  className="p-1 px-3 bg-slate-100 border border-slate-200 rounded-sm"
                >
                  {label}
                </button>
              )
            )}
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col justify-between">
          <button
            onClick={() => navigate("add-new-car")}
            className="bg-blue-800 text-white p-2 px-4 flex space-x-3 items-center hover:bg-blue-900"
          >
            <span className="text-xl">+</span>
            <span>Add New Car</span>
          </button>

          <div className="flex justify-end">
            <ToggleButton toggle={toggle} setToggle={setToggle} />
          </div>
        </div>
      </div>

      {/* List Content */}
      <div className="grid grid-cols-3 gap-5 mt-5">
        <CarListContent
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          params={params}
        />
      </div>
    </>
  );
}
