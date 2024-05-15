export interface IMeta {
  code: number;
  success: boolean;
  message: string;
}

export interface IApiResponse<T> {
  meta: IMeta;
  data: T;
}
