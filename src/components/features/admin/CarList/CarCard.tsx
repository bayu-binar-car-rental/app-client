import keyIcon from "../../../../assets/fi_key.svg";
import clockIcon from "../../../../assets/fi_clock.svg";
import trashIcon from "../../../../assets/fi_trash-2.svg";
import editIcon from "../../../../assets/fi_edit.svg";
import modalImage from "../../../../assets/img-BeepBeep.png";

import { ICars } from "../../../../types/cars";
import { ICarsParams } from "../../../../types/cars";
import { ICarsResponse } from "../../../../types/cars";

import getDate from "../../../../utils/getDate";
import convertRupiah from "../../../../utils/convertRupiah";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface IProps {
  car: ICars;
  params: ICarsParams;
  setCars: (state: ICars[]) => void;
}

export default function CarCard({ car, params, setCars }: IProps) {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onClickDelete = (id: number) => {
    setOpenModal(true);
    setSelectedId(id);
  };

  const handleCancelDelete = () => {
    setOpenModal(false);
    setSelectedId(0);
  };

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const search = params?.search || "";
      const availableOnly = params?.availableOnly || "";
      const size = params?.size || "";

      const response = await fetch(
        `https://binar-car-rental-api-bayu.fly.dev/api/v1/cars/${selectedId}`,
        { method: "DELETE" }
      );

      console.log(await response.json());
      alert(`Car ${selectedId} has been deleted`);
      setOpenModal(false);

      const carResponse = await fetch(
        `https://binar-car-rental-api-bayu.fly.dev/api/v1/cars?availableOnly=${availableOnly}&search=${search}&size=${size}`
      );
      const data = (await carResponse.json()) as ICarsResponse;

      if (data.meta.code !== 401) {
        setCars(data.data);
      } else {
        setCars([]);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="border border-slate-300 rounded-md bg-white shadow-md relative overflow-hidden flex flex-col">
      {car.available ? (
        <span className="font-bold p-1 px-2 text-[.6rem] bg-white rounded-full shadow-md absolute top-2 right-2 text-green-500">
          Available
        </span>
      ) : (
        <span className="font-bold p-1 px-2 text-[.6rem] bg-white rounded-full shadow-md absolute top-2 right-2 text-red-500">
          Not Available
        </span>
      )}
      <div className="basis-1/2 flex justify-center items-center">
        <img className="h-full" src={car.image} alt="Car Image" />
      </div>

      {/* Car Details */}
      <div className="flex flex-col p-5 basis-1/2">
        <div className="space-y-3 mt-auto grow">
          <p>
            {car.manufacture}/{car.model}
          </p>
          <h3 className="font-bold text-2xl">
            Rp {convertRupiah(car.rentPerDay)} / Day
          </h3>
          <div>
            <div className="flex space-x-2">
              <img src={keyIcon} alt="Key Icon" />
              <p>{getDate(car.availableAt)}</p>
            </div>
            <div className="flex space-x-2">
              <img src={clockIcon} alt="Key Icon" />
              <p>Updated at {getDate(car.updated_at as string)}</p>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 pt-4">
          <button
            onClick={() => onClickDelete(car.id as number)}
            className="w-full p-3 px-4 flex border border-red-300 rounded-sm space-x-2 items-center justify-center hover:bg-red-500 hover:text-white text-red-300"
          >
            <span>
              <img src={trashIcon} alt="Trash Icon" />
            </span>
            <span>Delete</span>
          </button>
          <button
            onClick={() => navigate(`edit-car/${car.id}`)}
            className="w-full p-3 px-4 flex bg-green-500 rounded-sm space-x-2 items-center justify-center hover:bg-green-600"
          >
            <span>
              <img src={editIcon} alt="Edit Icon" />
            </span>
            <span className="text-white">Edit</span>
          </button>
        </div>
      </div>
      {openModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-md">
              {/*content*/}
              <div className="py-5 px-8 rounded shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none justify-center space-y-3">
                <div className="flex justify-center items-center">
                  <img src={modalImage} alt="" />
                </div>
                <h3 className="font-bold text-xl text-center">
                  Deleting Car Data
                </h3>
                <p className="text-center">
                  After deleted, the car's data cannot be recovered. Proceed to
                  the deleting process?
                </p>
                {/*footer*/}
                <div className="flex items-center justify-center rounded-b space-x-3 pt-3">
                  <button
                    className={`py-2 px-7 bg-blue-700 border border-blue-700 text-white ${
                      isLoading && "bg-gray-400 text-gray-700"
                    } hover:bg-blue-800`}
                    type="button"
                    onClick={() => handleCancelDelete()}
                  >
                    Cancel
                  </button>
                  <button
                    className="py-2 px-7 border border-blue-700 text-blue-700 hover:bg-blue-200 font-bold"
                    type="button"
                    onClick={() => handleDelete()}
                    disabled={isLoading}
                  >
                    {isLoading ? "Loading..." : "Yes"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </div>
  );
}
