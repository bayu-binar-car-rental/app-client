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

export interface IMenus {
  icon: string;
  alt: string;
  title: string;
  submenus: string[];
  paths: string[];
}
