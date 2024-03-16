import { IMeta } from "./response";

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

export interface ICarsResponse {
  meta: IMeta;
  data: ICars[];
}

export interface ICarsParams {
  search?: string;
  availableOnly?: boolean;
  size?: string;
}
