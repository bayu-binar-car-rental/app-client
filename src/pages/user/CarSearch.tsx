import CarFilter from "../../components/ui/CarFilter";

export default function CarSearch() {
  return (
    <>
      <div className="py-32 lg:py-3"></div>
      <div className="mx-5 lg:mx-20 xl:mx-32 absolute -top-28 sm:-top-32 right-0 left-0 z-20">
        <CarFilter variant="submit" />
      </div>
    </>
  );
}
