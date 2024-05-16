import { useEffect, useState } from "react";

import { ICar, ICarParams } from "../../types/cars";
import { fetchCars } from "../../services/cars";
import { IApiResponse } from "../../types/response";

export default function useFetchCars({
  search,
  availableOnly,
  size,
}: ICarParams) {
  const [cars, setCars] = useState<ICar[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async ({ search, availableOnly, size }: ICarParams) => {
    try {
      setIsLoading(true);
      const params: ICarParams = {
        search: search || "",
        availableOnly: availableOnly || false,
        size:
          Number(size) > 0
            ? size
            : size === "large"
            ? "6"
            : size === "medium"
            ? "4"
            : size === "small"
            ? "2"
            : "",
      };
      const data = (await fetchCars(params)) as unknown as IApiResponse<ICar[]>;
      setCars(data?.data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData({ search, availableOnly, size });
  }, [search, availableOnly, size]);

  return {
    cars,
    setCars,
    isLoading,
    setIsLoading,
  };
}
