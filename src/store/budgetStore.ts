import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Transaction = {
  id: string;
  type: "income" | "expense";
  amount: number;
  description: string;
  date: string;
};

type BudgetState = {
  transactions: Transaction[];
  addTransaction: (transaction: Omit<Transaction, "id" | "date">) => void;
  removeTransaction: (id: string) => void;
  getTotalIncome: () => number;
  getTotalExpenses: () => number;
  getBalance: () => number;
};

export const useBudgetStore = create<BudgetState>()(
  persist(
    (set, get) => ({
      transactions: [],
      addTransaction: (transaction) =>
        set((state) => ({
          transactions: [
            {
              ...transaction,
              id: crypto.randomUUID(),
              date: new Date().toISOString(),
            },
            ...state.transactions,
          ],
        })),
      removeTransaction: (id) =>
        set((state) => ({
          transactions: state.transactions.filter((t) => t.id !== id),
        })),
      getTotalIncome: () =>
        get()
          .transactions.filter((t) => t.type === "income")
          .reduce((sum, t) => sum + t.amount, 0),
      getTotalExpenses: () =>
        get()
          .transactions.filter((t) => t.type === "expense")
          .reduce((sum, t) => sum + t.amount, 0),
      getBalance: () => get().getTotalIncome() - get().getTotalExpenses(),
    }),
    {
      name: "budget-storage",
    }
  )
);
