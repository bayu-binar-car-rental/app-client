import keyIcon from "../../../assets/fi_key.svg";
import clockIcon from "../../../assets/fi_clock.svg";
import trashIcon from "../../../assets/fi_trash-2.svg";
import editIcon from "../../../assets/fi_edit.svg";

import { ICars } from "../../../types/cars";
import getDate from "../../../utils/getDate";
import convertRupiah from "../../../utils/convertRupiah";
import { useNavigate } from "react-router-dom";

export default function CarCard(car: ICars) {
  const navigate = useNavigate();
  return (
    <div className="border border-slate-300 rounded-md bg-white shadow-md relative overflow-hidden h-fit">
      {car.available ? (
        <span className="font-bold p-1 px-2 text-[.6rem] bg-white rounded-full shadow-md absolute top-2 right-2 text-green-500">
          Available
        </span>
      ) : (
        <span className="font-bold p-1 px-2 text-[.6rem] bg-white rounded-full shadow-md absolute top-2 right-2 text-red-500">
          Not Available
        </span>
      )}
      <img src={car.image} alt="Car Image" />

      {/* Car Details */}
      <div className="flex flex-col p-5">
        <div className="space-y-3 mt-auto grow">
          <p>
            {car.manufacture}/{car.model}
          </p>
          <h3 className="font-bold text-2xl">
            Rp {convertRupiah(car.rentPerDay)} / hari
          </h3>
          <div>
            <div className="flex space-x-2">
              <img src={keyIcon} alt="Key Icon" />
              <p>{getDate(car.availableAt)}</p>
            </div>
            <div className="flex space-x-2">
              <img src={clockIcon} alt="Key Icon" />
              <p>Updated at 4 Apr 2022, 09.00</p>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 pt-4">
          <button className="w-full p-3 px-4 flex border border-red-300 rounded-sm space-x-2 items-center justify-center hover:bg-red-500 hover:text-white text-red-300">
            <span>
              <img src={trashIcon} alt="Trash Icon" />
            </span>
            <span>Delete</span>
          </button>
          <button
            onClick={() => navigate(`${car.id}`)}
            className="w-full p-3 px-4 flex bg-green-500 rounded-sm space-x-2 items-center justify-center hover:bg-green-600"
          >
            <span>
              <img src={editIcon} alt="Edit Icon" />
            </span>
            <span className="text-white">Edit</span>
          </button>
        </div>
      </div>
    </div>
  );
}
