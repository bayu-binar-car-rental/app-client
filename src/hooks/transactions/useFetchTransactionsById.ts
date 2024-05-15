import { useEffect, useState } from "react";

import { IApiResponse } from "../../types/response";
import { ITransactions } from "../../types/transaction";
import { fetchTransactionsById } from "../../services/transactions";

interface IProps {
  transactionId: number;
}

export default function useFetchTransactions({ transactionId }: IProps) {
  const [transaction, setTransaction] = useState<ITransactions | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = (await fetchTransactionsById(
          transactionId
        )) as IApiResponse<ITransactions>;
        setTransaction(data.data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [transactionId]);

  return { transaction, setTransaction, isLoading, setIsLoading };
}
