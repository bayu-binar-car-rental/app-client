import carImage from "../../../../../assets/img_car.png";

export default function HeroImage() {
  return (
    <div className="basis-auto flex justify-end items-end absolute bottom-0 right-0 z-0">
      <img
        className="w-11/12 overflow-x-hidden md:w-10/12 xl:w-11/12"
        src={carImage}
        alt="Car Image"
      />
    </div>
  );
}
