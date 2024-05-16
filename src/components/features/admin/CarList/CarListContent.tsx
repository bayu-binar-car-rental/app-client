import CarCard from "./CarCard";
import { ICar, ICarParams } from "../../../../types/cars";
import useFetchCars from "../../../../hooks/cars/useFetchCars";

interface IProps {
  params: ICarParams;
}

export default function CarListContent({ params }: IProps) {
  const { cars, setCars, isLoading } = useFetchCars({ ...params });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {cars && cars.length < 1 ? (
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
