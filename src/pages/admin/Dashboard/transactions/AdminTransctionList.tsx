import { FaSort } from "react-icons/fa";
import { useEffect, useState } from "react";
import {
  fetchTransactions,
  updateTransactions,
} from "../../../../services/transactions";
import convertRupiah from "../../../../utils/convertRupiah";
import { ITransactions } from "../../../../types/transaction";
import { IApiResponse } from "../../../../types/response";

export default function AdminTransactionList() {
  const [transactions, setTransactions] = useState<ITransactions[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [shownRow, setShownRow] = useState<number>(10);
  const headers = [
    "No",
    "User ID",
    "Car",
    "Start Rent",
    "Finish Rent",
    "Price",
    "Status",
  ];

  useEffect(() => {
    const refreshTransactionData = async () => {
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
        setRefresh(false);
      }
    };

    refreshTransactionData();
  }, [refresh]);

  type TPaymentStatus = "ongoing" | "success" | "failed" | "rejected";

  function setTransactionPaymentStatus(id: number, status: TPaymentStatus) {
    updateTransactions(id, { paymentStatus: status });
    setRefresh(true);
  }

  return (
    <>
      <div className="py-7">
        <div className="flex items-center space-x-2 mb-5">
          <span className="border-s-4 border-biru h-6" />
          <h3 className="font-bold">Transactions</h3>
        </div>
        <table className="table-auto w-full">
          <thead className="text-left">
            <tr className="bg-ungu rounded">
              {headers.map((header, index) =>
                index === 0 ? (
                  <th key={index} className="text-center py-2">
                    {header}
                  </th>
                ) : (
                  <th key={index} className="px-3">
                    <div className="flex items-center justify-between hover:cursor-pointer">
                      <p>{header}</p>
                      <FaSort />
                    </div>
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="bg-white">
            {isLoading ? (
              <tr>
                <td colSpan={headers.length} className="text-center">
                  Loading...
                </td>
              </tr>
            ) : (
              transactions.slice(0, shownRow).map((transaction) => (
                <tr
                  key={transaction.id}
                  className="hover:bg-light-ungu hover:cursor-pointer"
                >
                  <td className="text-center py-2">{transaction.id}</td>
                  <td className="px-3">{transaction.idUser}</td>
                  <td className="px-3">{transaction.idCar}</td>
                  <td className="px-3">{transaction.rentDate}</td>
                  <td className="px-3">{transaction.rentDate}</td>
                  <td className="px-3">
                    Rp{convertRupiah(transaction.totalPrice as number)}
                  </td>
                  <td className="px-3">
                    <div className="flex items-center space-x-2">
                      <div
                        className={`h-2 w-3 rounded-full ${
                          transaction.paymentStatus === "ongoing"
                            ? "bg-orange-500"
                            : transaction.paymentStatus === "success"
                            ? "bg-green-500"
                            : transaction.paymentStatus === "failed" &&
                              "bg-red-500"
                        }`}
                      />
                      <select
                        value={transaction.paymentStatus}
                        className="focus:outline-none bg-inherit w-full"
                        onChange={(e) =>
                          setTransactionPaymentStatus(
                            transaction.id as number,
                            e.target.value as TPaymentStatus
                          )
                        }
                      >
                        {["ongoing", "success", "failed"].map((text) => (
                          <option value={text} className="text-black">
                            {text}
                          </option>
                        ))}
                      </select>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <select
          onChange={(e) => setShownRow(+e.target.value)}
          className="focus:outline-none"
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="35">35</option>
        </select>
      </div>
    </>
  );
}
