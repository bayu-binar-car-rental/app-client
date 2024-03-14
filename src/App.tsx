import { useEffect, useState } from "react";

const BASE_URL = "https://binar-car-rental-api-bayu.fly.dev";

export interface ICars {
  id: number;
  plate: string;
  manufacture: string;
  model: string;
  image: string;
  rentPerDay: number;
  capacity: number;
  description: string;
  availableAt: string;
  transmission: string;
  available: boolean;
  type: string;
  year: number;
  options: string[];
  specs: string[];
}

export interface IMeta {
  status: number;
  success: boolean;
  message: string;
}

export interface ICarsResponse {
  meta: IMeta;
  data: ICars[];
}

function App() {
  const [cars, setCars] = useState<ICars[]>([]);

  useEffect(() => {
    const fetchCarData = async () => {
      const response = await fetch(`${BASE_URL}/api/v1/cars`);
      const data = (await response.json()) as ICarsResponse;

      setCars(data.data);
    };

    fetchCarData();
  }, []);

  return (
    <>
      <h1 className="text-3xl">Cars</h1>
      {cars.map((car) => {
        return <p key={car.id}>{car.plate}</p>;
      })}
    </>
  );
}

export default App;
