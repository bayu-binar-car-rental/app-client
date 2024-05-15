import { useEffect, useState } from "react";

export default function useCarFilters() {
  const [driverType, setDriverType] = useState<string | undefined>(undefined);
  const [rentDate, setRentDate] = useState<string | undefined>(undefined);
  const [pickupTime, setPickupTime] = useState<string | undefined>(undefined);
  const [totalPassenger, setTotalPassenger] = useState<string>("");
  const [isFilterValid, setIsFilterValid] = useState<boolean>(false);

  useEffect(() => {
    const carFilters = localStorage.getItem("carFilters") as string;

    if (carFilters) {
      const carFiltersJson = JSON.parse(carFilters);

      setDriverType(carFiltersJson.driverType);
      setRentDate(carFiltersJson.rentDate);
      setPickupTime(carFiltersJson.pickupTime);
      setTotalPassenger(carFiltersJson.totalPassenger);
    }
  }, []);

  // Validation
  useEffect(() => {
    if (rentDate && pickupTime) {
      setIsFilterValid(true);
    }
  }, [driverType, rentDate, pickupTime]);

  return {
    driverType,
    setDriverType,
    rentDate,
    setRentDate,
    pickupTime,
    setPickupTime,
    totalPassenger,
    setTotalPassenger,
    isFilterValid,
  };
}
