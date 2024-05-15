import { useEffect, useState } from "react";
import { ITransactions } from "../../types/transaction";
import { fetchTransactions } from "../../services/transactions";
import { IApiResponse } from "../../types/response";

export default function useFetchTransactions(refresh?: boolean) {
  const [transactions, setTransactions] = useState<ITransactions[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = (await fetchTransactions()) as IApiResponse<
          ITransactions[]
        >;
        setTransactions(data.data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [refresh]);

  return { transactions, setTransactions, isLoading, setIsLoading };
}
