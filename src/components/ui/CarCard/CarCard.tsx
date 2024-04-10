import { ICar } from "../../../types/cars";
import { useNavigate } from "react-router-dom";
import CarImage from "./CarImage";
import CarContent from "./CarContent";

export default function CarCard(car: ICar) {
  const navigate = useNavigate();

  const handleChooseCar = (carId: number): void => {
    try {
      const carFilters = JSON.parse(
        localStorage.getItem("carFilters") as string
      );
      if (carFilters.paymentMethod) {
        delete carFilters.paymentMethod;

        localStorage.setItem("carFilters", JSON.stringify(carFilters));
      }
    } catch (e) {
      console.log(e);
    } finally {
      navigate(`/car/${carId}`);
    }
  };

  return (
    <div className="flex flex-col rounded-md shadow-md border overflow-clip">
      <div className="bg-gray-500">
        <CarImage src={car.image} />
      </div>
      <div className="flex-auto">
        <CarContent car={{ ...car }} onclick={handleChooseCar} />
      </div>
    </div>
  );
}
