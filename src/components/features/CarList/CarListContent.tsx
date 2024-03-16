import { useEffect, useState } from "react";
import { BASE_URL } from "../../../pages/admin/AdminLayout";
import { ICars, ICarsResponse, ICarsParams } from "../../../types/cars";
import CarCard from "./CarCard";

interface ILoading {
  isLoading: boolean;
  params: ICarsParams;
  setIsLoading: (state: boolean) => void;
}

export default function CarListContent({
  isLoading,
  params,
  setIsLoading,
}: ILoading) {
  const [cars, setCars] = useState<ICars[]>([]);

  useEffect(() => {
    setIsLoading(true);

    try {
      async function fetchCarData() {
        const search = params?.search || "";
        const availableOnly = params?.availableOnly || "";
        const size = params?.size || "";

        const response = await fetch(
          `${BASE_URL}/api/v1/cars?availableOnly=${availableOnly}&search=${search}&size=${size}`
        );
        const data = (await response.json()) as ICarsResponse;

        setCars(data.data);
      }

      fetchCarData();
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }, [params]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {cars.map((car: ICars) => {
        return <CarCard key={car.id} {...car} />;
      })}
    </>
  );
}
