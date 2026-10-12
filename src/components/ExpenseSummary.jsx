import { useTransaction } from "../hooks/useTransaction";
import { formatRupiah } from "../utils/format";

const ExpenseSummary = () => {
  const {expenses} = useTransaction();

  const totalExpense = expenses.reduce((acc, item) => acc + item.amount, 0);

  const totalTransactions = expenses.length;

  return (
    <section>
      <article className="mx-auto grid grid-cols-1 md:grid-cols-3 px-4 py-2">
        <article>
          <h2>Total Expense</h2>
          <span>{formatRupiah(totalExpense)}</span>
          <span className="block">Montly Expense</span>
        </article>

        <article>
          <h2>Transactions </h2>
          <span>{totalTransactions}</span>
          <span className="block">This month</span>
        </article>

        <article>
          <h2>Total Budget</h2>
          <span>Rp0</span>
        </article>

      </article>
    </section>
  );
}

export default ExpenseSummary;
