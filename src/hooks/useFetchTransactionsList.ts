import useSWR from "swr";
import { useAppSelector } from "../states/hooks";

export default function useFetchTransactionsList() {
  const { id } = useAppSelector((state) => state.user);
  const { data, isLoading } = useSWR(`transactions/user/${id}`);

  return { data, isLoading };
}
