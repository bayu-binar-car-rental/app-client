import { useEffect, useState } from "react";
import { BASE_URL } from "../../../../pages/admin/AdminLayout";
import { ICar, ICarResponse, ICarParams } from "../../../../types/cars";
import CarCard from "./CarCard";

interface ILoading {
  params: ICarParams;
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
}

export default function CarListContent({
  params,
  isLoading,
  setIsLoading,
}: ILoading) {
  const [cars, setCars] = useState<ICar[]>([]);
  const [isFetchFinished, setIsFetchFinished] = useState<boolean>(false);

  useEffect(() => {
    const fetchCars = async () => {
      setIsLoading(true);
      try {
        const search = params?.search || "";
        const availableOnly = params?.availableOnly || "";
        const size = params?.size || "";

        const response = await fetch(
          `${BASE_URL}/api/v1/cars?availableOnly=${availableOnly}&search=${search}&size=${size}`
        );
        const data = (await response.json()) as ICarResponse;

        if (data.meta.code !== 401) {
          setCars(data.data as ICar[]);
        } else {
          setCars([]);
        }

        setIsFetchFinished(true);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCars();
  }, [params]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {isFetchFinished && cars.length < 1 ? (
        <p>Cars not found</p>
      ) : (
        cars.map((car: ICar) => {
          return (
            <CarCard key={car.id} car={car} setCars={setCars} params={params} />
          );
        })
      )}
    </>
  );
}
