import { useEffect, useState } from "react";

import { ICar } from "../types/cars";
import { IApiResponse } from "../types/response";
import { fetchCarByCarIdApi } from "../services/cars";

export default function useFetchCarByCarId(carId: string) {
  const [car, setCar] = useState<ICar | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCar = async (carId: string) => {
      try {
        setIsLoading(true);
        const data = (await fetchCarByCarIdApi(
          carId
        )) as unknown as IApiResponse<ICar>;
        setCar(data?.data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCar(carId);
  }, [carId]);

  return { car, setCar, isLoading, setIsLoading };
}
