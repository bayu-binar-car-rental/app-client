import TransactionsList from "../../../components/features/user/profile/TransactionsList";
import Title from "../../../components/ui/Title";

export default function UserTransactionsPage() {
  return (
    <>
      <div>
        <Title variant="h4" title="Transactions" />
        <TransactionsList />
      </div>
    </>
  );
}
