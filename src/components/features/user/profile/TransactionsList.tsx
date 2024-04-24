import useFetchTransactionsList from "../../../../hooks/useFetchTransactionsList";
import { ITransactions } from "../../../../types/transaction";

export default function TransactionsList() {
  const { data, isLoading } = useFetchTransactionsList();

  return (
    <>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data &&
          data.data.map((transaction: ITransactions) => (
            <p key={transaction.id}>{transaction.id}</p>
          ))
        )}
      </div>
    </>
  );
}
