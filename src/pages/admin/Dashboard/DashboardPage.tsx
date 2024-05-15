import AdminTransactionList from "./transactions/AdminTransctionList";

export default function DashboardPage() {
  return (
    <>
      <h2 className="font-bold text-2xl">Dashboard</h2>
      <AdminTransactionList />
    </>
  );
}
