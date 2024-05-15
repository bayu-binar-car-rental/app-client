import { ITransactionsPayload } from "../types/transaction";

interface IUpdateTranscationProps {
  transactionId: number;
  params: ITransactionsPayload;
}

const useUpdateTransaction = async ({
  transactionId,
  params,
}: IUpdateTranscationProps) => {
  try {
    const response = await fetch(
      `https://binar-car-rental-api-bayu.fly.dev/api/v1/transactions/${transactionId}`,
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
