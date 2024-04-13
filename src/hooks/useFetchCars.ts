import { useEffect, useState } from "react";
import { useAppDispatch } from "../states/hooks";
import { setIsLoading } from "../states/slices/loadingSlice";
import { ICar } from "../types/cars";
import { useLocation } from "react-router-dom";

export default function useFetchCars() {
  const location = useLocation();
  const { totalPassenger } = location.state;

  const [cars, setCars] = useState<ICar[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchCars = async () => {
      dispatch(setIsLoading(true));
      try {
        const response = await fetch(
          `http://localhost:3000/api/v1/cars?availableOnly=true&capacity=${totalPassenger}`
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

  return {
    cars,
    setCars,
  };
}
