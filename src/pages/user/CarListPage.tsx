import useFetchCars from "../../hooks/cars/useFetchCars";

import Title from "../../components/ui/Title";
import CarFilter from "../../components/ui/CarFilter";
import CarNotFound from "../../components/ui/CarNotFound";
import CarCard from "../../components/ui/CarCard/CarCard";
import { useLocation } from "react-router-dom";

export default function CarListPage() {
  const location = useLocation();
  const { totalPassenger } = location.state;

  const { cars, isLoading } = useFetchCars({
    availableOnly: true,
    size: totalPassenger,
  });

  return (
    <>
      {/* Filters */}
      <div className="py-32 lg:py-1 "></div>
      <div className="mx-5 lg:mx-20 xl:mx-32 absolute -top-[10rem] right-0 left-0 z-20">
        <CarFilter variant="edit" title="Pencarianmu" />
      </div>

      {/* Car List */}
      <div className="py-1">
        {isLoading ? (
          <div className="flex justify-center">
            <Title title="Loading..." variant="h4" />
          </div>
        ) : (
          <div>
            {!cars ? (
              <CarNotFound />
            ) : (
              <div className="grid md:grid-cols-3 gap-3">
                {cars.map((car) => (
                  <CarCard key={car.id} {...car} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
