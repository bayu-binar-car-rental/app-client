import { useEffect, useState } from "react";

export default function useCarFilters() {
  const [driverType, setDriverType] = useState<string | undefined>(undefined);
  const [rentDate, setRentDate] = useState<string>("");
  const [pickupTime, setPickupTime] = useState<string>("");
  const [totalPassenger, setTotalPassenger] = useState<string>("");

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

  return {
    driverType,
    setDriverType,
    rentDate,
    setRentDate,
    pickupTime,
    setPickupTime,
    totalPassenger,
    setTotalPassenger,
  };
}
