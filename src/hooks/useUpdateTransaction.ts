import { ITransactions } from "../types/transaction";

interface IUpdateTranscationProps {
  transactionId: number;
  params: ITransactions;
}

const useUpdateTransaction = async ({
  transactionId,
  params,
}: IUpdateTranscationProps) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/v1/transactions/${transactionId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params),
      }
    );

    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

export default useUpdateTransaction;
