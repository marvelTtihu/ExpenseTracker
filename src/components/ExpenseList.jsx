import { formatRupiah } from "../utils/format";
import { useTransaction } from "../hooks/useTransaction";
import { useState } from "react";

const ExpenseList = () => {
  const { expenses, deleteExpense, CATEGORIES } = useTransaction();
  const [selectedOptions, setSelectedOptions] = useState("");

  const filteredExpense =
    selectedOptions === ""
      ? expenses
      : expenses.filter((item) => item.category === selectedOptions);

  return (
    <section className="space-y-4">
        <select
          id="categoryFilter"
          value={selectedOptions}
          onChange={(e) => setSelectedOptions(e.target.value)}
        >
          <option value="">All categories</option>
          {CATEGORIES.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[450px] text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-4 py-2 md:px-6 font-semibold">Expense</th>
                <th className="px-4 py-2 md:px-6 font-semibold">Category</th>
                <th className="px-4 py-2 md:px-6 font-semibold">Amount</th>
                <th className="px-4 py-2 md:px-6 font-semibold">Description</th>
                <th className="px-4 py-2 md:px-6 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredExpense.length === 0 ? (
                <p className="text-slate-500 px-4 py-4 md:px-6">No expenses yet.</p>
              ) : (
                filteredExpense.map((item) => (
                  <tr key={item.id} className="transition-colors hover:bg-slate-50">
                    <td className="whitespace-nowrap px-4 py-4 font-medium text-slate-800 md:px-6">
                      {item.name}
                    </td>

                    <td className="whitespace-nowrap px-4 py-4 md:px-6">
                      <span className="inline-flex rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700">
                        {item.category}
                      </span>
                    </td>

                    <td className="whitespace-nowrap px-4 py-4 font-semibold tabular-nums text-slate-800 md:px-6">
                      {formatRupiah(item.amount)}
                    </td>

                    <td className="max-w-56 px-4 py-4 text-slate-500 md:px-6">
                      <span className="line-clamp-2">
                        {item.desc || "-"}
                      </span>
                    </td>
                    <td className="px-4 py-4 md:px-6">
                      <button
                      className="cursor-pointer font-medium text-red-600 px-3 py-1 md:px-4 bg-red-200 rounded-xl transition-all hover:text-red-700 hover:bg-red-300"
                      onClick={() => deleteExpense(item.id)}
                      >
                      Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ExpenseList;
