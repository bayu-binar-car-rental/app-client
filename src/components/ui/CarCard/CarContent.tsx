import { ICar } from "../../../types/cars";
import convertRupiah from "../../../utils/convertRupiah";
import Button from "../Button";
import Title from "../Title";
import CarSpecs from "./CarSpecs";

interface ICarContentProps {
  car: ICar;
  onclick: (state?: any) => void;
}

export default function CarContent({ car, onclick }: ICarContentProps) {
  return (
    <div className="flex flex-col p-3 space-y-3 h-full">
      <span>
        {car.manufacture}/{car.model}
      </span>
      <Title
        title={`Rp ${convertRupiah(car.rentPerDay)} / hari`}
        variant="h5"
      />
      <p className="grow">{car.description}</p>
      <CarSpecs car={{ ...car }} />
      <Button onclick={() => onclick(car.id)}>Pilih Mobil</Button>
    </div>
  );
}
