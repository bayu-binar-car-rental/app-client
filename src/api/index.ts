import axios from "axios";

export const api = axios.create({
  baseURL: "https://binar-car-rental-api-bayu.fly.dev/api/v1/",
});

export const fetcher = (url: string) => api.get(url).then((res) => res.data);
