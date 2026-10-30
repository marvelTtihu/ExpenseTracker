import { useTransaction } from "../hooks/useTransaction";
import { formatRupiah } from "../utils/format";

const ExpenseSummary = () => {
  const {expenses, budgets} = useTransaction();

  const totalExpenses = expenses.reduce((acc, item) => acc + item.amount, 0);

  const totalBudgets = budgets.length;

  const totalTransactions = expenses.length;

  return (
    <section>
      <article className="mx-auto grid grid-cols-1 gap-5 px-4 py-2 sm:grid-cols-2 lg:grid-cols-3">
        <article className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <h2 className="text-slate-500">Expense</h2>
            <span className="mt-3 font-bold text-xl">{formatRupiah(totalExpenses)}</span>
        </article>

        <article className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <h2 className="text-slate-500">Total Budget</h2>
          <span className="mt-3 font-bold text-xl">{totalBudgets}</span>
        </article>

        <article className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <h2 className="text-slate-500">Transactions </h2>
          <span className="mt-3 font-bold text-xl">{totalTransactions}</span>
        </article>

      </article>
    </section>
  );
}

export default ExpenseSummary;
