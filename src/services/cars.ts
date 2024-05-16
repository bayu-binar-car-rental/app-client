import { IApiResponse } from "../types/response";
import { ICar, ICarParams } from "../types/cars";

let BASE_URL: string;

if (import.meta.env.VITE_MODE === "development") {
  BASE_URL = "http://localhost:3000/api/v1";
} else {
  BASE_URL = "https://binar-car-rental-api-bayu.fly.dev/api/v1";
}

// Fetch List
export async function fetchCars(
  params: ICarParams
): Promise<IApiResponse<ICar[]> | undefined> {
  try {
    const { size, availableOnly, search } = params;
    const response = await fetch(
      `${BASE_URL}/cars?availableOnly=${availableOnly}&search=${search}&capacity=${size}`
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

// Fetch car by car id
export const fetchCarByCarIdApi = async (
  carId: string
): Promise<IApiResponse<ICar> | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}/cars/${carId}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
