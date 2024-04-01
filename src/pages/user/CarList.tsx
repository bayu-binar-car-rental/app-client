import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoCalendar, GoPeople, GoGear } from "react-icons/go";

import { ICar } from "../../types/cars";
import convertRupiah from "../../utils/convertRupiah";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectCarFilters } from "../../redux/slices/carFilterSlice";
import { setIsLoading, selectLoading } from "../../redux/slices/loadingSlice";
import CarFilter from "../../components/ui/CarFilter";
import Title from "../../components/ui/Title";

export default function CarList() {
  const [cars, setCars] = useState<ICar[]>([]);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectLoading);
  const { totalPassenger } = useAppSelector(selectCarFilters);

  useEffect(() => {
    const fetchCars = async () => {
      dispatch(setIsLoading(true));
      try {
        const response = await fetch(
          `https://binar-car-rental-api-bayu.fly.dev/api/v1/cars?availableOnly=true&capacity=${totalPassenger}`
        );

        const data = await response.json();
        setCars(data?.data);
      } catch (e) {
        console.log(e);
      } finally {
        dispatch(setIsLoading(false));
      }
    };

    fetchCars();
  }, []);

  useEffect(() => {
    console.log(cars);
  }, [cars]);

  return (
    <>
      {/* Filters */}
      <div className="py-32 lg:py-1"></div>
      <div className="mx-5 lg:mx-20 xl:mx-32 absolute -top-32 right-0 left-0 z-20">
        <CarFilter variant="edit" />
      </div>

      {/* Car List */}
      <div className="py-10">
        {isLoading ? (
          <div className="flex justify-center">
            <Title title="Loading..." variant="h4" />
          </div>
        ) : (
          <div>
            {!cars ? (
              <div className="flex justify-center">
                <Title title="Car not found :(" variant="h4" />
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-3">
                {cars.map((car) => (
                  <div
                    key={car.id}
                    className="border rounded-md shadow-md overflow-clip"
                  >
                    <div className="flex justify-center border h-40">
                      <img className="max-w-full" src={car.image} alt="" />
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
        )}
      </div>
    </>
  );
}
