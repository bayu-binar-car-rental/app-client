import useFetchTransactionsList from "../../../../hooks/useFetchTransactionsList";
import { ITransactions } from "../../../../types/transaction";
import Transaction from "./Transaction";

export default function TransactionsList() {
  const { data, isLoading } = useFetchTransactionsList();

  return (
    <>
      <div className="space-y-2">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data &&
          data.data.map((transaction: ITransactions) => (
            <Transaction key={transaction.id} id={transaction.id as number} />
          ))
        )}
      </div>
    </>
  );
}
