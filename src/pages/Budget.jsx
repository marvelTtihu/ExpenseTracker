import { useState } from "react";
import { useTransaction } from "../hooks/useTransaction";
import { formatRupiah } from "../utils/format";

export default function Budget() {
    const { expenses, budgets, setBudget, deleteBudget, CATEGORIES} = useTransaction();

    const [category, setCategory] = useState(CATEGORIES[0]);
    const [limit, setLimit] = useState("");

    const getSpent = (category) => {
        return expenses
            .filter((expense) => expense.category === category)
            .reduce((total, expense) => total + Number(expense.amount), 0);
    };

    const totalBudget = budgets.reduce((total, budget) => total + Number(budget.limit),0);

    const totalSpent = budgets.reduce((total, budget) => total + getSpent(budget.category),0);

    const remaining = totalBudget - totalSpent;

    const handleSubmit = (e) => {
        e.preventDefault();

        const amount = Number(limit);
        if (!amount || amount < 1) return;

        setBudget(category, amount);
        setLimit("");
    };

    return (
        <section className="min-h-dvh bg-slate-100">
            <div className="max-w-5xl mx-auto px-4 py-8 md:px-8">
                <h2 className="text-2xl md:text-4xl font-bold">
                    Budget
                </h2>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-sm text-slate-500">Total Budget</p>
                        <p className="text-xl font-bold">
                            {formatRupiah(totalBudget)}
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-sm text-slate-500">Spent</p>
                        <p className="text-xl font-bold">
                            {formatRupiah(totalSpent)}
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-sm text-slate-500">Remaining</p>
                        <p
                            className={`text-xl font-bold ${
                                remaining < 0 ? "text-red-600" : ""
                            }`}
                        >
                            {formatRupiah(remaining)}
                        </p>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="mt-6 bg-white p-4 rounded-lg shadow-sm flex flex-col md:flex-row gap-3 md:items-end"
                >
                    <label className="flex flex-col gap-1 text-sm flex-1">
                        Category
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="border border-slate-300 rounded px-3 py-2"
                        >
                            {CATEGORIES.map((item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label className="flex flex-col gap-1 text-sm flex-1">
                        Monthly limit
                        <input
                            type="number"
                            min="1"
                            step="1"
                            value={limit}
                            onChange={(e) => setLimit(e.target.value)}
                            placeholder="How much?"
                            required
                            className="border border-slate-300 rounded px-3 py-2"
                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-black text-white rounded px-4 py-2 cursor-pointer"
                    >
                        Set Budget
                    </button>
                </form>

                <section className="mt-6 space-y-4">
                    {budgets.length === 0 ? (
                        <p className="text-slate-500">
                            No budgets yet. Set one above.
                        </p>
                    ) : (
                        budgets.map((budget) => {
                            const spent = getSpent(budget.category);
                            const amount = Number(budget.limit);
                            const percent = amount > 0
                                ? Math.min((spent / amount) * 100, 100)
                                : 0;
                            const over = spent > amount;

                            return (
                                <article
                                    key={budget.id}
                                    className="bg-white p-4 rounded-lg shadow-sm"
                                >
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-semibold">
                                            {budget.category}
                                        </h3>

                                        <button
                                            type="button"
                                            onClick={() => deleteBudget(budget.id)}
                                            className="text-sm text-slate-500 hover:text-red-600 cursor-pointer"
                                        >
                                            Delete
                                        </button>
                                    </div>

                                    <div className="mt-3 h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full rounded-full ${
                                                over ? "bg-red-600" : "bg-black"
                                            }`}
                                            style={{ width: `${percent}%` }}
                                        />
                                    </div>

                                    <div className="mt-2 flex justify-between text-sm text-slate-600">
                                        <span>
                                            {formatRupiah(spent)} of{" "}
                                            {formatRupiah(amount)}
                                        </span>

                                        <span
                                            className={
                                                over
                                                    ? "text-red-600 font-medium"
                                                    : ""
                                            }
                                        >
                                            {over
                                                ? `${formatRupiah(spent - amount)} over`
                                                : `${formatRupiah(amount - spent)} left`}
                                        </span>
                                    </div>
                                </article>
                            );
                        })
                    )}
                </section>
            </div>
        </section>
    );
}