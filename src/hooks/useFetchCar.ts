import { useEffect, useState } from "react";

import { ICar } from "../types/cars";
import { useAppDispatch } from "../states/hooks";
import { setIsLoading } from "../states/slices/loadingSlice";

export default function useFetchCar(id: string) {
  const carId = id;
  const dispatch = useAppDispatch();
  const [car, setCar] = useState<ICar | null>();

  useEffect(() => {
    dispatch(setIsLoading(true));

    const fetchCar = async (carId: string) => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/v1/cars/${+carId}`
        );

        const data = await response.json();
        setCar(data.data);
      } catch (e) {
        console.log(e);
      } finally {
        dispatch(setIsLoading(false));
      }
    };

    fetchCar(carId as string);
  }, []);

  return { car, setCar };
}
