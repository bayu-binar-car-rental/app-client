import TransactionsList from "../../../components/features/user/profile/TransactionsList";
import Title from "../../../components/ui/Title";

export default function UserTransactionsPage() {
  return (
    <>
      <div className="space-y-2">
        <Title variant="h4" title="Transactions" />
        <TransactionsList />
      </div>
    </>
  );
}
