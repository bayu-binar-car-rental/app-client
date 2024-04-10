import { GoCalendar, GoGear, GoPeople } from "react-icons/go";
import { ICar } from "../../../types/cars";

export default function CarSpecs(car: ICar) {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <GoPeople className="text-xl text-gray-500" />
        <p>{car.capacity} orang</p>
      </div>
      <div className="flex items-center space-x-3">
        <GoGear className="text-xl text-gray-500" />
        <p>{car.transmission}</p>
      </div>
      <div className="flex items-center space-x-3">
        <GoCalendar className="text-xl text-gray-500" />
        <p>Tahun {car.year}</p>
      </div>
    </div>
  );
}
