import Title from "./Title";

export default function CarNotFound() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Title title="Car not found :(" variant="h4" />
      <p className="text-center">
        Please try to adjust the date and total passenger.
        <br />
        It could be that we don't have cars that suited your needs.
      </p>
    </div>
  );
}
