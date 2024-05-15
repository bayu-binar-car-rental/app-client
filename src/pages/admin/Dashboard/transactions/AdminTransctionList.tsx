import useFetchTransactions from "../../../../hooks/transactions/useFetchTransactions";

export default function AdminTransactionList() {
  const { transactions, isLoading } = useFetchTransactions();

  return (
    <>
      <div>
        <h2>Transactions</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          transactions.map((transaction) => (
            <p key={transaction.id}>{transaction.id}</p>
          ))
        )}
      </div>
    </>
  );
}
