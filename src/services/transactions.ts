import { IApiResponse } from "../types/response";
import { ITransactions, ITransactionsPayload } from "../types/transaction";
const BASE_URL = "https://binar-car-rental-api-bayu.fly.dev/api/v1";

// Fetch Transaction List
export const fetchTransactions = async (): Promise<
  IApiResponse<ITransactions[]> | undefined
> => {
  try {
    const response = await fetch(`${BASE_URL}/transactions`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

// Fetch transactions by ID
export const fetchTransactionsById = async (id: number) => {
  try {
    const response = await fetch(`${BASE_URL}/transactions/${id}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

// Fetch User's transactions
export const fetchTransactionsByUserId = async (userId: number) => {
  try {
    const response = await fetch(`${BASE_URL}/transactions/user/${userId}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

// Update transaction
export const updateTransactions = async (
  transactionId: number,
  payload: ITransactionsPayload
) => {
  try {
    const response = await fetch(`${BASE_URL}/transactions/${transactionId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
