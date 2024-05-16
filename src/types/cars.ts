export interface ICar {
  id?: number;
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
  created_at?: string;
  updated_at?: string;
}

export interface ICarParams {
  search?: string;
  availableOnly?: boolean;
  size?: string;
}
